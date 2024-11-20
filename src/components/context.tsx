import { createContext, ReactNode, useState } from "react";
import { UserSchema } from "./user-schema";


export interface MyContextType{
  logged_user: UserSchema,
  setUser: (user: UserSchema) => void
}
export const MyContext = createContext<MyContextType>({
  logged_user:{
    _id: "",
    name: "",
    email: "",
    img_url: ""
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: () => {}
});

interface MyContextProviderProps {
  children: ReactNode;
}

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [logged_user, setUser] = useState<UserSchema>({
    _id: "",
    name: "",
    email: "",
    img_url: "",
  });

  return (
    <MyContext.Provider
      value={{
        logged_user,
        setUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
