import React, { ReactNode } from "react";
import { SystemProps } from "../models/styledSystem";
import { BoxComponent } from "./box.styles";

export interface BoxProps extends SystemProps {
  children?: ReactNode;
}

const Box1 = (props: BoxProps) => <BoxComponent {...props}>{props.children}</BoxComponent>;

export default Box1;
