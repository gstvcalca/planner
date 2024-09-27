import { Calendar, Plus, Tag, X } from "lucide-react";
import { Button } from "../components/button";
import { FormEvent } from "react";
import { useParams } from "react-router";
import { api } from "../lib/axios";

interface createActivityModalProps{
    closeActivityModal: () => void
}





export function CreateActivityModal({closeActivityModal}: createActivityModalProps){
    const { id } = useParams();
    async function createAtivity(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const title = data.get('activity_name')?.toString();
        const occurs_at = data.get('activity_date')?.toString();

        await api.post(`/trips/${id}/activities`, {
            title,
            occurs_at
        })
    
        window.document.location.reload()

}
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center"> 
            <form onSubmit={createAtivity} className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-2">
                <div className="space-y-2">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">Add new activity</h2>
                    <button type="button" onClick={closeActivityModal}>
                    <X className="size-5 text-zinc-400"/>
                    </button>
                </div>
                    <p className="text-sm text-zinc-400">All participants can see all activities planned</p>
                </div>
                
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Tag className="size-5 text-zinc-400"/>
                    <input 
                        name="activity_name" 
                        type="text" 
                        placeholder='Title' 
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                </div>
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400"/>
                    <input 
                        placeholder="Date and time"
                        name="activity_date" 
                        type="datetime-local" 
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                </div>
                
                <Button type="submit" size='full'>
                    <Plus className="size-5"/>
                    Add Activiity
                </Button>
            </form>
        </div>
    )
}