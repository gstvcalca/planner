import { useNavigate } from "react-router"

export function FeedElement(){
    const navigate = useNavigate();

    function handleNavigate(){
        navigate('/trips/fd1b3e35-5674-468b-bc18-331570215381')
    }
    return(
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
                            <button onClick={handleNavigate}>
                                <img src="\wallhaven-43gm9n.jpg" className="rounded-xl"/>
                            </button>
                            <p className="text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non        laoreet risus, a tristique ipsum. Aliquam ac risus nisi. Sed porta euismod massa eget ultricies. Donec consequat non lectus a malesuada. Quisque scelerisque mattis diam vitae vehicula. Fusce eleifend ipsum vel nibh eleifend finibus. Donec odio nunc, scelerisque ut euismod sit amet, pellentesque vel nulla. Nam eu ultricies sapien. Praesent suscipit accumsan condimentum</p>
                            <div className="justify-start text-start mt-2">
                                <span>Where do we meet:</span><br/>
                                <span>Budget:</span><br/>
                                <span>Confirmed: </span><br/>
                            </div>
                        </div>
                    </div>
                    
                </div>
    )
}