import { AtSign, Plus, X } from "lucide-react";
import { InputContainer } from "../components/input-container";
import { Button } from "../components/button";
import { FormEvent } from "react";
import { api } from "../lib/axios";
import { TripProps } from "../components/trip-props";

interface AddGuestModalProps {
  closeAddGuestModal: () => void;
  tripInfo: TripProps | undefined;
  setTripInfo: (trip: TripProps) => void;
}

export function AddGuestModal({
  closeAddGuestModal,
  setTripInfo,
  tripInfo,
}: AddGuestModalProps) {
  async function addNewGuest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");

    const response = await api.put(`/trips/${tripInfo?._id}`, {
      ...tripInfo,
      guests: [
        ...(tripInfo?.guests || []),
        {
          email,
        },
      ],
    });
    setTripInfo(response.data);
    closeAddGuestModal();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form
        onSubmit={addNewGuest}
        className="bg-zinc-900 rounded-xl py-5 px-6 w-1/3 "
      >
        <div className="space-y-2 justify-center flex-1 items-center">
          <div className="justify-between flex">
            <h2>Type the email of the new guest you want to invite</h2>
            <button type="button" onClick={closeAddGuestModal}>
              <X className="size-5" />
            </button>
          </div>
          <div className="h-3" />
          <InputContainer>
            <AtSign className="size-5 text-zinc-900" />
            <input
              name="email"
              type="email"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </InputContainer>
          <div className="flex justify-center">
            <Button type="submit">
              <Plus className="size-5 text-zinc-900" />
              Invite new guest
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
