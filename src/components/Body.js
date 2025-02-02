import React, { useEffect, useState } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utlis/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utlis/userSlice'
import Home from './Home'

const Body = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser(
                    {
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    }
                ));
            } else {
                dispatch(removeUser());
            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
