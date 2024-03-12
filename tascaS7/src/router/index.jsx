import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home";
import StarShips from "../pages/StarShips";
import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index:true,
                element: <Home />,
            },
            {
                path: "/starships",
                element: <StarShips />,
                errorElement: <NotFound />
            },
        ],
    },

])