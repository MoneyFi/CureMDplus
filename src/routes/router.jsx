import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./Layouts/LandingLayout";
import Landing from "../pages/Landingpage/Landing";
import Faqs from "../pages/FaqsPage/Faqs";
import LayoutPayment from "../pages/Payments/LayoutPayment";
import Success from "../pages/Payments/Success";
import Failure from "../pages/Payments/Failure";

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
    },
    {
        path:'/payments',
        element: <LayoutPayment/>,
        children:[
            {
                element:<Success/>,
                path:'/payments/success'
            },
            {
                element:<Failure/>,
                path:'/payments/failure'
            }
        ]
    }
]);