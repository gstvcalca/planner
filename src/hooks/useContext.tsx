import { useContext } from "react";
import { MyContext } from "../context/context";

export function useMyContext(){
  return useContext(MyContext);
}