import React, { useState, useEffect } from 'react'

export const useFetch = (apiPath, query="", genres="",page="1") => { //Custom hook
    const [data,setData] = useState([]); 
    //const API_KEY = '8df32093a2bc91dd41568c23ba71135a'
    const url_base = 'https://api.themoviedb.org/3/'

    const url = `${url_base}/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&sort_by=popularity.desc&with_genres=${genres}&page=${page}`
    // console.log('la url es: '+url)
     // `https://api.themoviedb.org/3/person/31/movie_credits?api_key=${apiKey}&language=en-US`;

    useEffect(()=> {
        async function fetchMovies() 
        {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results)
        }
        fetchMovies()
        }, [url])   

    return {data}
}
