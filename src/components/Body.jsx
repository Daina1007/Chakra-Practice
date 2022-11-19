import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Menu, MenuButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


export default function Body(){
    return <Box backgroundColor={"green.400"} w={"70%"} h={"120px"} display={"flex"} flexWrap={"wrap"} alignContent={"space-between"}>
        <Text fontWeight={"500"} color={"white"} w={"100%"}>STORAGE</Text>
        <Box w={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Menu>
                <MenuButton fontSize={"4xl"} paddingLeft={"0"} color={"white"} backgroundColor={"transparent"} as={Button} rightIcon={<ChevronDownIcon w={"7"}/>}>
                INTERIOR DESIGN
                </MenuButton>
            </Menu>
            <Box w={"25%"} backgroundColor={"pink.200"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <Button colorScheme='teal' variant='link' color={"white"}>
                    Family
                </Button>
                <Button colorScheme='teal' variant='link' color={"white"}>
                    Service
                </Button>
                <Button colorScheme='teal' variant='link' color={"white"}>
                    Profile
                </Button>
            </Box>
        </Box>
        <Text w={"150px"} lineHeight={"13px"} fontSize={"2xs"} color={"white"}>Modular cubes that you can stack
            Combine in countless ways
        </Text>
    </Box>
}