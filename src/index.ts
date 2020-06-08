import { TestWrapper } from "./TestWrapper/TestWrapper";
import Box1 from "./Box/Box1";
import KolommenWrapper  from "./KolommenWrapper/KolommenWrapper";
import {BoxComponent}  from "./Box/box.styles.js";
import TestComponent from "./TestComponent/TestComponent";

// We will use a pattern called Barrel Exports to expose our components in the
// entry point (so this file index.ts) .
// We do this by importing, then exporting all our components.
// Components exported here will be bundled by Rollup. In this file add:

export { TestWrapper,KolommenWrapper, Box1, BoxComponent, TestComponent }
