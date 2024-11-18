import { FeedElement } from "./feed-element";
import { OptionMenu } from "./option-menu";
import { ContactsMenu } from "./contacts-menu";
import { TopHeaderMenu } from "./top-header-menu";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/context";
import { useNavigate } from "react-router";

export function FeedPage() {
  const [currFilter, setFilter] = useState("all");
  const [currSearch, setSearch] = useState("");
  const [userFilter, setUserFilter] = useState('others');
  const { logged_user } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(logged_user).length === 0) {
      navigate("/");
    }
  });

  return (
    <div className="min-h-screen flex justify-center bg-pattern bg-repeat-space bg-center">
      <TopHeaderMenu setUserFilter={setUserFilter} userFilter={userFilter} currSearch={currSearch} setSearch={setSearch}  />
      <div className="flex justify-around mt-16 w-full px-3 gap-36 mb-3">
        {" "}
        {/* main container div */}
        <OptionMenu currFilter={currFilter} setFilter={setFilter} />
        <FeedElement userFilter={userFilter} currFilter={currFilter} currSearch={currSearch} />
        <ContactsMenu />
      </div>
    </div>
  );
}
