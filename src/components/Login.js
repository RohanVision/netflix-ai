import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utlis/validate';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState();
    const [errors, setErrors] = useState({})
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
        setErrors({});
    }

    // Login Validation
    const handleButtonClick = () => {
        // console.log(email.current.value)
        // console.log(Password.current.value)
        const emailValue = email.current?.value || '';
        const passwordValue = password.current?.value || '';

        const validateMessage = checkValidate(emailValue, passwordValue)

        setErrors(validateMessage);
    }

    return (
        <div>
            <Header />
            <div>
                <div>
                    <img className='object-cover object-center w-full h-screen'
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/CA-en-20250120-TRIFECTA-perspective_1ea750e2-25c0-4073-971e-5179e54d8b41_large.jpg" alt="bg-img" />
                </div>
                <div className='absolute top-1/2 left-1/2 translate-top -translate-x-1/2 -translate-y-1/2 px-11 py-14 bg-black w-3/12 rounded-lg'>
                    <form className='flex flex-col text-white' onSubmit={(e) => { e.preventDefault() }}>
                        <h1 className='font-bold text-white text-3xl pb-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                        {!isSignIn && <input className='px-4 py-4 my-4 outline-none bg-transparent rounded-md border border-gray-400' type="text" placeholder='Full Name' />}

                        <input ref={email} className='px-4 py-4 my-4 outline-none bg-transparent rounded-md border border-gray-400' type="text" placeholder='Email Address' />
                        <p className='text-red-600'>{errors.email}</p>

                        <input ref={password} className='px-4 py-4 my-4 outline-none bg-transparent rounded-md border border-gray-400' type="password" placeholder='Password' />
                        <p className='text-red-600'>{errors.password}</p>

                        <button onClick={handleButtonClick} className='w-full py-2 px-8 my-4 bg-red-600 text-white font-semibold rounded-md'>
                            {isSignIn ? 'Sign In' : 'Sign Up'}
                        </button>

                        <p className='text-gray-400 pt-4'>{isSignIn ? 'New to Netflix?' : 'Aready Registerd'}
                            <span onClick={toggleSignInForm} className='cursor-pointer font-bold text-white  text-md ml-1'>{isSignIn ? 'Sign Up now' : 'Sign In now'}</span>
                        </p>
                    </form>
                </div>


            </div>
        </div >

    )
}

export default Login
