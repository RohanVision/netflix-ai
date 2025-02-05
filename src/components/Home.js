import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center h-screen">
                <button className='text-white text-lg px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 transition delay-150 duration-300 ease-in-out'>
                    <Link to="/Login">Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Home
