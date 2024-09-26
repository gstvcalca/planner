import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../components/button";

export function GuestsList(){
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Guests</h2>
            <div className="flex items-center justify-between gap-4"> {/* links list */}
                <div className="flex-1">
                    <span className="block font-medium text-zinc-100">Jessica White</span>
                    <span className="truncate block text-zinc-400 text-sm">
                        jessica.white44@yahoo.com
                    </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
            </div>
            <div className="flex items-center justify-between gap-4"> {/* links list */}
                <div className="flex-1">
                    <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                    <span  className="truncate block text-zinc-400 text-sm">
                        lacy.stiedemann@gmail.com
                    </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
            </div>
            <Button cstyle="secondary" size='full'>
                <UserCog className="size-5"/>
                Add guest
            </Button>
        </div>
    )
}