import { Calendar, Info, MapPin, Save, X } from "lucide-react";
import { DateRange, DayPicker } from "react-day-picker";
import { Button } from "../components/button";
import { FormEvent, useState } from "react";
import { format } from "date-fns";
import { InputContainer } from "../components/input-container";
import { api } from "../components/axios";
import { TripProps } from "../components/trip-props";

interface ChangeDestinationModalProps {
  closeChangeDestinationModal: () => void;
  tripInfo: TripProps | undefined;
  setTripInfo: (trip: TripProps) => void;
}
export function ChangeDestinationModal({
  closeChangeDestinationModal,
  tripInfo,
  setTripInfo
}: ChangeDestinationModalProps) {
  const [isDatePickerOpen, setIsDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>({
    from: new Date(tripInfo?.starts_at || ""),
    to: new Date(tripInfo?.ends_at || ""),
  });
  const [category, setCategory] = useState(tripInfo?.category);

  function openDatePicker() {
    setIsDatePicker(true);
  }

  function closeDatePicker() {
    setIsDatePicker(false);
  }

  const displayDate =
    selectedDate && selectedDate.from && selectedDate.to
      ? format(selectedDate.from, "'From 'do' of 'LLLL")
          .concat(" to ")
          .concat(format(selectedDate.to, "do' of 'LLLL, yyyy"))
      : null;

  async function updateTripDateAndDestination(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const destination = data.get("destination") || tripInfo?.destination;
    const starts_at = selectedDate?.from;
    const ends_at = selectedDate?.to;
    console.log('hi');
    const response = await api.put(`/trips/${tripInfo?._id}`, {
      ...tripInfo,
      destination,
      starts_at,
      ends_at,
      category,
    });

    setTripInfo(response.data);
    closeChangeDestinationModal();
    console.log('bye');
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-7 min-w-1/3">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Change destination and date</h2>
          <button type="button" onClick={closeChangeDestinationModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <form onSubmit={updateTripDateAndDestination} className="space-y-2">
          <div className="items-center gap-2 flex-1">
            <InputContainer>
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder={tripInfo?.destination}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-grow"
              />
            </InputContainer>
          </div>
          <InputContainer>
            <button
              type="button"
              onClick={openDatePicker}
              className="flex items-center gap-2 w-1/4 text-lg text-zinc-400 flex-1"
            >
              <Calendar className="size-5 " />
              <span>{displayDate || "When?"}</span>
            </button>
          </InputContainer>
          <div className="items-center gap-2 flex-1">
            <InputContainer>
              <Info className="size-5 text-zinc-400" />
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-grow "
              >
                <option value="daytrip" className="bg-zinc-900 text-zinc-400">
                  A day trips
                </option>
                <option
                  value="weekendtrip"
                  className="bg-zinc-900 text-zinc-400"
                >
                  Weekend trips
                </option>
                <option
                  value="cruisetrip"
                  className="bg-zinc-900 text-zinc-400"
                >
                  Cruise trips
                </option>
              </select>
            </InputContainer>
          </div>
          <div className="h-px" />
          <Button size="full">
            <Save className="size-5" />
            Save changes
          </Button>
        </form>

        {isDatePickerOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">Select date</h2>
                  <button type="button" onClick={closeDatePicker}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
              </div>
              <DayPicker
                mode="range"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
              <div>
                <Button onClick={closeDatePicker} size="full">
                  Done
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
