import { ArrowRight, Mail, User, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../components/button"

interface ConfirmTripModalProps{
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip
    }: ConfirmTripModalProps){
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center"> 
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">Confirm trip creation</h2>
                        <button type="button" onClick={closeConfirmTripModal}>
                            <X className="size-5 text-zinc-400"/>
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        To confirm the booking of your trip to 
                        <span className="font-semibold text-zinc-100">Threbo, AU</span> on 
                        <span className="font-semibold text-zinc-100">Dec 15</span>, please fill the fields below:
                    </p>
                </div>              
                <form onSubmit={createTrip} className="space-y-3">
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14">
                        <User className="size-5 text-zinc-400"/>
                        <input name="name" placeholder='Your name' className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                    </div>
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14">
                        <Mail className="size-5 text-zinc-400"/>
                        <input type="email" name="email" placeholder='Your email' className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                    </div>  
                    <Button type="submit" size='full'>
                        Confirm trip    
                        <ArrowRight className="size-5"/>
                    </Button>
                
                </form>
            </div>
        </div>
    )
}
