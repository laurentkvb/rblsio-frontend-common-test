import React from "react";
import KolommenWrapper from './KolommenWrapper';
import Box1 from "../Box/Box1";
import Flex from "../Flex/Flex";

export default {
    title: "ColumnsWrapper"
};

export const DefaultUsage = () =>

<KolommenWrapper debugging>
    <Flex flexDirection="row" flexWrap="wrap">
    <Box1 width="column12_5" backgroundColor="yellow">
        <h2 color="blue">Hello</h2>
    </Box1>
    <Box1 width="column12_7" backgroundColor="blue">
        <h2 style={{color: "white"}}>Another one</h2>
    </Box1>
    <Box1 width="column12_6" backgroundColor="red">
        <h2 color="white">Another one</h2>
    </Box1>
    <Box1 width="column12_6" backgroundColor="orange">
        <h2 color="white">Another one</h2>
    </Box1>
    </Flex>

</KolommenWrapper>;
