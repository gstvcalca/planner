import { Plus} from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./activity-modal";
import { RelevantLinks } from "./relevant-links";
import { GuestsList } from "./guests-list";
import { Activities } from "./activities";
import { DestinationHeader } from "./destination-header";
import { Button } from "../components/button";
import { AddGuestModal } from "./add-guest-modal";
import { AddLinkModal } from "./add-link-modal";
import { ChangeDestinationModal } from "./change-destination-modal";

export function TripDetailsPage(){
    const [isNewActivityModalOpen, setNewActivityModal] = useState(false);
    const [isAddGuestModalOpen, setAddGuestModal] = useState(false);
    const [isAddLinkModalOpen, setAddLinkModal] = useState(false);
    const [isChangeDestinationModalOpen, setChangeDestinationModal] = useState(false);

    function closeActivityModal(){
        setNewActivityModal(false);
    }
    
    function openActivityModal(){
        setNewActivityModal(true);
    }

    function closeAddGuestModal(){
        setAddGuestModal(false);
    }

    function openAddGuestModal(){
        setAddGuestModal(true);
    }

    function openAddLinkModal(){
        setAddLinkModal(true);
    }

    function closeAddLinkModal(){
        setAddLinkModal(false);
    }

    function openChangeDestinationModal(){
        setChangeDestinationModal(true);
    }

    function closeChangeDestinationModal(){
        setChangeDestinationModal(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationHeader openChangeDestinationModal={openChangeDestinationModal}/>
            <main className="flex gap-16 px-6">
                
                <div className="flex-1 space-y-6"> 
                    <div className="flex items-center justify-between"> 
                        <h2 className="text-3xl font-semibold">Activities</h2>
                        <Button onClick={openActivityModal}>
                            Add
                            <Plus className="size-5"/>
                        </Button>
                    </div>
                    <Activities/>
                </div>

                <div className="w-80 space-y-6">
                    <RelevantLinks openAddLinkModal={openAddLinkModal}/>
                    <div className="w-full h-px bg-zinc-800"/>
                    <GuestsList openAddGuestModal={openAddGuestModal}/>                    
                </div>

            </main>

            {isNewActivityModalOpen && (
                <CreateActivityModal closeActivityModal={closeActivityModal}/>
            )}

            {isAddGuestModalOpen && (
                <AddGuestModal closeAddGuestModal={closeAddGuestModal}/>
            )}

            {isAddLinkModalOpen && (
                <AddLinkModal closeAddLinkModal={closeAddLinkModal}/>
            )}

            {isChangeDestinationModalOpen && (
                <ChangeDestinationModal
                    closeChangeDestinationModal={closeChangeDestinationModal}/>
            )}

        </div>
    )
} 