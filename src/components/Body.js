import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import { auth } from '../utils/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
const Body = () => {

    const dispatch=useDispatch();
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
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    
    
          
        } else {
            dispatch(removeUser());
          // User is signed out
          // ...
        }
      });

},[])

  

    return (
        <div>
           
            <RouterProvider router={appRoute} />
        </div>
    )
}
export default Body;
