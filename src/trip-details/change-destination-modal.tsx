import { Calendar, MapPin, Save, X } from "lucide-react"
import { DateRange, DayPicker } from "react-day-picker"
import { Button } from "../components/button"
import { useState } from "react"
import { format } from "date-fns"
import { InputContainer } from "../components/input-container"

interface ChangeDestinationModalProps {
    closeChangeDestinationModal: () => void
}
export function ChangeDestinationModal({
    closeChangeDestinationModal
}: ChangeDestinationModalProps){
    const [isDatePickerOpen, setIsDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState<DateRange | undefined>()

    function openDatePicker(){
        setIsDatePicker(true);
    }

    function closeDatePicker(){
        setIsDatePicker(false);
    }

    const displayDate = selectedDate && selectedDate.from && selectedDate.to
        ? format(selectedDate.from, "'From 'do' of 'LLLL").concat(' to ').concat(format(selectedDate.to, "do' of 'LLLL, yyyy"))
        : null

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-2 w-1/3">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">Change destination and date</h2>
                    <button type="button" onClick={closeChangeDestinationModal}>
                        <X className="size-5 text-zinc-400"/>
                    </button>
                </div>
                <div className="items-center gap-2 flex-1">
                    <InputContainer>
                        <MapPin className="size-5 text-zinc-400"/>
                        <input
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="Where to?" 
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-grow"/>
                    </InputContainer>
                </div>
                <InputContainer>
                    <button
                        onClick={openDatePicker}
                        className="flex items-center gap-2 w-1/4 text-lg text-zinc-400 flex-1">
                        <Calendar className="size-5 "/>
                        <span>
                            {displayDate || 'When?'}
                        </span>
                    </button>
                </InputContainer>
                <Button size="full">
                    <Save className="size-5"/>
                    Save changes
                </Button>

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
                            <DayPicker mode="range" selected={selectedDate} onSelect={setSelectedDate}/>
                            <div>
                                <Button onClick={closeDatePicker} size="full">Done</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}