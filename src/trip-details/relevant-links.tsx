import { Link2, PlusIcon } from "lucide-react";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../lib/axios";

interface LinkProps{
    id: string
    title: string
    url: string
}

interface RelevantLinksProps{
    openAddLinkModal: () => void
}

export function RelevantLinks({openAddLinkModal}: RelevantLinksProps){
    const {id} = useParams();
    const [links, setLinks] = useState<LinkProps[]>([]);
    const infosObj = [{
        "type": "info",
        "title": "Where do we meet?",
        "info": 'Some place'
    },
    {
        "type": "info",
        "title": "Budget",
        'info': "$1000.00"
    },
    {
        "type": "info",
        "title": "Confirmed",
        'info': '16',
    },
    {
        "type": "url",
        "title": "AirBnB",
        "info": "https://airBnB.com"
    }]    

    useEffect(() => {
        api.get(`/trips/${id}/links`).then((response) => {setLinks(response.data.links)})
    }, [id]);

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Relevant info</h2>
            {infosObj.map((info) => {
                if(info.type === "info"){
                return (
                    <div key={info.title + info.type} className="flex justify-between">
                        <span>{info.title}</span>
                        <span>{info.info}</span>
                    </div>
                    )}
                else {
                    return(
                        <div key={info.title + info.type} className="flex items-center justify-between gap-4"> {/* links list */}
                            <div className="flex-1">
                                <span className="block font-medium text-zinc-100">{info.title}</span>
                                <a href={info.info} className="truncate block text-zinc-400 text-xs hover:text-zinc-200">
                                    {info.info}
                                </a>
                            </div>
                            <a href={info.info}><Link2 className="text-zinc-400 size-5 shrink-0"/></a>
                        </div>
                    )
                }}
                    
                )
            }
           
            {links.map((link) => {
                return(
                    <div key={link.id} className="flex items-center justify-between gap-4"> {/* links list */}
                        <div className="flex-1">
                            <span className="block font-medium text-zinc-100">{link.title}</span>
                            <a href={link.url} className="truncate block text-zinc-400 text-xs hover:text-zinc-200">
                                {link.url}
                            </a>
                        </div>
                        <a href={link.url}><Link2 className="text-zinc-400 size-5 shrink-0"/></a>
                    </div>
                )
            })}
            <div className="flex items-center justify-between gap-4"> {/* links list */}
                <div className="flex-1">
                    <span className="block font-medium text-zinc-100">AirBnB booking</span>
                    <a href="#" className="truncate block text-zinc-400 text-xs hover:text-zinc-200">
                        https://www.figma.com/design/R4rqTCthxleE2asdfasdfasdfasdfds
                    </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
            </div>
            <Button onClick={openAddLinkModal} cstyle="secondary" size='full'>
                <PlusIcon className="size-5"/>
                Add link
            </Button>
        </div>
    )
}