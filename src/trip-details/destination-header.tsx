import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../components/button";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { format } from "date-fns";

interface tripProps{
    id: string
    destination: string
    starts_at: string
    ends_at: string
    is_confirmed: boolean
}

interface DestinationHeaderProps{
    openChangeDestinationModal: () => void
}


export function DestinationHeader({openChangeDestinationModal}: DestinationHeaderProps){
    const { id } = useParams()
    const [trip, setTrip] = useState<tripProps | undefined>()
 

    useEffect(() => {
        console.log(id);
        api.get(`/trips/${id}`).then((response) => setTrip(response.data.trip))
    }, [id])

    const displayDate = trip && trip.starts_at && trip.ends_at
        ? format(trip.starts_at, "'From 'do' of 'LLLL").concat(' to ').concat(format(trip.ends_at, "do' of 'LLLL, yyyy"))
        : null

    return(
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">

        <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400"/> 
            <span className="text-zinc-100">{trip?.destination}</span>
        </div>

        <div onClick={openChangeDestinationModal} className="flex items-center gap-5">
            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400"/> 
                <span className="text-zinc-100">{displayDate}</span>
            </div>
            
            <div className="w-px h-6 bg-zinc-800"/>
            <Button cstyle="secondary">
                Change destination/date
                <Settings2 className="size-5"/>
            </Button>
        </div>
    </div>
    )
}