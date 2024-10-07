import { Bell, ContactRound, Home, Menu, MessageCircle, Search, SquarePlay, User } from "lucide-react";

export function FeedPage(){
    return (
        <div className="min-h-screen flex justify-center bg-pattern bg-no-repeat bg-center">
            <div className="fixed inset-0 w-full h-14 shadow-shape justify-around flex p-2 text-zinc-300 bg-zinc-950">
                <div className="flex w-1/3 justify-start items-center space-x-5">
                    {/* left */}
                    
                    <div className="flex items-center bg-zinc-900 p-2 rounded-xl gap-2">
                        <Search className="size-4"/>
                        <input className="bg-transparent outline-none" placeholder="Search on plann.er"/>
                    </div>
                </div>

                <div className="flex w-1/3 justify-around items-center">
                    {/* middle */}
                    <button className="hover:text-zinc-50 hover:bg-zinc-700 p-2 rounded-xl">
                        <Home className="size-8"/>
                    </button>
                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <ContactRound className="size-8"/>
                    </button>
                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <SquarePlay className="size-8"/>
                    </button>                    
                </div>

                <div className="flex w-1/3 justify-end items-center space-x-5">
                    {/* right */}
                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <Menu className="size-8"/>
                    </button>

                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <MessageCircle className="size-8" />
                    </button>

                    <button className="hover:text-zinc-50  hover:bg-zinc-700 p-2 rounded-xl">
                        <Bell className="size-8"/>
                    </button>
                </div>
            </div>
            <div className="flex justify-around mt-16 w-full px-3 gap-36 mb-3"> {/* main container div 
            trip fd1b3e35-5674-468b-bc18-331570215381*/}
                <div className="flex-shrink-0 w-1/6  text-start p-3 space-y-3 bg-zinc-950 h-fit shadow-shape rounded-xl">
                    <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                        <User className="size-6 rounded-full "/>
                        <span>Opção</span>
                    </button>
                    <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                        <User className="size-6 rounded-full "/>
                        <span>Opção</span>
                    </button>
                    <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                        <User className="size-6 rounded-full "/>
                        <span>Opção</span>
                    </button>
                    <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                        <User className="size-6 rounded-full "/>
                        <span>Opção</span>
                    </button>
                    <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                        <User className="size-6 rounded-full "/>
                        <span>Opção</span>
                    </button>
                    <button className="flex items-center gap-4 p-2 hover:text-zinc-50  hover:bg-zinc-700 rounded-xl w-full">
                        <User className="size-6 rounded-full "/>
                        <span>Opção</span>
                    </button>
                    <img src="/logo.svg" aria-label="plann.er" className="w-28"/>
                </div>
                

                <div className="flex-1 text-center p-3 space-y-3 shadow-shape rounded-xl">
                    <div className="space-y-2 flex-1">
                        <div className="flex justify-between items-center">
                            {/* profile picture, name and date */}
                            <span>Trip to Thredbo from Dec, 15th to Jan, 2nd</span>
                            <button className="flex items-center gap-4 p-2 mx-4 hover:text-zinc-50  hover:bg-zinc-900 rounded-xl">
                                <img src="https://w.wallhaven.cc/full/9d/wallhaven-9d6zlx.png" 
                                className="size-10 rounded-full border-zinc-700 border-2"/>
                                <span>Contato</span>
                            </button>
                                
                        </div>
                        <div className="h-px bg-zinc-900"/>
                        <div className="flex-1">
                            {/* Destination from x to y, number of guests, picture */}
                            <img src="/public\wallhaven-43gm9n.jpg" className="rounded-xl"/>
                            <p className="text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non        laoreet risus, a tristique ipsum. Aliquam ac risus nisi. Sed porta euismod massa eget ultricies. Donec consequat non lectus a malesuada. Quisque scelerisque mattis diam vitae vehicula. Fusce eleifend ipsum vel nibh eleifend finibus. Donec odio nunc, scelerisque ut euismod sit amet, pellentesque vel nulla. Nam eu ultricies sapien. Praesent suscipit accumsan condimentum</p>
                            <div className="justify-start text-start mt-2">
                                <span>Where do we meet:</span><br/>
                                <span>Budget:</span><br/>
                                <span>Confirmed: </span><br/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="text-end p-3 flex-shrink-0 w-1/6 shadow-shape rounded-xl">
                    <button className="flex items-center gap-4 p-2 w-full hover:text-zinc-50  hover:bg-zinc-900 rounded-xl">
                        <img src="https://w.wallhaven.cc/full/9d/wallhaven-9d6zlx.png" 
                        className="size-10 rounded-full border-zinc-700 border-2"/>
                        <span>Contato</span>
                    </button>
                    
                    <button className="flex items-center gap-4 p-2 w-full hover:text-zinc-50  hover:bg-zinc-700 rounded-xl">
                        <img src="https://w.wallhaven.cc/full/9d/wallhaven-9d6zlx.png" 
                        className="size-10 rounded-full border-zinc-700 border-2"/>
                        <span>Contato</span>
                    </button>

                    <button className="flex items-center gap-4 p-2 w-full hover:text-zinc-50  hover:bg-zinc-700 rounded-xl">
                        <img src="https://w.wallhaven.cc/full/9d/wallhaven-9d6zlx.png" 
                        className="size-10 rounded-full border-zinc-700 border-2"/>
                        <span>Contato</span>
                    </button>

                    <button className="flex items-center gap-4 p-2 w-full hover:text-zinc-50  hover:bg-zinc-700 rounded-xl">
                        <img src="https://w.wallhaven.cc/full/9d/wallhaven-9d6zlx.png" 
                        className="size-10 rounded-full border-zinc-700 border-2"/>
                        <span>Contato</span>
                    </button>

                    <button className="flex items-center gap-4 p-2 w-full hover:text-zinc-50  hover:bg-zinc-700 rounded-xl">
                        <img src="https://w.wallhaven.cc/full/9d/wallhaven-9d6zlx.png" 
                        className="size-10 rounded-full border-zinc-700 border-2"/>
                        <span>Contato</span>
                    </button>

                    <button className="flex items-center gap-4 p-2 w-full hover:text-zinc-50  hover:bg-zinc-700 rounded-xl">
                        <img src="https://w.wallhaven.cc/full/9d/wallhaven-9d6zlx.png" 
                        className="size-10 rounded-full border-zinc-700 border-2"/>
                        <span>Contato</span>
                    </button>
                </div>


            </div>

        </div>
    )
}