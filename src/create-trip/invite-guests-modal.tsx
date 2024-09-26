import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../components/button"

interface InviteGuestsModalProps{
    closeGuestsModal: () => void
    guestsToInvite: string[]
    deleteGuest: (guest:string) => void
    addNewGuest: (event: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal({
    addNewGuest,
    closeGuestsModal,
    deleteGuest,
    guestsToInvite,
}: InviteGuestsModalProps){
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center"> 
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">Select guests</h2>
                    <button type="button" onClick={closeGuestsModal}>
                    <X className="size-5 text-zinc-400"/>
                    </button>
                </div>
                <p className="text-sm text-zinc-400">Guests will receive an email to confirm their participation.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                {guestsToInvite.map(guest => {
                    return (
                    <div key={guest} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                        <span className="text-zinc-300">{guest}</span>
                        <button type="button">
                        <X onClick={() => deleteGuest(guest)}className="size-4 text-zinc-400"/>
                        </button>
                    </div>
                )
                })}
                </div>

                <div className="w-full h-px bg-zinc-800"></div>

                <form onSubmit={addNewGuest} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <AtSign className="size-5 text-zinc-400"/>
                <input 
                    name="email" 
                    type="text" 
                    placeholder='Guest email' className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                <Button type="submit">
                    Invite 
                    <Plus className="size-5"/>
                </Button>
                </form>
            </div>
        </div>
    )
}