import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./Layouts/LandingLayout";
import Landing from "../pages/Landingpage/Landing";
import LayoutPayment from "../pages/Payments/LayoutPayment";
import Success from "../pages/Payments/Success";
import Failure from "../pages/Payments/Failure";
import TermsConditions from "../pages/Terms&Conditions/TermsConditions";
import UserDashboard from "../pages/Client/UserPage/UserDashboard";
import NewRegister from "../pages/Register/NewRegister";
import LandingCureMd from "../pages/Landingpage/LandingCureMd";
import RegisterProductor from "../pages/Productor/RegisterProductor/RegisterProductor";
import DashboardProductores from "./Layouts/DashboardProductores";
import Asegurados from "../pages/Productor/Asegurados/Asegurados";

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
        path: '/productores',
        element: <DashboardProductores/>,
        children:[
            {
                element: <Asegurados/>,
                path: '/productores/home'
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
        path:'/registerproductor',
        element: <RegisterProductor/>
    },
    {
        path: '/myaccount',
        element: <UserDashboard/>
    },
    {
        path: '/telemedicina',
        element: <LandingCureMd/>
    }
]);