import React, { ReactNode } from "react";
import { SystemProps } from "../models/styledSystem";
import { BoxComponent } from "./box.styles";

export interface BoxProps extends SystemProps {
  children?: ReactNode;
}

const Box = (props: BoxProps) => <BoxComponent {...props} />;

export default Box;
