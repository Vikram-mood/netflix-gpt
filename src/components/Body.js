import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './Login';
import Browse from './Browse';

import  VideoPlaying  from './VideoPlaying';
import Error from './Error';
const Body = () => {

   
const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<Login />,
        errorElement:<Error />
        
          
    },
    {
        path:"/browse",
        element:<Browse />,   
       
    },
    {
        path:'/watch',
        element:<VideoPlaying />,
        errorElement:<Error />

    }
   
])


  

    return (
        <div>
           
            <RouterProvider router={appRoute} />
        </div>
    )
}
export default Body;
