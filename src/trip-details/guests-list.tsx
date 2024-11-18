import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../components/button";
import { TripProps } from "../components/trip-props";


interface GuestsListProps{
    openAddGuestModal: () => void
    tripInfo: TripProps | undefined
}
export function GuestsList({openAddGuestModal, tripInfo}: GuestsListProps){
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Guests</h2>
            {tripInfo?.guests.map((guest, index) => {
                return (
                    <div key={guest.email + index} className="flex items-center justify-between gap-4"> {/* links list */}
                        <div className="flex-1">
                            <span className="block font-medium text-zinc-100">{guest.name || "Guest " + (index + 1)}</span>
                            <span className="truncate block text-zinc-400 text-sm">
                                {guest.email}
                            </span>
                        </div>
                        {guest.is_confirmed 
                        ? <CheckCircle2 className="text-green-400 size-5 shrink-0"/>
                        : <CircleDashed className="text-zinc-400 size-5 shrink-0"/>}
                    </div>
                )
            })}
            
            <Button onClick={openAddGuestModal} cstyle="secondary" size='full'>
                <UserCog className="size-5"/>
                Add guest
            </Button>
        </div>
    )
}