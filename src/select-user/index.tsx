import { ArrowRightIcon, Plus, X } from "lucide-react";
import { Button } from "../components/button";
import { CreateUserModal } from "./create-user-modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserSchema } from "../components/user-schema";
import { api } from "../lib/axios";

export function SelectUserPage(){
    const navigate = useNavigate();
    const [isCreateUserModalOpen, setIsCreateUserModal] = useState(false);

    function openCreateUserModal(){
        setIsCreateUserModal(true);
    }

    function closeCreateUserModal(){
        setIsCreateUserModal(false);
    }

    function handleNavigate(){
        navigate('/feed/123');
    }

    const [users, setUsers] = useState<UserSchema[] | undefined>([]);

    useEffect(() => {
        api.get('/users').then((response) => setUsers(response.data.users));
        console.log(users);
    }, [window]);

    async function handleDelete(id:string){
        const user = await api.delete('/users/' + id);

        window.document.location.reload();
        console.log(user);
    }

    return(
        <div className="justify-center h-screen items-center bg-pattern bg-center bg-no-repeat">
            <div className=" flex justify-end m-3">
                <Button onClick={openCreateUserModal} className="justify-center">
                    <Plus className="size-5"/>
                    Create user
                </Button>
            </div>
            <div className="flex justify-center my-10">
            <div className="grid grid-cols-3 gap-4">
            {users && users.map((user) => {
                    return (
                        <div
                            key={user._id}

                            className="w-52 rounded-xl shadow-shape border-2 border-zinc-400 space-y-2 text-center hover:scale-105 p-3 relative">
                                <button onClick={handleNavigate}><img 
                                    className=" border-zinc-800 border-2 rounded-full size-44"
                                    src={user.url}>
                                </img></button>
                                <p className="p-3">{user.name}</p>
                                <div className="justify-between flex px-6">
                                <button onClick={() => handleDelete(user._id)}><X className="text-red-600"/></button>
                                    <button onClick={handleNavigate}><ArrowRightIcon className="text-green-600"/></button>
                                </div>
                        </div>
                    )
                })}
                </div>
            </div>
            {isCreateUserModalOpen && (
                <CreateUserModal 
                closeCreateUserModal={closeCreateUserModal}/>
            )}
        </div>
    )
}