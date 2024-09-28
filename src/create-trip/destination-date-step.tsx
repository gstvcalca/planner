import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react"
import { Button } from "../components/button"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"
import { format } from 'date-fns'
import "react-day-picker/dist/style.css"

interface DestinationDateStepProps{
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
    setDestination: (destination: string) => void
    eventDateObj: DateRange | undefined
    setEventDateObj: (eventDateObj: DateRange | undefined) => void
}

export function DestinationDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput,
    setDestination,
    eventDateObj,
    setEventDateObj
}: DestinationDateStepProps){
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);


    function openDatePicker(){
        setIsDatePickerOpen(true);
    }

    function closeDatePicker(){
        setIsDatePickerOpen(false);
    }

    const displayDate = eventDateObj && eventDateObj.from && eventDateObj.to
        ? format(eventDateObj.from, 'd/LLL').concat(' to ').concat(format(eventDateObj.to, 'd/LLL/yy'))
        : null

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400"/>
                <input
                    onChange={(event) => {setDestination(event.target.value)}}
                    disabled={isGuestsInputOpen} 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Where to?" 
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-grow"/>
                </div>

                <button
                    onClick={openDatePicker}
                    disabled={isGuestsInputOpen} 
                    className="flex items-center gap-2 w-1/4 text-lg text-zinc-400 flex-1">
                    <Calendar className="size-5 "/>
                    <span>
                        {displayDate || 'When?'}
                    </span>
                </button>

                {isDatePickerOpen && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center"> 
                        <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold">Select date</h2>
                                    <button type="button" onClick={closeDatePicker}>
                                        <X className="size-5 text-zinc-400"/>
                                    </button>
                                </div>
                            </div>
                            <DayPicker mode="range" selected={eventDateObj} onSelect={setEventDateObj}/>
                            <div>
                                <Button onClick={closeDatePicker} size="full">Done</Button>
                            </div>
                        </div>
                    </div>
                )}

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