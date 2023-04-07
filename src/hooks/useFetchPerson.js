import React, { useState, useEffect } from 'react'

export const useFetchPerson = (person_id) => { //Custom hook
    const [data,setData] = useState([]); 

    const url = `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  
    useEffect(()=> {
        async function fetchMovies() 
        {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.cast)
            //setData(json.results[0])
        }
        fetchMovies()
        }, [url])   


    return {data}
}
