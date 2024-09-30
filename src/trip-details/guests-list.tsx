import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../lib/axios";

interface GuestsProps{
    id: string
    name: string
    email: string
    is_confirmed: boolean
}

interface GuestsListProps{
    openAddGuestModal: () => void
}
export function GuestsList({openAddGuestModal}: GuestsListProps){

    const {id} = useParams();
    const [guests, setGuests] = useState<GuestsProps[]>([]);

    useEffect(() => {
        api.get(`/trips/${id}/participants`).then((response) => {setGuests(response.data.participants)});
    }, [id]);

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Guests</h2>
            {guests.map((guest, index) => {
                return (
                    <div key={guest.email} className="flex items-center justify-between gap-4"> {/* links list */}
                        <div className="flex-1">
                            <span className="block font-medium text-zinc-100">{guest.name || "Guest " + index}</span>
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