import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-4'>
            <h1 className='text-2xl my-2 font-semibold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                {movies?.map((movie) => {
                    return <MovieCard key={movie.id} posterPath={movie.poster_path} movieAlt={movie.title} />
                })}
            </div>
        </div>
    )
}

export default MovieList
