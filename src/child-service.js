/**
 * @class ChildItemService
 * @description Service class that manages child items and exposes methods to add, remove, and subscribe to changes in the items array.
 * This service allows components to:
 * - Add and remove themselves/items from the service
 * - Subscribe to notifications when items change
 * - Track previous state of items for comparison
 * The service implements a simple pub/sub pattern to notify components when the items collection changes.
 */
export class ChildItemService {
  /**
   * @property {Array} items - An array to hold the auro-scrolleritems in the scroller.
   * @private
   */
  #items = [];

  /**
   * @property {Array} previousItems - An array to hold the previous items in the scroller.
   * @private
   */
  #previousItems = [];

  /**
   * @property {Array} subscribers - An array to hold the subscribers for item changes.
   * @private
   */
  #subscribers = [];

  /**
   * @property {Object[]} current - A getter to access the current items in the scroller.
   */
  get current() {
    return this.#items;
  }

  /**
   * @param {Function} callback - A callback function that will be called when the items change.
   * @description This method allows you to subscribe to changes in the items array.
   * @returns {Function} - A function to unsubscribe from the changes.
   * @throws {Error} - Throws an error if the callback is not a function.
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
   * @param {Function} callback - A callback function that will be called when the items change.
   * @description This method allows you to unsubscribe from changes in the items array.
   * @returns {Boolean} - Whether or not you were successfully unsubscribed.
   * @throws {Error} - Throws an error if the callback is not a function.
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
   * @param {Object} item - An item to add to the scroller.
   * @description This method adds an item to the scroller and notifies subscribers.
   * @returns {void}
   * @throws {Error} - Throws an error if the item is not an object.
   */
  add(item) {
    if (typeof item !== "object" || item === null)
      throw new Error("AuroTabService | addItem: Item must be an object");

    this.#previousItems = this.#getPreviousItems();
    this.#items.push(item);
    this.#notifySubscribers();
  }

  addMany(items) {
    if (!Array.isArray(items) || items.length === 0)
      throw new Error("AuroTabService | addMany: Items must be an array");

    this.#previousItems = this.#getPreviousItems();
    this.#items.push(...items);
    this.#notifySubscribers();
  }

  /**
   * @param {Object} item - An item to remove from the scroller.
   * @description This method removes an item from the scroller and notifies subscribers.
   * @returns {void}
   * @throws {Error} - Throws an error if the item is not an object or not found in the items array.
   */
  remove(item) {
    if (typeof item !== "object" || item === null)
      throw new Error("AuroTabService | removeItem: Item must be an object");

    this.#previousItems = this.#getPreviousItems();
    this.#items = this.#items.filter((i) => i !== item);
    this.#notifySubscribers();
  }

  clear() {
    this.#previousItems = this.#getPreviousItems();
    this.#items = [];
    this.#notifySubscribers();
  }

  /**
   * Gets an item by its index in the items array.
   * @param {Number} index
   * @returns {HTMLElement}
   */
  getItemByIndex(index) {
    return this.#items[index];
  }

  /**
   * Gets an item by its number (1-based index).
   * @param {Number} number
   * @returns {HTMLElement}
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
