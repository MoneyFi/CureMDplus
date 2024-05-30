import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./Layouts/LandingLayout";
import Landing from "../pages/Landingpage/Landing";
import LayoutPayment from "../pages/Payments/LayoutPayment";
import Success from "../pages/Payments/Success";
import Failure from "../pages/Payments/Failure";
import TermsConditions from "../pages/Terms&Conditions/TermsConditions";
import UserDashboard from "../pages/UserPage/UserDashboard";
import PaymentSection from "../pages/Client/PaymentSection/PaymentSection";
import NewRegister from "../pages/Register/NewRegister";

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
    },
    {
        path: '/terminosycondiciones',
        element: <TermsConditions/>
    },
    {
        path: '/register',
        element: <NewRegister/>
    },
    {
        path: '/myaccount',
        element: <UserDashboard/>
    }
]);