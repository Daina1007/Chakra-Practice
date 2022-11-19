import { Box } from "@chakra-ui/react";


export default function Bottom(){
    return <Box w={"70%"} position={"static"}>
        <Box backgroundColor={"black"} h={"60px"} w={"450px"} position={"absolute"} left={"-10"}></Box>
        <Box backgroundColor={"pink.100"} h={"60px"} lineHeight={"60px"} color={"white"} fontSize={"14px"} fontWeight={"500"} position={"relative"} zIndex={"2"}>Storage & Organization</Box>
    </Box>
}