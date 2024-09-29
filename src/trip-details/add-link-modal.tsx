import { Link2, Plus, Tag, X } from "lucide-react";
import { Button } from "../components/button";
import { useParams } from "react-router";
import { FormEvent } from "react";
import { api } from "../lib/axios";


interface AddLinkModalProps{
    closeAddLinkModal: () => void
}

export function AddLinkModal({closeAddLinkModal}: AddLinkModalProps){
    const {id} = useParams();

    function addLink(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const title = data.get('link_title')?.toString();
        const url = data.get('link_url')?.toString();

        api.post(`/trips/${id}/links`, {
            title,
            url
        })

        window.location.reload();

    }

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center"> 
            <form onSubmit={addLink} className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-2">
                <div className="space-y-2">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">Add new link</h2>
                    <button type="button" onClick={closeAddLinkModal}>
                    <X className="size-5 text-zinc-400"/>
                    </button>
                </div>
                    <p className="text-sm text-zinc-400">All participants can see all links available</p>
                </div>
                
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Tag className="size-5 text-zinc-400"/>
                    <input 
                        name="link_title" 
                        placeholder='Title' 
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                </div>
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Link2 className="size-5 text-zinc-400"/>
                    <input 
                        placeholder="URL"
                        name="link_url" 
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                </div>
                
                <Button type="submit" size='full'>
                    <Plus className="size-5"/>
                    Add Link
                </Button>
            </form>
        </div>
    )
}