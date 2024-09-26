import { Link2, PlusIcon } from "lucide-react";
import { Button } from "../components/button";

export function RelevantLinks(){
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Relevant links</h2>
            <div className="flex items-center justify-between gap-4"> {/* links list */}
                <div className="flex-1">
                    <span className="block font-medium text-zinc-100">AirBnB booking</span>
                    <a href="#" className="truncate block text-zinc-400 text-xs hover:text-zinc-200">
                        https://www.figma.com/design/R4rqTCthxleE2asdfasdfasdfasdfds
                    </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
            </div>
            <div className="flex items-center justify-between gap-4"> {/* links list */}
                <div className="flex-1">
                    <span className="block font-medium text-zinc-100">AirBnB booking</span>
                    <a href="#" className="truncate block text-zinc-400 text-xs hover:text-zinc-200">
                        https://www.figma.com/design/R4rqTCthxleE2asdfasdfasdfasdfds
                    </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
            </div>
            <Button cstyle="secondary" size='full'>
                <PlusIcon className="size-5"/>
                Add link
            </Button>
        </div>
    )
}