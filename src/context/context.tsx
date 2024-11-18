import { createContext, ReactNode, useState } from "react";
import { UserSchema } from "../components/user-schema";

export const MyContext = createContext({
  'logged_user': {} ,
  setUser: (user: UserSchema) => {}
});

interface MyContextProviderProps{
  children: ReactNode
}

export function MyContextProvider({children}: MyContextProviderProps){
  const [logged_user, setUser] = useState({});

  return (
    <MyContext.Provider value={{
      logged_user, setUser
    }}>{children}</MyContext.Provider>
  )
}

