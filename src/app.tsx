import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripPage } from "./create-trip";
import { TripDetailsPage } from "./trip-details";
import { SelectUserPage } from "./select-user";
import { FeedPage } from "./feed";
import { SiteMapPage } from "./sitemap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectUserPage/>
  },
  {
    path: "/createtrip",
    element: <CreateTripPage/>,
  },
  {
    path: "/trips/:id",
    element: <TripDetailsPage/>,
  },
  {
    path: "/feed",
    element: <FeedPage/>
  },
  {
    path: "/sitemap",
    element: <SiteMapPage/>
  }
]);

export function App(){
  return <RouterProvider router={router} />
}