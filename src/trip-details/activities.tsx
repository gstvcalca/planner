import { CheckCircle2 } from "lucide-react";
import { format } from 'date-fns';
import { TripProps } from "../components/trip-props";

interface ActivitiesProps{
    tripInfo: TripProps | undefined
}

export function Activities({tripInfo}: ActivitiesProps){
    return (
        <div className="space-y-8 "> 
        {tripInfo?.activities.map((aDaySchedule) => {
            return(
                <div key={tripInfo._id + aDaySchedule.activity_date} className="space-y-2.5"> {/* Day card div */}

                <div className="flex gap-2 items-baseline"> {/* card title div */}
                    <span className="text-xl text-zinc-300 font-semibold">{format(aDaySchedule.activity_date, "do' of 'MMMM")}</span>
                    <span className="text-xs text-zinc-500">{format(aDaySchedule.activity_date, 'EEEE')}</span>
                </div>
                {aDaySchedule.day_activities.length === 0 
                ? <p className="text-zinc-500">No activities booked for this day.</p>
                : (aDaySchedule.day_activities.map(activity => {
                    return (
                        <div key={tripInfo._id + activity.title} className=""> {/* activity card */}
                            <div className="flex justify-between bg-zinc-900 p-1 rounded-lg shadow-shape px-4 py-2.5 items-center">
                                <div className="flex gap-3 text-zinc-100">
                                    <CheckCircle2 className="text-lime-300 size-6"/>
                                    <span>{activity.title}</span>
                                </div>
                                <span className="text-zinc-400 al-auto">{format(activity.occurs_at, 'HH:mm')}</span>
                                {}
                            </div>
                        </div>
                    )
                })
                )}
            </div>
            )
        })}        
        </div>
    )
}