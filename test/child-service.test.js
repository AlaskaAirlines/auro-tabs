import { ChildItemService } from "../src/child-service.js"; // adjust the path as needed

import { expect } from "@open-wc/testing";

describe("ChildItemService", () => {
  let service;
  let sampleItem1;
  let sampleItem2;

  beforeEach(() => {
    service = new ChildItemService();
    sampleItem1 = { id: 1 };
    sampleItem2 = { id: 2 };
  });

  it("should allow subscribing and unsubscribing", () => {
    const spy = () => {};
    const unsubscribe = service.subscribe(spy);
    expect(unsubscribe).to.be.a("function");
    expect(service.unsubscribe(spy)).to.be.true;
  });

  it("should throw an error if subscribing with a non-function", () => {
    expect(() => service.subscribe(123)).to.throw(
      "Callback must be a function",
    );
  });

  it("should throw an error if unsubscribing with a non-function", () => {
    expect(() => service.unsubscribe("not a function")).to.throw(
      "Callback must be a function",
    );
  });

  it("should add items and notify subscribers", () => {
    let called = false;
    service.subscribe((items, prev) => {
      called = true;
      expect(items).to.include(sampleItem1);
      expect(prev).to.be.an("array");
    });

    service.add(sampleItem1);
    expect(service.current).to.include(sampleItem1);
    expect(called).to.be.true;
  });

  it("should remove items and notify subscribers", () => {
    service.add(sampleItem1);

    let called = false;
    service.subscribe((items, prev) => {
      called = true;
      expect(items).to.not.include(sampleItem1);
      expect(prev).to.include(sampleItem1);
    });

    service.remove(sampleItem1);
    expect(service.current).to.not.include(sampleItem1);
    expect(called).to.be.true;
  });

  it("should throw when adding non-objects", () => {
    expect(() => service.add(null)).to.throw("Item must be an object");
    expect(() => service.add(123)).to.throw("Item must be an object");
  });

  it("should throw when removing non-objects", () => {
    expect(() => service.remove(undefined)).to.throw("Item must be an object");
  });

  it("should get item by index", () => {
    service.add(sampleItem1);
    expect(service.getItemByIndex(0)).to.equal(sampleItem1);
  });

  it("should get item by 1-based number", () => {
    service.add(sampleItem1);
    expect(service.getItemByNumber(1)).to.equal(sampleItem1);
  });

  it("should throw on invalid getItemByNumber call", () => {
    expect(() => service.getItemByNumber(0)).to.throw();
    expect(() => service.getItemByNumber(100)).to.throw();
  });

  it("should get previous item with wrap-around", () => {
    service.add(sampleItem1);
    service.add(sampleItem2);
    expect(service.getPreviousItem(1)).to.equal(sampleItem2);
    expect(service.getPreviousItem(2)).to.equal(sampleItem1);
  });

  it("should get next item with wrap-around", () => {
    service.add(sampleItem1);
    service.add(sampleItem2);
    expect(service.getNextItem(1)).to.equal(sampleItem2);
    expect(service.getNextItem(2)).to.equal(sampleItem1);
  });

  it("should throw on invalid getPreviousItem call", () => {
    expect(() => service.getPreviousItem(0)).to.throw(
      "Index must be a valid number",
    );
    expect(() => service.getPreviousItem(999)).to.throw(
      "Index must be a valid number",
    );
  });

  it("should throw on invalid getNextItem call", () => {
    expect(() => service.getNextItem(0)).to.throw(
      "Index must be a valid number",
    );
    expect(() => service.getNextItem(999)).to.throw(
      "Index must be a valid number",
    );
  });
});
