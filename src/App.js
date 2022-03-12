import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Componant/Navbar/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
