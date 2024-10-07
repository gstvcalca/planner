import { Search, Home, ContactRound, SquarePlay, Menu, MessageCircle, Bell } from "lucide-react";

export function TopHeaderMenu(){
    return(
        <div className="fixed inset-0 w-full h-14 shadow-shape justify-around flex p-2 text-zinc-300 bg-zinc-950">
                <div className="flex w-1/3 justify-start items-center space-x-5">
                    {/* left */}
                    
                    <div className="flex items-center bg-zinc-900 p-2 rounded-xl gap-2">
                        <Search className="size-4"/>
                        <input className="bg-transparent outline-none" placeholder="Search on plann.er"/>
                    </div>
                </div>

                <div className="flex w-1/3 justify-around items-center">
                    {/* middle */}
                    <button className="hover:text-zinc-50 hover:bg-zinc-700 p-2 rounded-xl">
                        <Home className="size-8"/>
                    </button>
                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <ContactRound className="size-8"/>
                    </button>
                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <SquarePlay className="size-8"/>
                    </button>                    
                </div>

                <div className="flex w-1/3 justify-end items-center space-x-5">
                    {/* right */}
                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <Menu className="size-8"/>
                    </button>

                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <MessageCircle className="size-8" />
                    </button>

                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <Bell className="size-8"/>
                    </button>
                </div>
            </div>
    )
}