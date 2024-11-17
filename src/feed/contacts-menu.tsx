import { useEffect, useState } from "react"
import { UserSchema } from "../components/user-schema"
import { api } from "../lib/axios"

export function ContactsMenu(){
    const [users, setUsers] = useState<UserSchema[]>([])
    
    useEffect(() => {
        api.get('/users').then((reply) => {
            setUsers(reply.data.users);
        })
    }, []);

    return(
        
        <div className="text-end p-3 flex-shrink-0 w-1/6 shadow-shape rounded-xl border-2 border-zinc-700 h-fit">
            {users.map((user) => {
            return (
            <button className="flex items-center gap-4 p-2 w-full hover:text-zinc-50  hover:bg-zinc-900 rounded-xl">
                <img src={user.img_url} 
                className="size-10 rounded-full border-zinc-700 border-2"/>
                <span>{user.name}</span>
            </button>
            )
        })}
        </div>
    )
}