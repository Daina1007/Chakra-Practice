import { Box } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons'
import HeaderMenu from "./HeaderMenu";


export default function Header(){
    return  <Box w={"100%"} marginTop={"15px"} display={"flex"} justifyContent={"space-evenly"}>
        <Box as="b" color={"white"} lineHeight={"40px"}>DAINA INSIDE</Box>
        <Box display={"flex"} gap={"5"}>
            <HeaderMenu text="Promotion" />
            <HeaderMenu text="Interior" />
            <HeaderMenu text="Store" />
            <HeaderMenu text="Business" />
            <HeaderMenu text="Customer" />
        </Box>
        <Box display={"flex"} alignItems={"center"}>
            <Search2Icon w={"6"} color={"white"}/>
        </Box>
    </Box>
}
