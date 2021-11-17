import { useState, useEffect, useRef } from "react";
import API from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [state, setState] = useState();  //state holding all the movies
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); // State for holding incase we get errors from our API
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    console.log(searchTerm)


    const fetchMovies = async (page, searchTerm = "") =>{
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            // console.log(movies)

            setState(prev =>({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results]:[...movies.results]
            }))
        }catch(error){
            setError(true);
        }

        setLoading(false)

    }

    //Initial and search
    useEffect(()=>{
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm])

    //For the Load More Button
    useEffect(()=> {
        if(!isLoadingMore) return;

        fetchMovies(state.page +1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page])

    return {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore}

}