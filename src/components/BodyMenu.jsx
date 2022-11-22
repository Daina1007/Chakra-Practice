import { Button } from "@chakra-ui/react";

export default function BodyMenu({text}){
    return <Button colorScheme='teal' variant='link' color={"white"}>
                {text}
            </Button>
}