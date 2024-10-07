import { Plus } from "lucide-react";
import { Button } from "../components/button";
import { CreateUserModal } from "./create-user-modal";
import { useState } from "react";
import { useNavigate } from "react-router";

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
                <button
                    onClick={handleNavigate}
                    className="w-52 rounded-xl shadow-shape border-2 border-zinc-400 space-y-2 text-center hover:scale-105 p-3">
                        <img 
                            className=" border-zinc-800 border-2 rounded-full"
                            src="https://cdn.esahubble.org/archives/images/screen/jwst_in_space-cc.jpg">
                        </img>
                        <p className="p-3">James Webb</p>
                </button>
                <button 
                    className="w-52 rounded-xl shadow-shape border-2 border-zinc-400 space-y-2 text-center hover:scale-105 p-3">
                        <img 
                            className=" border-zinc-800 border-2 rounded-full"
                            src="https://w.wallhaven.cc/full/wq/wallhaven-wq2wvx.png">
                        </img>
                        <p className="p-3">James Webb</p>
                </button>
                <button 
                    className="w-52 rounded-xl shadow-shape border-2 border-zinc-400 space-y-2 text-center hover:scale-105 p-3">
                        <img 
                            className=" border-zinc-800 border-2 rounded-full"
                            src="https://w.wallhaven.cc/full/9d/wallhaven-9d6zlx.png">
                        </img>
                        <p className="p-3">James Webb</p>
                </button>
                <button 
                    className="w-52 rounded-xl shadow-shape border-2 border-zinc-400 space-y-2 text-center hover:scale-105 p-3">
                        <img 
                            className=" border-zinc-800 border-2 rounded-full"
                            src="https://w.wallhaven.cc/full/28/wallhaven-28rkqy.png">
                        </img>
                        <p className="p-3">James Webb</p>
                </button>
                </div>
            </div>
            {isCreateUserModalOpen && (
                <CreateUserModal closeCreateUserModal={closeCreateUserModal}/>
            )}
        </div>
    )
}