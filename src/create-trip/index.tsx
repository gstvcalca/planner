import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { InviteGuestsModal } from './invite-guests-modal';
import { DestinationDateStep } from './destination-date-step';
import { GuestsInput } from './guests-input';
import { DateRange } from 'react-day-picker';
import { api } from '../lib/axios';
import { MyContext } from '../context/context';

export function CreateTripPage(){
    const navigate = useNavigate()
    const {logged_user} = useContext(MyContext);
    const [isGuestsInputOpen, setGuestsInput] = useState(false);
    const [isGuestsModalOpen, setGuestsModal] = useState(false);
    const [guestsToInvite, setGuestsToInvite] = useState([
        'gustavo@planner.com',
        'teste@acme.com'
    ]);

    const [destination, setDestination] = useState('');
    const [eventDateObj, setEventDateObj] = useState<DateRange | undefined>()

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

    async function createTrip(){
        if (!destination) {return}
        if (!eventDateObj?.from || !eventDateObj?.to) {return}
        if (guestsToInvite.length === 0) {return}

        const response = await api.post('/trips', {
            destination: destination,
            starts_at: eventDateObj?.from,
            ends_at: eventDateObj?.to,
            emails_to_invite: guestsToInvite,
            created_by: logged_user
        })
        const {_id} = response.data.trip
        navigate(`/trips/${_id}`);
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
                destination={destination}
                closeGuestsInput={closeGuestsInput}
                isGuestsInputOpen={isGuestsInputOpen}
                openGuestsInput={openGuestsInput}
                setDestination={setDestination}
                eventDateObj={eventDateObj}
                setEventDateObj={setEventDateObj}
            />

            {isGuestsInputOpen && 
                <GuestsInput
                    guestsToInvite={guestsToInvite}
                    createTrip={createTrip}
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
        </div>
    )
}