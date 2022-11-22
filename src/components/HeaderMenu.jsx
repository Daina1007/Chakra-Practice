import { Button } from "@chakra-ui/react";
import { Menu, MenuButton } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";


export default function HeaderMenu({text}){
    return <Menu Color={"white"}>
    <MenuButton color={"white"} backgroundColor={"transparent"} as={Button} rightIcon={<TriangleDownIcon  w={"3"}/>}>
    {text}
    </MenuButton>
</Menu>
}