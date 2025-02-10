import React from 'react'
import { IMG_CDN_URL } from '../utlis/constant'

const MovieCard = ({ posterPath, movieAlt }) => {
    return (
        <div className='pr-2'>
            <img className='min-w-52 hover:scale-150 transition-all duration-500 
                ease-out' src={IMG_CDN_URL + posterPath} alt={movieAlt} />
        </div>
    )
}

export default MovieCard
