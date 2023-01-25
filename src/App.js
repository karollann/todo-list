import { ChakraProvider } from "@chakra-ui/react";
import { FormApp } from "./FormApp";

function App() {
  return (
    <ChakraProvider>
      <FormApp />
    </ChakraProvider>
  );
}

export default App;
