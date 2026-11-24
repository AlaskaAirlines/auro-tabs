/**
 * Manages a list of child items and notifies subscribers when the list changes.
 * Use it to add and remove items, subscribe to changes, and look up items by position.
 * @class ChildItemService
 */
export class ChildItemService {
  /**
   * @property {Array} items - The tabs or panels the service manages.
   * @private
   */
  #items = [];

  /**
   * @property {Array} previousItems - The items as they were before the latest change.
   * @private
   */
  #previousItems = [];

  /**
   * @property {Array} subscribers - The functions to call when the items change.
   * @private
   */
  #subscribers = [];

  /**
   * @property {Object[]} current - The items the service currently manages.
   */
  get current() {
    return this.#items;
  }

  /**
   * @description Subscribes a function to changes in the items array.
   * @param {Function} callback - The function to call when the items change.
   * @returns {Function} The function that unsubscribes the callback.
   * @throws {Error} If the callback isn't a function.
   */
  subscribe(callback) {
    if (typeof callback !== "function")
      throw new Error(
        "AuroTabService | subscribe: Callback must be a function",
      );
    this.#subscribers.push(callback);

    return () => this.unsubscribe(callback);
  }

  /**
   * @description Unsubscribes a function from changes in the items array.
   * @param {Function} callback - The function to stop calling when the items change.
   * @returns {Boolean} Always true.
   * @throws {Error} If the callback isn't a function.
   */
  unsubscribe(callback) {
    if (typeof callback !== "function")
      throw new Error(
        "AuroTabService | unsubscribe: Callback must be a function",
      );
    this.#subscribers = this.#subscribers.filter(
      (subscriber) => subscriber !== callback,
    );

    return true;
  }

  /**
   * Notify all subscribers of changes in the items array.
   */
  #notifySubscribers() {
    for (const callback of this.#subscribers)
      callback(this.#items, this.#previousItems);
  }

  /**
   * @description Adds an item and notifies subscribers.
   * @param {Object} item - The item to add.
   * @returns {void}
   * @throws {Error} If the item isn't an object.
   */
  add(item) {
    if (typeof item !== "object" || item === null)
      throw new Error("AuroTabService | addItem: Item must be an object");

    this.#previousItems = this.#getPreviousItems();
    this.#items.push(item);
    this.#notifySubscribers();
  }

  /**
   * @description Adds several items and notifies subscribers.
   * @param {ArrayLike<any>} items - The items to add.
   * @returns {void}
   * @throws {Error} If the items aren't iterable.
   */
  addMany(items) {
    if (
      !items ||
      typeof items[Symbol.iterator] !== "function" || // otherwise, check if it's iterable
      typeof items === "string" // technically string is iterable ;)
    ) {
      throw new Error(
        "AuroTabService | addMany: Items must be iterable (array, etc.)",
      );
    }

    this.#previousItems = this.#getPreviousItems();
    this.#items.push(...items);
    this.#notifySubscribers();
  }

  /**
   * @description Removes an item and notifies subscribers.
   * @param {Object} item - The item to remove.
   * @returns {void}
   * @throws {Error} If the item isn't an object.
   */
  remove(item) {
    if (typeof item !== "object" || item === null)
      throw new Error("AuroTabService | removeItem: Item must be an object");

    this.#previousItems = this.#getPreviousItems();
    this.#items = this.#items.filter((i) => i !== item);
    this.#notifySubscribers();
  }

  /**
   * @description Removes all items and notifies subscribers.
   * @returns {void}
   */
  clear() {
    this.#previousItems = this.#getPreviousItems();
    this.#items = [];
    this.#notifySubscribers();
  }

  /**
   * Gets the item at a 0-based index.
   * @param {Number} index - The 0-based index of the item.
   * @returns {HTMLElement} The item at that index, or undefined if there isn't one.
   */
  getItemByIndex(index) {
    return this.#items[index];
  }

  /**
   * Gets the item at a 1-based position.
   * @param {Number} number - The 1-based position of the item.
   * @returns {HTMLElement} The item at that position.
   * @throws {Error} If there are no items, or the number is negative or larger than the item count.
   */
  getItemByNumber(number) {
    if (
      this.#items.length === 0 ||
      typeof number !== "number" ||
      number < 0 ||
      number > this.#items.length
    ) {
      throw new Error(
        "AuroTabService | getItemByNumber: Number must be a valid index within the range of items.",
      );
    }
    return this.#items[number - 1];
  }

  /**
   * Gets the item before the item at a 1-based position, wrapping to the last item from the first.
   * @param {Number} currentNumber - The 1-based position of the current item.
   * @returns {HTMLElement} The previous item.
   * @throws {Error} If the number isn't between 1 and the item count.
   */
  getPreviousItem(currentNumber) {
    if (
      typeof currentNumber !== "number" ||
      currentNumber < 1 ||
      currentNumber > this.#items.length
    ) {
      throw new Error(
        "AuroTabService | getPreviousItem: Index must be a valid number within the range of previous items.",
      );
    }

    let index = currentNumber - 2; // Convert to 0-based index
    index = index < 0 ? this.#items.length - 1 : index;

    return this.#items[index];
  }

  /**
   * Gets the item after the item at a 1-based position, wrapping to the first item from the last.
   * @param {Number} currentNumber - The 1-based position of the current item.
   * @returns {HTMLElement} The next item.
   * @throws {Error} If the number isn't between 1 and the item count.
   */
  getNextItem(currentNumber) {
    if (
      typeof currentNumber !== "number" ||
      currentNumber < 1 ||
      currentNumber > this.#items.length
    ) {
      throw new Error(
        "AuroTabService | getNextItem: Index must be a valid number within the range of previous items.",
      );
    }

    let index = currentNumber; // Convert to 0-based index
    index = index >= this.#items.length ? 0 : index;

    return this.#items[index];
  }

  #getPreviousItems() {
    return [...this.#items];
  }
}
