import React, { useRef, useState } from 'react'
import Header from './Header';
import { BACKGROUND_IMG, PHOTO_URL } from '../utils/constant';
import { checkValidData, checkValidDat } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";

import { auth } from "../utils/firebase"
import {useNavigate} from "react-router-dom"
import { addUser } from '../utils/userSlice';

import {useDispatch} from "react-redux"
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const navigate=useNavigate();
    const dispatch=useDispatch()

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);

    }

    const handleButtonClick = () => {
        if (isSignInForm) {
            const message = checkValidData(email.current.value, password.current.value);
            setErrorMessage(message);
            if (message) return;
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    
                    
                    
                //    console.log(user);
                //    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);

                });
        }
        else {
            const message = checkValidDat(name.current.value, email.current.value, password.current.value);
            setErrorMessage(message);
            if (message) return;
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: PHOTO_URL
                      }).then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))

                        // navigate("/browse");
                        // Profile updated!
                        // ...
                      }).catch((error) => {
                        setErrorMessage(error.message)
                        // An error occurred
                        // ...
                      });
                    // console.log(user);
                  

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage);

                });

        }
        // const nameMessage=checkValidName(name.current.value);
        // setNameError(nameMessage);


    }
    return (
        <div >
            <Header />
            <div className='absolute '>
                <img src={BACKGROUND_IMG} alt='bg-img' />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className='absolute bg-black  p-12 w-4/12 mx-auto my-32 right-0 left-0 text-white rounded-lg bg-opacity-75'>
                <h1 className='p-2 m-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input ref={name} type='text' placeholder='Fullname' className='p-2 m-2 w-full bg-gray-600 rounded-lg' ></input>}

                <input ref={email}
                    type='text' placeholder='Email'
                    className='p-2 m-2 w-full bg-gray-600 rounded-lg' >
                </input>

                <input ref={password}
                    type='password' placeholder='password'
                    className='p-2 m-2 w-full bg-gray-600 rounded-lg'>
                </input>
                <p className='text-red-600'>{errorMessage}</p>
                <button className='p-2 m-2 bg-red-600 w-full rounded-lg'
                    onClick={handleButtonClick}>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>

                <p className='text-sm p-2 m-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already a user, Sign In now'}</p>
            </form>
        </div>
    )
}

export default Login;
