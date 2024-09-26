import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';
import { DestinationDateStep } from './destination-date-step';
import { GuestsInput } from './guests-input';

export function CreateTripPage(){
    const navigate = useNavigate()
    const [isGuestsInputOpen, setGuestsInput] = useState(false);
    const [isGuestsModalOpen, setGuestsModal] = useState(false);
    const [isConfirmTripModalOpen, setConfirmTripModal] = useState(false);
    const [guestsToInvite, setGuestsToInvite] = useState([
        'gstv.calca@gmail.com',
        'teste@acme.com'
    ]);

    function openGuestsInput(){
        setGuestsInput(true);
    }

    function closeGuestsInput(){
        setGuestsInput(false);
    }

    function openGuestsModal(){
        setGuestsModal(true);
    }

    function closeGuestsModal(){
        setGuestsModal(false);
    }

    function deleteGuest(emailToRemove: string){
        const newList = guestsToInvite.filter(email => email !== emailToRemove);
        setGuestsToInvite(newList);
    }

    function openConfirmTripModal(){
        setConfirmTripModal(true);
    }

    function closeConfirmTripModal(){
        setConfirmTripModal(false);
    }

    function addNewGuest(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')?.toString();
        
        if(!email) return

        if(guestsToInvite.includes(email)) return

        setGuestsToInvite([
        ...guestsToInvite,
        email
        ])

        event.currentTarget.reset();
    }

    function createTrip(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        navigate('/trips/123')
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
            <div className="flex flex-col gap-3 items-center">
            <img src="/logo.svg" alt="Plann.er" />
            <p>Invite your friends and plan your next trip!</p>
            </div>

            <div className="space-y-4 flex flex-col">
            <DestinationDateStep
                closeGuestsInput={closeGuestsInput}
                isGuestsInputOpen={isGuestsInputOpen}
                openGuestsInput={openGuestsInput}
            />

            {isGuestsInputOpen && 
                <GuestsInput
                    guestsToInvite={guestsToInvite}
                    openConfirmTripModal={openConfirmTripModal}
                    openGuestsModal={openGuestsModal}
                />
            }
            </div>
            <p className="text-sm text-zinc-500">By planning your trip using plann.er you automatically agree<br/>
            with our <a href="#" className="text-zinc-300 underline">terms and conditions</a> and <a href="#" className="text-zinc-300 underline">privacy policy.</a></p>
        </div>

        {isGuestsModalOpen && (
            <InviteGuestsModal
            addNewGuest={addNewGuest}
            deleteGuest={deleteGuest}
            closeGuestsModal={closeGuestsModal}
            guestsToInvite={guestsToInvite}
            />
        )}

        {isConfirmTripModalOpen && (
            <ConfirmTripModal
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
            />
        )}
        </div>
    )
}