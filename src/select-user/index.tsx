import { ArrowRightIcon, Plus, X } from "lucide-react";
import { Button } from "../components/button";
import { CreateUserModal } from "./create-user-modal";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserSchema } from "../components/user-schema";
import { api } from "../lib/axios";
import { MyContext } from "../context/context";

export function SelectUserPage() {
  const navigate = useNavigate();
  const [isCreateUserModalOpen, setIsCreateUserModal] = useState(false);
  const { setUser } = useContext(MyContext);
  const [users, setUsers] = useState<UserSchema[] | undefined>([]);
  function openCreateUserModal() {
    setIsCreateUserModal(true);
  }

  function closeCreateUserModal() {
    setIsCreateUserModal(false);
  }

  function handleNavigate(user: UserSchema) {
    setUser(user);
    navigate("/feed/");
  }

  function filterUsers(user: UserSchema[]){
    return user.filter(item => item?.img_url?.length > 0)
  }

  useEffect(() => {
    api.get("/users").then((response) => setUsers(filterUsers(response.data.users)));
  }, []);

  async function handleDelete(id: string) {
    await api.delete("/users/" + id);
    const users = await api.get("/users");
    setUsers(filterUsers(users.data.users));
  }

  return (
    <div className="justify-center h-screen items-center bg-pattern bg-center bg-no-repeat">
      <div className=" flex justify-end m-3">
        <Button onClick={openCreateUserModal} className="justify-center">
          <Plus className="size-5" />
          Create user
        </Button>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-3 gap-4">
          {users &&
            users.map((user) => {
              return (
                <div
                  key={user._id}
                  className="w-52 rounded-xl shadow-shape border-2 border-zinc-400 space-y-2 text-center hover:scale-105 p-3 relative"
                >
                  <button onClick={() => handleNavigate(user)}>
                    <img
                      className=" border-zinc-800 border-2 rounded-full size-44"
                      src={user.img_url}
                    ></img>
                  </button>
                  <p className="p-3">{user.name}</p>
                  <div className="justify-between flex px-6">
                    <button onClick={() => handleDelete(user._id)}>
                      <X className="text-red-600" />
                    </button>
                    <button onClick={() => handleNavigate(user)}>
                      <ArrowRightIcon className="text-green-600" />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {isCreateUserModalOpen && (
        <CreateUserModal setUsers={setUsers} closeCreateUserModal={closeCreateUserModal} />
      )}
    </div>
  );
}
