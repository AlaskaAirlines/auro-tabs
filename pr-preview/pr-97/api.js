import "../src/registered";
import { addListener } from "./utils/onTabSelected";

// Register the listener
addListener();

export * from "./utils/onTabSelected";
export * from "./utils/selectTabExample";
