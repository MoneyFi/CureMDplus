import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./Layouts/LandingLayout";
import Landing from "../pages/Landingpage/Landing";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <LandingLayout/>,
        children:[{
            element: <Landing/>,
            path: '/'
        }]
    }
])