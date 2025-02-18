import { Anchor, ArrowRightLeft, Calendar, CircleHelp } from "lucide-react";
import { useNavigate } from "react-router";

interface OptionMenuProps {
  currFilter: string;
  setFilter: (filterString: string) => void;
}

export function OptionMenu({ currFilter, setFilter }: OptionMenuProps) {
  function handleDayTrip() {
    if (currFilter === "daytrip") {
      setFilter("all");
    } else {
      setFilter("daytrip");
    }
  }

  function handleWeekendTrip() {
    if (currFilter === "weekendtrip") {
      setFilter("all");
    } else {
      setFilter("weekendtrip");
    }
  }

  function handleCruiseTrip() {
    if (currFilter === "cruisetrip") {
      setFilter("all");
    } else {
      setFilter("cruisetrip");
    }
  }

  function handleSurprise() {
    setFilter(
      ["daytrip", "weekendtrip", "cruisetrip"][Math.floor(Math.random() * 3)]
    );
  }

  const navigate = useNavigate();
  function handleNavigate(){
    navigate("/sitemap");
  }

  return (
    <div className="flex-shrink-0 w-1/6  text-start p-3 space-y-3 bg-zinc-950 h-fit shadow-shape rounded-xl border-2 border-zinc-700">
      <button
        onClick={handleDayTrip}
        className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-900 rounded-xl w-full border-zinc-800"
      >
        <ArrowRightLeft className="size-6 rounded-full " />
        {currFilter === "daytrip" ? (
          <span className="underline underline-offset-8">A day trips</span>
        ) : (
          <span>A day trips</span>
        )}
      </button>
      <button
        onClick={handleWeekendTrip}
        className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-900 rounded-xl w-full"
      >
        <Calendar className="size-6 rounded-full " />
        {currFilter === "weekendtrip" ? (
          <span className="underline underline-offset-8">Weekend trips</span>
        ) : (
          <span>Weekend trips</span>
        )}
      </button>
      <button
        onClick={handleCruiseTrip}
        className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-900 rounded-xl w-full"
      >
        <Anchor className="size-6 rounded-full " />
        {currFilter === "cruisetrip" ? (
          <span className="underline underline-offset-8">Cruise trips</span>
        ) : (
          <span>Cruise trips</span>
        )}
      </button>
      <button
        onClick={handleSurprise}
        className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-900 rounded-xl w-full"
      >
        <CircleHelp className="size-6 rounded-full " />
        <span>Surprise me</span>
      </button>
      <img src="/logo.svg" aria-label="plann.er" className="w-28 m-auto" />
      <p className="gap-3">
        <span>Privacy - </span>
        <span>Terms - </span>
        <a onClick={handleNavigate}><span className="underline underline-offset-4 cursor-pointer">Site map - </span></a>
        <a href="/sitemap"><span className="underline underline-offset-4">Cookies</span></a>
      </p>
    </div>
  );
}
