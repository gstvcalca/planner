import { CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { TripProps } from "../components/trip-props";

interface ActivitiesProps {
  tripInfo: TripProps | undefined;
}

export function Activities({ tripInfo }: ActivitiesProps) {
  const sortedActivities = tripInfo?.activities.map((activity) => {
    return {
      ...activity,
      day_activities: activity.day_activities.sort((a, b) => {
        const timeA = new Date(a.occurs_at).getTime();
        const timeB = new Date(b.occurs_at).getTime();
        return timeA - timeB; // Ascending order
      }),
    };
  });

  return (
    <div className="space-y-8 ">
      {sortedActivities?.map((aDaySchedule) => {
        const activitydate = new Date(aDaySchedule.activity_date);
        return (
          <div
            key={tripInfo?._id + aDaySchedule.activity_date}
            className="space-y-2.5"
          >
            {" "}
            {/* Day card div */}
            <div className="flex gap-2 items-baseline">
              {" "}
              {/* card title div */}
              <span className="text-xl text-zinc-300 font-semibold">
                {format(activitydate, "do' of 'MMMM")}
              </span>
              <span className="text-xs text-zinc-500">
                {format(activitydate, "EEEE")}
              </span>
            </div>
            {aDaySchedule.day_activities.length === 0 ? (
              <p className="text-zinc-500">
                No activities booked for this day.
              </p>
            ) : (
              aDaySchedule.day_activities.map((activity) => {
                return (
                  <div key={tripInfo?._id + activity.title} className="">
                    {" "}
                    {/* activity card */}
                    <div className="flex justify-between bg-zinc-900 p-1 rounded-lg shadow-shape px-4 py-2.5 items-center">
                      <div className="flex gap-3 text-zinc-100">
                        <CheckCircle2 className="text-lime-300 size-6" />
                        <span>{activity.title}</span>
                      </div>
                      <span className="text-zinc-400 al-auto">
                        {format(new Date(activity.occurs_at), "HH:mm")}
                      </span>
                      {}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        );
      })}
    </div>
  );
}
