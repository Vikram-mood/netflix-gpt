import React, { useEffect, useState } from 'react'
import { LOGO } from '../utils/constant';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from "react-redux";
const Header = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const [count,setCount]=useState(0);
   
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });
          
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            
            // console.log("useEffect called "+ count);
            setCount(count+1);
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate("/browse");
        
        
              
            } else {
                dispatch(removeUser());
                navigate("/")
              // User is signed out
              // ...
            }
          });

          return unsubscribe;
    
    },[])
    return (
        <div className=' absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44 '  src={LOGO} alt="logo"/>
            {user && <div className='flex p-2 m-2'>
                <img className='w-8 h-8'
                 src={user?.photoURL} 
                 alt="user-icon"></img>
                <button className='text-white' onClick={handleSignOut}>Sign Out</button>
            </div>}
            
        </div>
        
    )
}
export default Header;
