//Individual component for showing the movie
import React from "react";
import { useParams } from "react-router-dom";

//config (We need the image url and image size from our config folder)
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo"

//Hook
import { useMovieFetch } from "../Hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg";



const Movie =()=> {
    const {movieId} = useParams();
    const {state:movie, loading, error} = useMovieFetch(movieId);

    if(!loading) return <Spinner />;
    if(!error) return <div>Something went wrong...</div>;

    return(
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
        </>
    );
};
//console.log(Movie)

export default Movie;