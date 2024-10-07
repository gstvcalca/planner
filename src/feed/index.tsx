import { FeedElement } from "./feed-element";
import { OptionMenu } from "./option-menu";
import { ContactsMenu } from "./contacts-menu";
import { TopHeaderMenu } from "./top-header-menu";

export function FeedPage(){
    return (
        <div className="min-h-screen flex justify-center bg-pattern bg-no-repeat bg-center">
            <TopHeaderMenu/>
            <div className="flex justify-around mt-16 w-full px-3 gap-36 mb-3"> {/* main container div */}
                <OptionMenu/>
                
                <FeedElement/>
                
                <ContactsMenu/>

            </div>

        </div>
    )
}