import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripPage } from "./create-trip";
import { TripDetailsPage } from "./trip-details";
import { SelectUserPage } from "./select-user";

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
]);

export function App(){
  return <RouterProvider router={router} />
}