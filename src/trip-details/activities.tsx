import { CheckCircle2 } from "lucide-react";

export function Activities(){
    return (
        <div className="space-y-8 "> 
            <div className="space-y-2.5"> {/* Day card div */}

                <div className="flex gap-2 items-baseline"> {/* card title div */}
                    <span className="text-xl text-zinc-300 font-semibold">15th of December</span>
                    <span className="text-xs text-zinc-500">Sunday</span>
                </div>

                <p className="text-zinc-500">No activities booked for this day.</p>

            </div>

            <div className="space-y-2.5"> {/* Day card div */}

                <div className="flex gap-2 items-baseline"> {/* card title div */}
                    <span className="text-xl text-zinc-300 font-semibold">16th of December</span>
                    <span className="text-xs text-zinc-500">Monday</span>
                </div>

                <div className=""> {/* activity card */}
                    <div className="flex justify-between bg-zinc-900 p-1 rounded-lg shadow-shape px-4 py-2.5 items-center">
                        <div className="flex gap-3 text-zinc-100">
                            <CheckCircle2 className="text-lime-300 size-6"/>
                            <span>Kart race</span>
                        </div>
                        <span className="text-zinc-400 al-auto">14:00h</span>
                    </div>
                </div>

                <div className=""> {/* activity card */}
                    <div className="flex justify-between bg-zinc-900 p-1 rounded-lg shadow-shape px-4 py-2.5 items-center">
                        <div className="flex gap-3 text-zinc-100">
                            <CheckCircle2 className="text-lime-300 size-6"/>
                            <span>Kart race</span>
                        </div>
                        <span className="text-zinc-400 al-auto">14:00h</span>
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}