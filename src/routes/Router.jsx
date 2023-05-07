import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "booking/:id",
    element: <Booking />,
    loader: async ({ params }) => {
      return fetch(`https://api.tvmaze.com/shows/${params.id}`);
    },
  },
]);
