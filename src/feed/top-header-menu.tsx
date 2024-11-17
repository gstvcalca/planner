import { Search, Home, ContactRound, Bell, Plus } from "lucide-react";
import { useNavigate } from "react-router";


interface topHeaderMenuProps{
    currSearch: string,
    setSearch:(txt: string) => void
}

export function TopHeaderMenu({currSearch, setSearch}: topHeaderMenuProps){

    const navigate = useNavigate();

    function handleNavigateCreateTrip(){
        navigate('/createtrip');
    }

    return(
        <div className="fixed inset-0 w-full h-14 shadow-shape justify-around flex p-2 text-zinc-300 bg-zinc-950 border-b-2 border-zinc-700 ">
                <div className="flex w-1/3 justify-start items-center space-x-5">
                    {/* left */}
                    
                    <div className="flex items-center bg-zinc-900 p-2 rounded-xl gap-2 border-2 border-zinc-700">
                        <Search className="size-4"/>
                        <input 
                            className="bg-transparent outline-none" 
                            placeholder="Search on plann.er"
                            value={currSearch}
                            onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                </div>

                <div className="flex w-1/3 justify-around items-center">
                    {/* middle */}
                    <button className="hover:text-zinc-50 hover:bg-zinc-700 p-2 rounded-xl flex gap-2 items-center">
                        <Home className="size-8"/>
                        Home
                    </button>

                    <button onClick={handleNavigateCreateTrip}className="flex hover:text-zinc-50 hover:bg-zinc-700 p-2 rounded-xl items-center gap-2">
                        <Plus className="size-8"/>
                        Create a new trip
                    </button>
                    
                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl flex gap-2 items-center">
                        <ContactRound className="size-8"/>
                        See my trips
                    </button>                   
                </div>

                <div className="flex w-1/3 justify-end items-center space-x-5">
                    {/* right */}
                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <Bell className="size-8"/>
                    </button>
                </div>
            </div>
    )
}