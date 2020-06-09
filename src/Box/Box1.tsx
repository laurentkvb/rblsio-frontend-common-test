import React, { ReactNode } from "react";
import { SystemProps } from "../models/styledSystem";
import { BoxComponent } from "./box.styles";
import {ThemeProvider} from "styled-components";

// @ts-ignore
import theme from "../styles/theme"; // TODO: REMOVE THIS AND ADD ESLINTJS FOR RECOGNIZING OF FILES

export interface BoxProps extends SystemProps {
  children?: ReactNode;
}

const Box1 = (props: BoxProps) =>
    <ThemeProvider theme={theme}>
      <BoxComponent {...props}>{props.children}</BoxComponent>
    </ThemeProvider>;

export default Box1;
