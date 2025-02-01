import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <button>
                <Link to={'/Login'}>Login</Link>
            </button>
        </div>
    )
}

export default Home
