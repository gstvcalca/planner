import { CircleCheck, Image, X } from "lucide-react";
import { InputContainer } from "../components/input-container";
import { Button } from "../components/button";
import { FormEvent } from "react";
import { api } from "../components/axios";
import { TripProps } from "../components/trip-props";

interface ChangeImgModalProps {
  closeChangeImgURLModal: () => void;
  tripInfo: TripProps | undefined,
  setTripInfo: (trip: TripProps) => void
}

export function ChangeImgURLModal({ closeChangeImgURLModal, tripInfo, setTripInfo }: ChangeImgModalProps) {
  function changeImgURL(event: FormEvent<HTMLFormElement>) {
    if(!tripInfo){return}
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newURL = data.get("img_url")?.toString() || "";

    api.put(`/trips/${tripInfo?._id}`, {...tripInfo, img_url: newURL});

    setTripInfo({...tripInfo, img_url: newURL});
    closeChangeImgURLModal();
  }
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form
        onSubmit={changeImgURL}
        className="bg-zinc-900 rounded-xl py-5 px-6 w-1/3 "
      >
        <div className="space-y-2 justify-center flex-1 items-center">
          <div className="justify-between flex">
            <h2>Enter the new image URL</h2>
            <button type="button" onClick={closeChangeImgURLModal}>
              <X className="size-5" />
            </button>
          </div>
          <div className="h-3" />
          <InputContainer>
            <Image className="size-5 text-zinc-900" />
            <input
              name="img_url"
              type="text"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </InputContainer>
          <div className="flex justify-center">
            <Button type="submit">
              <CircleCheck className="size-5 text-zinc-900" />
              Update image URL
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
