import { useContext } from "react";
import { MyContext } from "./context";

export function useMyContext(){
  return useContext(MyContext);
}