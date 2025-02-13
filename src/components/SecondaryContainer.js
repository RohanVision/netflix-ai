import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movies)
    return (
        <div className='bg-black'>
            {movies.nowPlayingMovies && (
                <div className='relative -mt-56 z-10'>
                    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                    <MovieList title={"Popular"} movies={movies?.popularMovies} />
                    <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                </div>
            )
            }
        </div>
    )
}

export default SecondaryContainer
