import React from 'react'
import { LOGO } from '../utils/constant';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";

import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
const Header = () => {

    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
   
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });
          
    }
    return (
        <div className=' absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44 '  src={LOGO} alt="logo"/>
            {user && <div className='flex p-2 m-2'>
                <img className='w-8 h-8'
                 src={user?.photoURL} 
                 alt="user-icon"></img>
                <button className='text-white ' onClick={handleSignOut}>Sign Out</button>
            </div>}
            
        </div>
        
    )
}
export default Header;
