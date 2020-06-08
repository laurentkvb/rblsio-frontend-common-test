import React, { ReactNode } from "react";
import Flex from "../Flex/Flex";
import { SystemProps } from "../models/styledSystem.js";

interface Props extends SystemProps {
  children: ReactNode;
  fullWidth?: boolean;
  backgroundColor?: string | string[];
  debugging?: boolean;
  outerColumns: string | string[];
}

/**
 * 12 column grid wrapper
 * @param children React Nodes content that have to be in the content
 * @param fullWidth if set to true, then the component will be shown without
 * paddingX variables enables.
 * @param debugging is true, then columns gets colored for debugging purposes
 * @param backgroundColor
 * @param props are optional parameters to change properties of the parents
 * CSS properties.
 */
const KolommenWrapper = ({ children,
  fullWidth = false,
  debugging = false,
  outerColumns = ["0px",
      "calc(100% - 20px)", // '320px' , outer columns (10px each, hench 20px)
      "calc(100% - 32px)", // '400px' , outer columns (16px each, hench 32px)
      "calc(100% - 48px)", // '480px' , outer columns (24px each, hench 48px)
      "calc(100% - 96px)", // '960px' , outer columns (48px each, hench 96px)
      "calc(100% - 96px)", // '1280px', outer columns (48px each, hench 96px)
      "1280px" // starting at '1280px' and higher
  ],
  backgroundColor = "white",
  ...props } : Props) => (
    <Flex
      justifyContent="center"
      width="100%"
      height="100%"
      {...props}
    >

      <Flex
        width="100%"
        flexDirection="row"
        justifyContent="center"
        backgroundColor={!debugging ? (backgroundColor || "white") : "green"}
      >

        <Flex
          width={fullWidth ? "100%"
            : outerColumns}
          height="100%"
          backgroundColor="white"
          flexDirection="column"
        >
          {children}
        </Flex>


      </Flex>
    </Flex>
);

export default KolommenWrapper;
