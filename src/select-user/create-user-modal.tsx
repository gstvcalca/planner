import { X, User, Mail, Plus, Image } from "lucide-react";
import { Button } from "../components/button";
import { FormEvent } from "react";
import { api } from "../lib/axios";

interface CreateUserModalProps{
    closeCreateUserModal: () => void,
}

export function CreateUserModal({closeCreateUserModal}: CreateUserModalProps){
    
    async function createUser(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const name = data.get("name")?.toString() || '';
        const email = data.get("email")?.toString() || '';
        const url = data.get("url")?.toString() || '';

        console.log(name, email, url);
        const response = await api.post('/users', {
                name,
                email,
                url
            });

        console.log(response);
        
        window.document.location.reload();
    }

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center"> 
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">Create new user</h2>
                        <button type="button" onClick={closeCreateUserModal}>
                            <X className="size-5 text-zinc-400"/>
                        </button>
                    </div>
                </div>              
                <form onSubmit={createUser} className="space-y-3">
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14">
                        <User className="size-5 text-zinc-400"/>
                        <input
                            name="name" 
                            placeholder='Name' 
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                    </div>
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14">
                        <Mail className="size-5 text-zinc-400"/>
                        <input
                            type="email" 
                            name="email" 
                            placeholder='Email' 
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                    </div>
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14">
                        <Image className="size-5 text-zinc-400"/>
                        <input
                            name="url" 
                            placeholder='Image URL' 
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                    </div> 
                    <Button type="submit" size='full'>
                        Create new user    
                        <Plus className="size-5"/>
                    </Button>
                
                </form>
            </div>
        </div>
    )
}