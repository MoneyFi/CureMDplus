import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./Layouts/LandingLayout";
import Landing from "../pages/Landingpage/Landing";
import Faqs from "../pages/FaqsPage/Faqs";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LandingLayout/>,
        children:[
            {
                element: <Landing/>,
                path: '/'
            },
            {
                element: <Faqs/>,
                path: '/faqs'
            }
        ]
    }
]);