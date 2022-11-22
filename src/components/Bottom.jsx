import { Box } from "@chakra-ui/react";


export default function Bottom(){
    return <Box w={"60%"} position={"static"}>
        <Box backgroundColor={"whiteAlpha.400"} h={"60px"} w={"500px"} position={"absolute"} left={"-10"}></Box>
        <Box h={"60px"} lineHeight={"60px"} color={"white"} fontSize={"14px"} fontWeight={"500"} position={"relative"} zIndex={"2"}>Storage & Organization</Box>
    </Box>
}