import React, { ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"

interface AppProps {
  children: ReactNode  
}

function App({children}: AppProps) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default App;
