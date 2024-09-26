import { Calendar, Plus, Tag, X } from "lucide-react";
import { Button } from "../components/button";

interface createActivityModalProps{
    closeActivityModal: () => void
}

export function CreateActivityModal({closeActivityModal}: createActivityModalProps){
    
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center"> 
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
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
                    <input name="activity_name" type="text" placeholder='Title' className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
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
            </div>
        </div>
    )
}