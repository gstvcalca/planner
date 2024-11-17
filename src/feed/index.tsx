import { FeedElement } from "./feed-element";
import { OptionMenu } from "./option-menu";
import { ContactsMenu } from "./contacts-menu";
import { TopHeaderMenu } from "./top-header-menu";
import { useState } from "react";


export function FeedPage(){
    const [currFilter, setFilter] = useState('all');
    const [currSearch, setSearch] = useState('');

    return (
        <div className="min-h-screen flex justify-center bg-pattern bg-repeat-space bg-center">
            <TopHeaderMenu
                currSearch={currSearch}
                setSearch={setSearch}/>
            <div className="flex justify-around mt-16 w-full px-3 gap-36 mb-3"> {/* main container div */}
                <OptionMenu currFilter={currFilter} setFilter={setFilter}/>
                <FeedElement 
                    currFilter={currFilter}
                    currSearch={currSearch}/>
                <ContactsMenu/>
            </div>
        </div>
    )
}