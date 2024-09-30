import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../lib/axios";
import { format } from 'date-fns';

interface ScheduleProps{
    date: string
    activities: {
        id: string
        title: string
        occurs_at: string
    }[]
}

export function Activities(){
    const {id} = useParams()
    const [schedule, setSchedule] = useState<ScheduleProps[]>([])

    useEffect(() => {
        api.get(`/trips/${id}/activities`).then((response) => {
            setSchedule(response.data.activities);
        });
    }, [id])
    

    return (
        <div className="space-y-8 "> 
        {schedule.map((aDaySchedule) => {
            return(
                <div key={aDaySchedule.date} className="space-y-2.5"> {/* Day card div */}

                <div className="flex gap-2 items-baseline"> {/* card title div */}
                    <span className="text-xl text-zinc-300 font-semibold">{format(aDaySchedule.date, "do' of 'MMMM")}</span>
                    <span className="text-xs text-zinc-500">{format(aDaySchedule.date, 'EEEE')}</span>
                </div>
                {aDaySchedule.activities.length === 0 
                ? <p className="text-zinc-500">No activities booked for this day.</p>
                : (aDaySchedule.activities.map(activity => {
                    return (
                        <div key={activity.id} className=""> {/* activity card */}
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