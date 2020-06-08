import React, { ReactNode } from "react";
import { FlexComponent, FlexProps } from "./flex.styles";

interface ExtendedFlexProps extends FlexProps {
  children?: ReactNode;
  onClick?: Function;
}

const Flex = (props: ExtendedFlexProps) => <FlexComponent {...props} >{props.children}</FlexComponent>;

export default Flex;
