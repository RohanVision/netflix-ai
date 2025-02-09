import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({ movieId }) => {
    const nowPlayingTrailer = useSelector((store) => store.movies?.nowPlayingTrailer);

    useMovieTrailer(movieId)

    return (
        <div className='w-full'>
            <iframe className='w-full aspect-video'
                src={"https://www.youtube.com/embed/" + nowPlayingTrailer?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="autoPlay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    )
}

export default VideoBackground
