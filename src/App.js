import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";

function App() {
  return (
    <Box
      backgroundImage="url('/images/background.jpg')"
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      flexWrap={"wrap"}
      alignContent={"space-between"}
      justifyContent={"center"}
      zIndex={"-99"}
    >
      <Header />
      <Body />
      <Bottom />
    </Box>
  );
}

export default App;
