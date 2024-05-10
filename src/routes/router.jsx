import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingLayout from "./Layouts/LandingLayout";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <LandingLayout/>,
        children:[{
            element: <App/>,
            path: '/'
        }]
    }
])