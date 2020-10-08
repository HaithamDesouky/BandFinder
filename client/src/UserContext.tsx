import { createContext } from 'react';

interface UserContextInterface {
  name: string;
  author: string;
  url: string;
}

export default createContext(undefined!);
