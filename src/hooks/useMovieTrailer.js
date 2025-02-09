import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utlis/movieSlice";
import { API_OPTIONS } from "../utlis/constant";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        const trailerFilter = json.results.filter((video) => video.type === "Trailer");
        const trailers = trailerFilter.length ? trailerFilter[0] : json.results[0];
        // console.log(trailers);
        dispatch(addTrailerVideo(trailers))
    }

    useEffect(() => {
        getMovieVideos();
    }, []);

}

export default useMovieTrailer;