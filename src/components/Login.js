import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utlis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utlis/userSlice';
import { useDispatch } from 'react-redux';
import { BACKGROUND_IMG, USER_PHOTO } from '../utlis/constant';

const Login = ({ isSignIn, setIsSignIn }) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // const toggleSignInForm = () => {
    //     setIsSignIn(!isSignIn);
    //     setErrors({});
    // }

    // Login Validation
    const handleButtonClick = () => {
        // console.log(email.current.value)
        // console.log(Password.current.value)
        const emailValue = email.current?.value;
        const passwordValue = password.current?.value;
        const validateMessage = checkValidate(emailValue, passwordValue)

        // Check if there are validation errors
        if (validateMessage && Object.keys(validateMessage).length > 0) {
            setErrors(validateMessage);
            return; // Stop execution if validation fails
        }

        setErrors({}); // Clear errors if validation passes

        if (!isSignIn) {
            // SignUp Logic
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // Update As soon as Signup
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_PHOTO
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser(
                            {
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }
                        ));
                        navigate('/browse');
                    }).catch((error) => {
                        // An error occurred
                        setErrors(validateMessage)
                    });
                    // Update As soon as Signup
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrors(errorCode + ' ' + errorMessage)
                });

        } else {
            // SignIn
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrors(errorCode + " - " + errorMessage)
                });
        }
    }

    return (
        <div>
            <Header isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
            <div>
                <div>
                    <img className='object-cover object-center w-full h-screen'
                        src={BACKGROUND_IMG} alt="bg-img" />
                </div>
                <div className='absolute top-1/2 left-1/2 translate-top -translate-x-1/2 -translate-y-1/2 px-11 py-14 bg-black w-3/12 rounded-lg'>
                    <form className='flex flex-col text-white' onSubmit={(e) => { e.preventDefault() }}>
                        <h1 className='font-bold text-white text-3xl pb-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                        {!isSignIn && <input ref={name} className='px-4 py-4 my-4 outline-none bg-transparent rounded-md border border-gray-400' type="text" placeholder='Full Name' />}

                        <input ref={email} className='px-4 py-4 my-4 outline-none bg-transparent rounded-md border border-gray-400' type="text" placeholder='Email Address' />
                        <p className='text-red-600'>{errors.email}</p>

                        <input ref={password} className='px-4 py-4 my-4 outline-none bg-transparent rounded-md border border-gray-400' type="password" placeholder='Password' />
                        <p className='text-red-600'>{errors.password}</p>

                        <button onClick={handleButtonClick} className='w-full py-2 px-8 my-4 bg-red-600 text-white font-semibold rounded-md'>
                            {isSignIn ? 'Sign In' : 'Sign Up'}
                        </button>

                        <p className='text-gray-400 pt-4'>{isSignIn ? 'New to Netflix?' : 'Aready Registerd'}
                            <span onClick={() => setIsSignIn(!isSignIn)} className='cursor-pointer font-bold text-white  text-md ml-1'>{isSignIn ? 'Sign Up now' : 'Sign In now'}</span>
                        </p>
                    </form>
                </div>
            </div>
        </div >

    )
}

export default Login
