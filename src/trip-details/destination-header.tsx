import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../components/button";
import { format } from "date-fns";
import { TripProps } from "../components/trip-props";


interface DestinationHeaderProps{
    openChangeDestinationModal: () => void
    tripInfo: TripProps | undefined
}


export function DestinationHeader({
    openChangeDestinationModal,
    tripInfo
}: DestinationHeaderProps){

    const displayDate = tripInfo && tripInfo.starts_at && tripInfo.ends_at
        ? format(tripInfo.starts_at, "'From 'do' of 'LLLL").concat(' to ').concat(format(tripInfo.ends_at, "do' of 'LLLL, yyyy"))
        : null

    return(
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">

        <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400"/> 
            <span className="text-zinc-100">{tripInfo?.destination}</span>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400"/> 
                <span className="text-zinc-100">{displayDate}</span>
            </div>
            
            <div className="w-px h-6 bg-zinc-800"/>
            <Button onClick={openChangeDestinationModal} cstyle="secondary">
                Change destination/date
                <Settings2 className="size-5"/>
            </Button>
        </div>
    </div>
    )
}