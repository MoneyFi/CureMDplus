import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./Layouts/LandingLayout";
import Landing from "../pages/Landingpage/Landing";
import Faqs from "../pages/FaqsPage/Faqs";
import FaqsLayout from "./Layouts/FaqsLayout";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <LandingLayout/>,
        children:[
            {
                element: <Landing/>,
                path: '/'
            }
        ]
    },
    {
        path:'/faqs',
        element: <FaqsLayout/>,
        children:[
            {
                element: <Faqs/>,
                path: '/faqs'
            }
        ]
    }
]);