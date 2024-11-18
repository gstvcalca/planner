import { Link2, PlusIcon } from "lucide-react";
import { Button } from "../components/button";
import { TripProps } from "../components/trip-props";

interface RelevantLinksProps {
  openAddLinkModal: () => void;
  tripInfo: TripProps | undefined;
}

export function RelevantLinks({
  openAddLinkModal,
  tripInfo
}: RelevantLinksProps) {
  return (
    <div className="space-y-6 border-2 border-zinc-900 rounded-xl p-3">
      <h2 className="font-semibold text-xl underline underline-offset-8">Relevant info</h2>
      {tripInfo?.infos.map((info) => {
        return (
          <div key={info._id} className="flex justify-between">
            <span>{info.title}</span>
            <span>{info.description}</span>
          </div>
        );
      })}

      {tripInfo?.links.map((link) => {
        return (
          <div
            key={link._id}
            className="flex items-center justify-between gap-4"
          >
            {/* links list */}
            <div className="flex-1">
              <span className="block font-medium text-zinc-100">
                {link.title}
              </span>
              <a
                href={link.url}
                className="truncate block text-zinc-400 text-xs hover:text-zinc-200"
              >
                {link.url}
              </a>
            </div>
            <a href={link.url}>
              <Link2 className="text-zinc-400 size-5 shrink-0" />
            </a>
          </div>
        );
      })}
      <Button onClick={openAddLinkModal} cstyle="secondary" size="full">
        <PlusIcon className="size-5" />
        Add link
      </Button>
    </div>
  );
}
