import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"
import { Button } from "../components/button"

interface DestinationDateStepProps{
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput   
}: DestinationDateStepProps){
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400"/>
                <input disabled={isGuestsInputOpen} type="text" name="" id="" placeholder="Where to?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-grow"/>
                </div>

                <div className="flex items-center gap-2 w-1/4">
                <Calendar className="size-5 text-zinc-400"/>
                <input disabled={isGuestsInputOpen} type="text" name="" id="" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>
                </div>
                <div className="w-px h-6 bg-zinc-800"></div>
                
                {isGuestsInputOpen ? (
                <Button cstyle="secondary" onClick={closeGuestsInput} >
                    Change destination/date
                    <Settings2 className="size-5"/>
                </Button>

                ) : (
                <Button onClick={openGuestsInput} >
                    Continue
                    <ArrowRight className="size-5"/>
                </Button>
                )}

            </div>
    )
}