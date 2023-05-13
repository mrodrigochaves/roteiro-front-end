import {
  Flex,
  Box,
  Center
} from '@chakra-ui/react';
import { Header } from "./components/Header";
import { Forms } from "./components/Forms";


function App() {
  return (
    <Box h="100vh">
      < Header />
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <Forms />
        </Center>

      </Flex>
    </Box>
  );
}

export default App;
