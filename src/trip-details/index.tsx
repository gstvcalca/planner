import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { CreateActivityModal } from "./activity-modal";
import { RelevantLinks } from "./relevant-links";
import { GuestsList } from "./guests-list";
import { Activities } from "./activities";
import { DestinationHeader } from "./destination-header";
import { Button } from "../components/button";
import { AddGuestModal } from "./add-guest-modal";
import { AddLinkModal } from "./add-link-modal";
import { ChangeDestinationModal } from "./change-destination-modal";
import { TripProps } from "../components/trip-props";
import { useParams } from "react-router";
import { api } from "../components/axios";
import { ChangeImgURLModal } from "./change-img-modal";
import { ChangeDescriptionModal } from "./change-description-modal";

export function TripDetailsPage() {
  const { id } = useParams();
  const [isNewActivityModalOpen, setNewActivityModal] = useState(false);
  const [isAddGuestModalOpen, setAddGuestModal] = useState(false);
  const [isAddLinkModalOpen, setAddLinkModal] = useState(false);
  const [isChangeImgURLModalOpen, setChangeImgURLModal] = useState(false);
  const [isChangeDescriptionModalOpen, setChangeDescriptionModal] =
    useState(false);
  const [isChangeDestinationModalOpen, setChangeDestinationModal] =
    useState(false);
  const [tripInfo, setTripInfo] = useState<TripProps | undefined>();

  useEffect(() => {
    api.get(`/trips/${id}`).then((response) => setTripInfo(response.data.trip));
  }, [id]);

  function closeActivityModal() {
    setNewActivityModal(false);
  }

  function openActivityModal() {
    setNewActivityModal(true);
  }

  function closeAddGuestModal() {
    setAddGuestModal(false);
  }

  function openAddGuestModal() {
    setAddGuestModal(true);
  }

  function openAddLinkModal() {
    setAddLinkModal(true);
  }

  function closeAddLinkModal() {
    setAddLinkModal(false);
  }

  function openChangeDestinationModal() {
    setChangeDestinationModal(true);
  }

  function closeChangeDestinationModal() {
    setChangeDestinationModal(false);
  }

  function openChangeImgURLModal() {
    setChangeImgURLModal(true);
  }

  function closeChangeImgURLModal() {
    setChangeImgURLModal(false);
  }

  function closeChangeDescriptionModal() {
    setChangeDescriptionModal(false);
  }

  function openChangeDescriptionModal() {
    setChangeDescriptionModal(true);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationHeader
        openChangeDestinationModal={openChangeDestinationModal}
        tripInfo={tripInfo}
      />
      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex-1">
            <button className="w-full h-96" onClick={openChangeImgURLModal}>
              <img
                src={tripInfo?.img_url}
                className="rounded-xl size-full border-2 border-zinc-700"
              />
            </button>
            <button onClick={openChangeDescriptionModal} className="w-full">
              <p className="text-justify p-2 mt-2 border-2 border-zinc-900 rounded-xl">
                {tripInfo?.description}
              </p>
            </button>
          </div>

          <div className="flex items-center justify-between ">
            <h2 className="text-3xl font-semibold">Activities</h2>
            <Button onClick={openActivityModal}>
              Add
              <Plus className="size-5" />
            </Button>
          </div>

          <Activities tripInfo={tripInfo} />
        </div>

        <div className="w-80 space-y-6">
          <RelevantLinks
            openAddLinkModal={openAddLinkModal}
            tripInfo={tripInfo}
          />
          <div className="w-full h-px bg-zinc-800" />
          <GuestsList
            openAddGuestModal={openAddGuestModal}
            tripInfo={tripInfo}
          />
        </div>
      </main>

      {isNewActivityModalOpen && (
        <CreateActivityModal
          setTripInfo={setTripInfo}
          tripInfo={tripInfo}
          closeActivityModal={closeActivityModal}
        />
      )}

      {isAddGuestModalOpen && (
        <AddGuestModal 
        setTripInfo={setTripInfo}
        tripInfo={tripInfo}
        closeAddGuestModal={closeAddGuestModal} />
      )}

      {isAddLinkModalOpen && (
        <AddLinkModal
          tripInfo={tripInfo}
          setTripInfo={setTripInfo}
          closeAddLinkModal={closeAddLinkModal}
        />
      )}

      {isChangeDestinationModalOpen && (
        <ChangeDestinationModal
          setTripInfo={setTripInfo}
          closeChangeDestinationModal={closeChangeDestinationModal}
          tripInfo={tripInfo}
        />
      )}

      {isChangeImgURLModalOpen && (
        <ChangeImgURLModal
          closeChangeImgURLModal={closeChangeImgURLModal}
          tripInfo={tripInfo}
          setTripInfo={setTripInfo}
        />
      )}

      {isChangeDescriptionModalOpen && (
        <ChangeDescriptionModal
          setTripInfo={setTripInfo}
          closeChangeDescriptionModal={closeChangeDescriptionModal}
          tripInfo={tripInfo}
        />
      )}
    </div>
  );
}
