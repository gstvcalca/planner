import { Info, Link2, Plus, Tag, X } from "lucide-react";
import { Button } from "../components/button";
import { FormEvent, useState } from "react";
import { api } from "../components/axios";
import { TripProps } from "../components/trip-props";

interface AddLinkModalProps {
  closeAddLinkModal: () => void;
  tripInfo: TripProps | undefined;
  setTripInfo: (trip: TripProps) => void;
}

export function AddLinkModal({
  closeAddLinkModal,
  setTripInfo,
  tripInfo,
}: AddLinkModalProps) {

  async function addLink(event: FormEvent<HTMLFormElement>) {
    if (!tripInfo) {
      return;
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("link_title")?.toString();
    const url = data.get("link_url")?.toString();

    const response = await api.put(`/trips/${tripInfo?._id}`, {
      ...tripInfo,
      links: [
        ...tripInfo.links,
        {
          title,
          url,
        },
      ],
    });

    setTripInfo(response.data);
    closeAddLinkModal();
  }

  async function addInfo(event: FormEvent<HTMLFormElement>) {
    if (!tripInfo) {
      return;
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("link_title")?.toString();
    const description = data.get("info_description")?.toString();

    const response = await api.put(`/trips/${tripInfo?._id}`, {
      ...tripInfo,
      infos: [
        ...tripInfo.infos,
        {
          title,
          description,
        },
      ],
    });

    setTripInfo(response.data);
    closeAddLinkModal();
  }

  const [isAddLink, setIsAddLink] = useState(true);

  function onLinkChange() {
    setIsAddLink(!isAddLink);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form
        onSubmit={[addInfo, addLink][Number(isAddLink)]}
        className="w-[640px] rounded-xl py-5 pb-2 px-6 shadow-shape bg-zinc-900 space-y-2 items-center border-2 border-zinc-500"
      >
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Add new link or relevant information
            </h2>
            <button type="button" onClick={closeAddLinkModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            All participants can see all links and information available
          </p>
        </div>

        <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="size-5 text-zinc-400" />
          <input
            name="link_title"
            placeholder="Title"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        {isAddLink ? (
          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Link2 className="size-5 text-zinc-400" />
            <input
              placeholder="URL"
              name="link_url"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        ) : (
          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Info className="size-5 text-zinc-400" />
            <input
              placeholder="Description"
              name="info_description"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        )}

        <div className="border-solid items-center flex justify-center gap-10 relative">
          <Button type="submit">
            <Plus className="size-5" />
            Add {["Info", "Link"][Number(isAddLink)]}
          </Button>
          <label className="inline-flex items-center cursor-pointer space-x-4 right-0 absolute">
            <span className="ms-3 text-zinc-400 font-semibold text-lg dark:text-gray-300">
              Info
            </span>
            <input
              type="checkbox"
              value=""
              checked={isAddLink}
              onChange={onLinkChange}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-zinc-900 peer-focus:outline-none dark:peer-focus:ring-lime-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-500 ring-lime-300 ring-2"></div>
            <span className="ms-3 text-zinc-400 text-lg font-semibold dark:text-gray-300">
              Link
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}
