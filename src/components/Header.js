import React, { useEffect, useState } from 'react'
import { LOGO, SUPPORT_LANGUAGES } from '../utils/constant';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from "react-redux";
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const {showGptsearchView}=useSelector(store=>store.gpt);
    
    
   
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });
          
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            
            
            
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
    const handleGptSearchClick=()=>{

      dispatch(toggleGptSearchView());
      // console.log("gpt button clicked");
    }
    const handleLanguage=(e)=>{
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className=' absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-10 flex flex-col justify-between md:flex-row '>
            <img className='w-44 mx-auto md:mx-0'  src={LOGO} alt="logo"/>
            {user && 
            <div className='flex p-2 m-2 justify-between'>
            {showGptsearchView&&
            <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguage}>
            {SUPPORT_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              
            </select>
            }
            <button className='bg-purple-800 rounded-lg py-2 px-4' 
            onClick={handleGptSearchClick}>
            {!showGptsearchView? 'Gpt Search':'Homepage'}
            </button>
                <img className='w-8 h-8 hidden md:block'
                 src={user?.photoURL} 
                 alt="user-icon"></img>
                <button className='text-white' onClick={handleSignOut}>Sign Out</button>
            </div>}
            
        </div>
        
    )
}
export default Header;
