import React from 'react'
import { Link } from 'react-router-dom'
import backupimage from "../assets/backupimage.png"

export const Card = ({movie}) => {
    const {id,title,poster_path,backdrop_path,overview,popularity,genre_ids,release_date,vote_average,vote_count} = movie;
    const image = poster_path ?`https://image.tmdb.org/t/p/w500/${poster_path}` : backupimage;

  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/movie/${id}`} className='relative'>
            <img className="rounded-t-lg hover:opacity-70 transition ease-in-out delay-50" src={image} alt="" />
            <span className='absolute top-1 right-0 text-white text-5xl font-bold'>⭐</span>
            <span id="puntuacionFlotante" className={`absolute top-4 right-4 ${Number(vote_average) < 5 ? "text-red-900" : "text-blue-900"} text-xl font-bold`}>{(Number(vote_average).toFixed(1)).toString()   }</span>
        </Link>
        <div className="p-5">
            <Link to={`/movie/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        </div>
    </div>

  )
}
