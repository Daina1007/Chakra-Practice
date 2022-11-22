import { Box } from "@chakra-ui/react";


export default function Bottom(){
    return <Box w={"60%"} position={"static"}>
        <Box h={"60px"} w={"500px"} backgroundColor={"whiteAlpha.400"} position={"absolute"} left={"-10"}></Box>
        <Box h={"60px"} color={"white"} fontSize={"14px"} fontWeight={"500"} lineHeight={"60px"} position={"relative"} zIndex={"2"}>Storage & Organization</Box>
    </Box>
}