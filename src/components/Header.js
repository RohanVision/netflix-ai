import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utlis/userSlice";
import { LOGO_URL } from "../utlis/constant";

const Header = ({ isSignIn, setIsSignIn }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/errorPage')
        });
    }

    const handleClick = () => {
        setIsSignIn(!isSignIn);
    }

    useEffect(() => {
        const unubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser(
                    {
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/login");
            }
        });
        return () => unubscribe();
    }, [])

    return (
        <div className='absolute w-full px-52 py-2 bg-gradient-to-b from-black z-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <img className='w-48' src={LOGO_URL} alt="Netflix-logo" />
                </div>
                <div className="flex gap-2">
                    {!user && <button onClick={handleClick}
                        className='text-white text-sm px-6 py-2 rounded-md bg-red-600 hover:bg-red-700 transition delay-150 duration-300 ease-in-out'>{isSignIn ? 'Sign Up' : 'Sign In'}</button>}
                    {user && <div className="flex gap-2">
                        <img className="w-9 h-9" src={user?.photoURL} alt="userIcon" />
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Header
