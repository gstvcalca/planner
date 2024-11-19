import { useContext, useEffect, useState } from "react";
import { UserSchema } from "../components/user-schema";
import { api } from "../components/axios";
import { MyContext } from './../components/context';

export function ContactsMenu() {
  const {logged_user} = useContext(MyContext);
  const [users, setUsers] = useState<UserSchema[]>([]);

  function filterUsers(user: UserSchema[]){
    return user.filter(item => item?.img_url?.length > 0 && item._id !== logged_user._id);
  }

  useEffect(() => {
    api.get("/users").then((reply) => {
      setUsers(filterUsers(reply.data.users));
    });
  }, []);

  return (
    <div className="text-end p-3 flex-shrink-0 w-1/6 shadow-shape rounded-xl border-2 border-zinc-700 h-fit">
      {users.map((user) => {
        return (
          <button
            key={user._id}
            className="flex items-center gap-4 p-2 w-full hover:text-zinc-50  hover:bg-zinc-900 rounded-xl"
          >
            <img
              src={user.img_url}
              className="size-10 rounded-full border-zinc-700 border-2"
            />
            <span>{user.name}</span>
          </button>
        );
      })}
    </div>
  );
}
