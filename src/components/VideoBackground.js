import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utlis/constant'

const VideoBackground = ({ id }) => {


    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/939243/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);

        const trailerFilter = json.results.filter((video) => video.type === "Trailer");
        const trailers = trailerFilter.length ? trailerFilter[0] : json.results[0];
        console.log(trailers)
    }
    useEffect(() => {
        getMovieVideos();
    }, [])
    return (
        <div>
            <iframe src="https://www.youtube.com/embed/" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground
