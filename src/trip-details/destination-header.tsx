import { MapPin, Calendar, Settings2, ArrowLeftCircle } from "lucide-react";
import { Button } from "../components/button";
import { format } from "date-fns";
import { TripProps } from "../components/trip-props";
import { useNavigate } from "react-router";


interface DestinationHeaderProps{
    openChangeDestinationModal: () => void
    tripInfo: TripProps | undefined
}


export function DestinationHeader({
    openChangeDestinationModal,
    tripInfo
}: DestinationHeaderProps){

    const navigate = useNavigate();

    function handleNavigate(){
        navigate('/feed/123');
    }

    const displayDate = tripInfo && tripInfo.starts_at && tripInfo.ends_at
        ? format(tripInfo.starts_at, "'From 'do' of 'LLLL").concat(' to ').concat(format(tripInfo.ends_at, "do' of 'LLLL, yyyy"))
        : null

    return(
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
            <img className="-translate-x-52 absolute -translate-y-4" src="/logo.svg" alt="plann.er"/>
            <button onClick={handleNavigate} className="hover:text-zinc-400 absolute">
                <ArrowLeftCircle className="-translate-x-32 absolute translate-y-2 size-8"/>
            </button>
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