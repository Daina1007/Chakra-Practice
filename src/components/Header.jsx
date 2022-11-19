import { Box } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons'
import { Menu, MenuButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";


export default function Header(){
    return  <Box w={"100%"} backgroundColor={"orange.200"} marginTop={"15"} display={"flex"} justifyContent={"space-evenly"}>
        <Box as="b" backgroundColor={"green.300"} color={"white"} lineHeight={"40px"}>DAINA INSIDE</Box>
        <Box  backgroundColor={"tomato"} display={"flex"} gap={"5"}>
            <Menu>
                <MenuButton color={"white"} backgroundColor={"transparent"} as={Button} rightIcon={<TriangleDownIcon w={"3"}/>}>
                Promotion
                </MenuButton>
            </Menu>
            <Menu Color={"white"}>
                <MenuButton color={"white"} backgroundColor={"transparent"} as={Button} rightIcon={<TriangleDownIcon  w={"3"}/>}>
                Interior
                </MenuButton>
            </Menu>
            <Menu>
                <MenuButton color={"white"} backgroundColor={"transparent"} as={Button} rightIcon={<TriangleDownIcon w={"3"}/>}>
                Store
                </MenuButton>
            </Menu>
            <Menu>
                <MenuButton color={"white"} backgroundColor={"transparent"} as={Button} rightIcon={<TriangleDownIcon w={"3"}/>}>
                Business
                </MenuButton>
            </Menu>
            <Menu>
                <MenuButton color={"white"} backgroundColor={"transparent"} as={Button} rightIcon={<TriangleDownIcon w={"3"}/>}>
                Customer
                </MenuButton>
            </Menu>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
            <Search2Icon h={"6"} w={"6"} color={"white"}/>
        </Box>
    </Box>
}
