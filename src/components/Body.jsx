import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Menu, MenuButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import BodyMenu from "./BodyMenu";


export default function Body(){
    return <Box w={"60%"} h={"120px"} display={"flex"} flexWrap={"wrap"} alignContent={"space-between"}>
        <Text fontWeight={"500"} color={"white"}>STORAGE</Text>
        <Box w={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Menu>
                <MenuButton backgroundColor={"transparent"} color={"white"} fontSize={"4xl"} paddingLeft={"0"} as={Button} rightIcon={<ChevronDownIcon w={"7"}/>}>
                INTERIOR DESIGN
                </MenuButton>
            </Menu>
            <Box w={"28%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <BodyMenu text="Family" />
                <BodyMenu text="Service" />
                <BodyMenu text="Profile" />
            </Box>
        </Box>
        <Text color={"white"} w={"150px"} lineHeight={"13px"} fontSize={"2xs"}>Modular cubes that you can stack
            Combine in countless ways
        </Text>
    </Box>
}