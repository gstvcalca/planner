import { User } from "lucide-react";

export function OptionMenu(){
    return(
        <div className="flex-shrink-0 w-1/6  text-start p-3 space-y-3 bg-zinc-950 h-fit shadow-shape rounded-xl border-2 border-zinc-700">
            <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full border-zinc-800">
                <User className="size-6 rounded-full "/>
                <span>A day trip</span>
            </button>
            <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                <User className="size-6 rounded-full "/>
                <span>Weekend trips</span>
            </button>
            <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                <User className="size-6 rounded-full "/>
                <span>Cruise trips</span>
            </button>
            <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                <User className="size-6 rounded-full "/>
                <span>Surprise me</span>
            </button>
            <img src="/logo.svg" aria-label="plann.er" className="w-28 m-auto"/>
        </div>
    )
}