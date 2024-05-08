import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import { auth } from '../utils/firebase';
import {  onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from '../utils/userSlice';
const Body = () => {

   
const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/browse",
        element:<Browse />
    }
])


  

    return (
        <div>
           
            <RouterProvider router={appRoute} />
        </div>
    )
}
export default Body;
