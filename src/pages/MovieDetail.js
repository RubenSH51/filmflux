import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import backupimage from "../assets/backupimage.png"

export const MovieDetail = (apiPath) => {

  const params = useParams(); //Con esto se captura el ID. En allRoutes se ve como ya tenemos el id
  console.log(params)

  const [data, setData] = useState({});
  const pirateBaseUrl = "https://thepiratebay10.org/search/"

  useEffect(() => {
    async function fetchMovie()
    {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
        const json = await response.json();
        setData(json)
        console.log(json)
    }
    fetchMovie();
  }, [])

  useEffect(() => {
    document.title = `${data.title} / FilmFlux`
  })

  const image = data.poster_path ?`https://image.tmdb.org/t/p/w500/${data.poster_path}` : backupimage;

  return (
    <main className="flex justify-between max-md:flex-col max-md:items-center">
      <section id="MovieDetailImage" className='w-1/3 max-md:w-5/6 flex max-md:justify-center'>
          <img src={image} className='rounded-lg'/>
      </section>

      <section id="MovieDetailDescription" className='w-1/2 max-md:w-5/6 flex flex-col sm:text-left'>
        <h2 className='dark:text-white font-bold text-3xl my-8'>{data.title}</h2>
        <p className='dark:text-white  text-lg my-4'>{data.overview}</p>
        <p className='dark:text-white  text-lg my-4 flex gap-4 justify-center'>
        {data.genres && data.genres.map((genero) => (
          <span key={genero.id} className="border-2 border-gray-500 border-solid p-4 rounded">{genero.name}</span>
        ))} 
        </p>
        <span className='dark:text-white  text-lg my-1'>🌟 {data.vote_average} - {data.vote_count} reviews</span>
        <p className='dark:text-white text-lg my-1'><b>Runtime</b>: {data.runtime} minutes</p>
        <p className='dark:text-white text-lg my-1'><b>Release date</b>: {data.release_date}</p>
        <p className='dark:text-white text-lg my-1'><b>Budget</b>: {data.budget===0 ? "unknown": `${data.budget/1000000}M`}</p>
        <p className='dark:text-white text-lg my-1'><b>Revenue</b>: {data.revenue===0 ? "unknown": `${data.revenue/1000000}M`}</p>
        <p className='dark:text-white text-lg my-1'><b>IMDB id</b>: 🔗<a className='hover:text-gray-700'  href={`https://www.imdb.com/title/${data.imdb_id}`} target='_blank'> {data.imdb_id}</a></p>
        <p className='dark:text-white text-lg my-1'><b>Pirate Search</b>: <span role="img"><a href={`${pirateBaseUrl}${data.title && data.title.replaceAll(' ','%20')}`} target="_blank">🏴‍☠️</a></span></p>
        <p className='dark:text-white text-lg my-1'><b>Popularity</b>: {data.popularity}</p>
      </section>

    </main>
  )
}
