import { TestWrapper } from "./TestWrapper/TestWrapper";
import Box1 from "./Box1/Box1";
import KolommenWrapper  from "./KolommenWrapper/KolommenWrapper";
import {BoxComponent}  from "./Box1/box.styles.js";

export const greet = (name = "sir") => console.log(`Hello, world! ${name}`)

export { TestWrapper,KolommenWrapper, Box1, BoxComponent }
