import { Calendar, Plus, Tag, X } from "lucide-react";
import { Button } from "../components/button";
import { FormEvent } from "react";
import { api } from "../lib/axios";
import { TripProps } from "../components/trip-props";
import { format } from "date-fns";

interface createActivityModalProps {
  closeActivityModal: () => void;
  tripInfo: TripProps | undefined;
  setTripInfo: (trip: TripProps) => void;
}

export function CreateActivityModal({
  setTripInfo,
  closeActivityModal,
  tripInfo,
}: createActivityModalProps) {
  async function createAtivity(event: FormEvent<HTMLFormElement>) {
    console.log(tripInfo);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("activity_name")?.toString();
    const occurs_at_date = new Date(
      data.get("activity_date")?.toString() || ""
    );
    const occurs_at = format(occurs_at_date, "yyyy-MM-dd HH:mm:ss");
    const newActivities = tripInfo?.activities.map((aDaySchedule) => {
      if (
        format(
          new Date(aDaySchedule.activity_date).toString(),
          "yyyy-MM-dd"
        ) === occurs_at.substring(0, 10)
      ) {
        return {
          ...aDaySchedule,
          day_activities: [
            ...aDaySchedule.day_activities,
            {
              title: title,
              occurs_at: occurs_at,
            },
          ],
        };
      } else {
        return aDaySchedule;
      }
    });

    const response = await api.put(`/trips/${tripInfo?._id}`, {
      ...tripInfo,
      activities: newActivities,
    });
    console.log(response.data);
    setTripInfo(response.data);

    closeActivityModal();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form
        onSubmit={createAtivity}
        className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-2"
      >
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Add new activity</h2>
            <button type="button" onClick={closeActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            All participants can see all activities planned
          </p>
        </div>

        <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="size-5 text-zinc-400" />
          <input
            name="activity_name"
            type="text"
            placeholder="Title"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>
        <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <input
            placeholder="Date and time"
            name="activity_date"
            type="datetime-local"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <Button type="submit" size="full">
          <Plus className="size-5" />
          Add Activiity
        </Button>
      </form>
    </div>
  );
}
