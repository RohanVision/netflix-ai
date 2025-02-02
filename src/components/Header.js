

const Header = ({ isSignIn, setIsSignIn }) => {
    const handleClick = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <div className='absolute w-full px-52 py-2 bg-gradient-to-b from-black z-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <img className='w-48' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7b21-92dd-d4d4b93ad8a6/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix-logo" />
                </div>
                <div className="flex gap-2">
                    <button onClick={handleClick}
                        className='text-white text-sm px-6 py-2 rounded-md bg-red-600 hover:bg-red-700 transition delay-150 duration-300 ease-in-out'>{isSignIn ? 'Sign Up' : 'Sign In'}</button>
                    <div>
                        <img className="w-9 h-9" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="userIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
