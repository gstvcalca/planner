import { CircleCheck, Text, X } from "lucide-react";
import { InputContainer } from "../components/input-container";
import { Button } from "../components/button";
import { FormEvent } from "react";
import { api } from "../components/axios";
import { TripProps } from "../components/trip-props";

interface ChangeDescriptionModalProps {
  closeChangeDescriptionModal: () => void;
  tripInfo: TripProps | undefined,
  setTripInfo: (trip: TripProps) => void;
}

export function ChangeDescriptionModal({ closeChangeDescriptionModal, tripInfo, setTripInfo}: ChangeDescriptionModalProps) {
  
  async function changeImgURL(event: FormEvent<HTMLFormElement>) {
    if(!tripInfo){return}
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newDescription = data.get("description")?.toString() || "";

    const response = await api.put(`/trips/${tripInfo?._id}`, {...tripInfo, description: newDescription});
    setTripInfo(response.data);

    closeChangeDescriptionModal();
    
  }
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form
        onSubmit={changeImgURL}
        className="bg-zinc-900 rounded-xl py-5 px-6 w-1/3 "
      >
        <div className="space-y-2 justify-center flex-1 items-center">
          <div className="justify-between flex">
            <h2>Enter the new description</h2>
            <button type="button" onClick={closeChangeDescriptionModal}>
              <X className="size-5" />
            </button>
          </div>
          <div className="h-3" />
          <InputContainer>
            <Text className="size-5 text-zinc-900" />
            <input
              name="description"
              type="text"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </InputContainer>
          <div className="flex justify-center">
            <Button type="submit">
              <CircleCheck className="size-5 text-zinc-900" />
              Update Description
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
