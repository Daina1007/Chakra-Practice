import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";

function App() {
  return (
    <Box
      backgroundImage="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('practice_image.png')"
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      background-repeat={"no-repeat"}
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
