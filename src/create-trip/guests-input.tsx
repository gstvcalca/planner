import { ArrowRight, UserRoundPlus } from "lucide-react"
import { Button } from "../components/button"


interface GuestsInputProps{
    openGuestsModal: () => void
    guestsToInvite: string[]
    createTrip: () => void
}

export function GuestsInput({
    guestsToInvite,
    createTrip,
    openGuestsModal    
}: GuestsInputProps){
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

        <button onClick={openGuestsModal} className="flex items-center gap-2 flex-1 hover:underline">
            <UserRoundPlus className="size-5 text-zinc-400"/>
            <span className="text-zinc-400 text-lg flex-1 text-left truncate">{guestsToInvite.length > 1 ? guestsToInvite.length.toString() + ' guest(s)' : "Who will be on the trip?"}</span>
        </button>

        <Button onClick={createTrip}>
            Confirm trip    
            <ArrowRight className="size-5"/>
        </Button>

    </div>
    )
}