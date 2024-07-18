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
import LoginProductor from "../pages/Productor/LoginProductor/LoginProductor";
import SuccessProductor from "../pages/Productor/RegisterProductor/SuccessProductor";
import ProductsPage from "../pages/Client/ProductsPage/ProductsPage";
import PaymentProduct from "../pages/Client/ProductsPage/PaymentProduct";
import DashboardAdmin from "./Layouts/DashboardAdmin";
import TransfersPending from "../pages/Admin/Transferencias/TransfersPending";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UsuarioSection from "../pages/Admin/Usuarios/UsuarioSection";
import AdminHome from "../pages/Admin/AdminHome";

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
        path: '/admin',
        element: <DashboardAdmin/>,
        children:[
            {
                element: <AdminHome/>,
                path: ''
            },
            {
                element: <TransfersPending/>,
                path: 'transfers'
            },
            {
                element: <UsuarioSection/>,
                path: 'users'

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
        path:'/adquirirproducto/:id',
        element: <ProductsPage/>
    },
    {
        path: '/paymentproduct/:id',
        element: <PaymentProduct/>
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
        path: '/productorsuccess',
        element: <SuccessProductor/>
    },
    {
        path: '/loginproductor',
        element: <LoginProductor/>
    },
    {
        path: '/myaccount',
        element: <UserDashboard/>
    },
    {
        path: '/telemedicina',
        element: <LandingCureMd/>
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
]);