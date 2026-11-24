import { expect } from "@open-wc/testing";
import { TabIndexUtil } from "../src/tabindexUtil.js";

const makeTabs = (disabledFlags) =>
  disabledFlags.map((isDisabled) => ({
    hasAttribute: (name) => name === "disabled" && isDisabled,
  }));

describe("TabIndexUtil", () => {
  it("finds the next tab that isn't disabled", () => {
    const tabs = makeTabs([false, true, false]);
    expect(TabIndexUtil.findNextNotDisabledIndex(0, tabs)).to.equal(2);
  });

  it("wraps to the first tab when searching forward from the last tab", () => {
    const tabs = makeTabs([false, false, false]);
    expect(TabIndexUtil.findNextNotDisabledIndex(2, tabs)).to.equal(0);
  });

  it("finds the previous tab that isn't disabled", () => {
    const tabs = makeTabs([false, true, false]);
    expect(TabIndexUtil.getPreviousNotDisabledIndex(2, tabs)).to.equal(0);
  });

  it("wraps to the last tab when searching backward from the first tab", () => {
    const tabs = makeTabs([false, false, false]);
    expect(TabIndexUtil.getPreviousNotDisabledIndex(0, tabs)).to.equal(2);
  });

  it("returns the focused index instead of looping forever when every tab is disabled", () => {
    const tabs = makeTabs([true, true, true]);
    expect(TabIndexUtil.findNextNotDisabledIndex(1, tabs)).to.equal(1);
    expect(TabIndexUtil.getPreviousNotDisabledIndex(1, tabs)).to.equal(1);
  });

  it("stays on the focused tab when every other tab is disabled", () => {
    const tabs = makeTabs([true, false, true]);
    expect(TabIndexUtil.findNextNotDisabledIndex(1, tabs)).to.equal(1);
    expect(TabIndexUtil.getPreviousNotDisabledIndex(1, tabs)).to.equal(1);
  });
});
