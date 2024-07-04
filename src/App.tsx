import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Button>ボタン</Button>
      </ChakraProvider>
    </div>
  );
}
