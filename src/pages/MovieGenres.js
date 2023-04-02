import React, { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { Link, NavLink , useNavigate} from 'react-router-dom'

export const MovieGenres = ({apiPath, query='',genres, title}) => {
    const [page, setPage] = useState('1')
    let {data: movies} = useFetch(apiPath,query='', genres=searchMoviesByGenres(),page)
    const [generos, setGeneros] = useState([])
    
    
    function searchMoviesByGenres()
    {
        let listaGeneros = []
        let checkboxes = document.querySelectorAll('#genresList input')
        for (let i = 0; i < checkboxes.length; i++) 
        {
            if(checkboxes[i].checked)
            {
                listaGeneros.push(checkboxes[i].value);
            }
        }
    
        let genres = listaGeneros.join()
        // console.log(genres)
        return genres
        
    }

    function updateGenres(e)
    {
        setGeneros([...generos], e.target.value)
        setPage('1')
        console.log(generos)
    }

    useEffect(() => {
        document.title = `${title} / FilmFlux`
      })

    function testing()
    {
        
        setPage((Number(page)+1).toString())
        console.log(page)
    }

    return (
        <main >
            
            <section className=''> 
                <h3 className="pt-4 font-semibold text-gray-900 dark:text-white dark:bg-gray-900 text-3xl">Search for genres</h3>
                <ul id="genresList" className="bg-gray-300 py-4 px-1 dark:bg-gray-900 gap-2 justify-center items-center flex flex-wrap w-full text-sm font-medium text-gray-900 bg-white  -lg sm:flex dark:bg-gray-700 dark:-gray-600 dark:text-white">
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Action" type="checkbox" value="28" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Action" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Action</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Adventure" type="checkbox" value="12" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Adventure" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adventure</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Animation" type="checkbox" value="16" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Animation" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Animation</label>
                        </div>
                    </li>
                    <li className="w-40 dark:-gray-600">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Comedy" type="checkbox" value="35" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Comedy" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comedy</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Crime" type="checkbox" value="80" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Crime" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crime</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Documentary" type="checkbox" value="99" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Documentary" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Documentary</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Drama" type="checkbox" value="18" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Drama" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Drama</label>
                        </div>
                    </li>
                    <li className="w-40 dark:-gray-600">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Family" type="checkbox" value="10751" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Family" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Family</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Fantasy" type="checkbox" value="14" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Fantasy" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fantasy</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-History" type="checkbox" value="36" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-History" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">History</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Horror" type="checkbox" value="27" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Horror" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Horror</label>
                        </div>
                    </li>
                    <li className="w-40 dark:-gray-600">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Music" type="checkbox" value="10402" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Music" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Music</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Mistery" type="checkbox" value="9648" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Mistery" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mystery</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Romance" type="checkbox"  value="10749" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Romance" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Romance</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-SciFi" type="checkbox" value="878" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-SciFi" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sci-Fi</label>
                        </div>
                    </li>
                    <li className="w-40 dark:-gray-600">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-TVMovie" type="checkbox" value="10770" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-TVMovie" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">TV Movie</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Thriller" type="checkbox" value="53" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Thriller" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thriller</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-War" type="checkbox" value="10752" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-War" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">War</label>
                        </div>
                    </li>
                    <li className="w-40  ">
                        <div className="flex items-center pl-3 dark:bg-gray-800">
                            <input onChange={(e) => updateGenres(e)} id="genre-Western" type="checkbox" value="37" className="w-4 h-4 text-blue-600 bg-gray-100 -gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:-gray-500"/>
                            <label htmlFor="genre-Western" className="w-24 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Western</label>
                        </div>
                    </li>

                </ul>
            </section>

            <section className="max-w-7xl mx-auto py-y">
                <div className="flex justify-center flex-wrap ">
                    {movies.map((movie) => (
                        <Card 
                        key={movie.id}
                        movie={movie}
                        />
                    ))}

                </div>
            </section>
            <button type="button" onClick={() => testing()} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next Page</button>

    </main>
)
}
