import { createContext } from "react";
// createContext lets us create context api
export const CountContext = createContext({
  count: 0,
  setCount: () => {},
});
