import { useNavigate } from "react-router";
import { TripProps } from "./../components/trip-props";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { api } from "../components/axios";
import { MyContext } from "../components/context";


interface FeedElementProps{
  currFilter: string
  currSearch: string
  userFilter: string
}

export function FeedElement({currFilter, currSearch, userFilter}: FeedElementProps) {
  const navigate = useNavigate();
  const [trips, setTrips] = useState<TripProps[]>([]);
  const {logged_user} = useContext(MyContext);

  useEffect(() => {
    api.get("/trips").then((reply) => {
      setTrips(reply.data.trips);
    });
  }, []);

  const displayTrips = trips.filter((trip) => {
    const matchesCategory = trip.category === currFilter || currFilter === "all";
    const matchesText = trip.destination.toLowerCase().includes(currSearch.toLowerCase());
    if(userFilter === "mine"){
      const matchesUser = trip.created_by._id === logged_user._id;
      return matchesCategory && matchesText && matchesUser;
    }
    return matchesCategory && matchesText && trip.created_by._id !== logged_user._id;
  })
  

  return (
    <div className="flex-1 space-y-2">
      {displayTrips.map((trip) => {
        const starts_at_string = format(trip.starts_at, "LLL, do");
        const ends_at_string = format(trip.ends_at, "LLL, do");
        function handleNavigate() {
          navigate("/trips/" + trip._id);
        }
        return (
          <div
            key={trip._id}
            className="flex-1 text-center p-3 space-y-3 shadow-shape rounded-xl border-2 border-zinc-700"
          >
            <div className="space-y-2 flex-1">
              <div className="flex justify-between items-center m-0 p-0">
                {/* profile picture, name and date */}
                <span>
                  Trip to {trip.destination} from {starts_at_string} to{" "}
                  {ends_at_string}
                </span>
                <button className="flex items-center  py-1 px-3 gap-2 hover:text-zinc-50  hover:bg-zinc-900 rounded-xl">
                  <img
                    src={trip.created_by.img_url}
                    className="size-12 rounded-full border-zinc-700 border-2"
                  />
                  <span>{trip.created_by.name}</span>
                </button>
              </div>
              <div className="h-px bg-zinc-900" />
              <div className="flex-1">
                {/* Destination from x to y, number of guests, picture */}
                <button onClick={handleNavigate}>
                  <img src={trip.img_url} className="rounded-xl" />
                </button>
                <p className="text-justify p-2 mt-2">{trip.description}</p>
                <div className="justify-start text-start mt-2">
                  {trip.infos.map((info) => {
                    return (
                      <p key={trip._id + info.title}>
                        {info.title}: {info.description}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
