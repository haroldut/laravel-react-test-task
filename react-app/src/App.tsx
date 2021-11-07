import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";

interface AppProps {
    children: ReactNode;
}

function App({ children }: AppProps) {
    return <ChakraProvider>{children}</ChakraProvider>;
}

export default App;
