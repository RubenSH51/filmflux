// import React, { useState, useEffect } from 'react'
// import { Card } from '../components/Card'
// import { useFetch } from '../hooks/useFetch';
// import { Link, NavLink , useNavigate} from 'react-router-dom'

// export const Genres = ({apiPath, genres}) => {
//     let {data: movies} = useFetch(apiPath)
    
//     function searchMoviesByGenres()
//     {
//         let listaGeneros = []
//         let checkboxes = document.querySelectorAll('#genresList input')
//         for (let i = 0; i < checkboxes.length; i++) 
//         {
//             if(checkboxes[i].checked)
//             {
//                 listaGeneros.push(checkboxes[i].value);
//             }
//         }
    
//         let genres = listaGeneros.join()
//         console.log(genres)
//         return genres
        
//         //useFetch(apiPath,genres)
        
//     }

//     return (
//         <main>

//             <section>
//                 <h3 className=" font-semibold text-gray-900 dark:text-white dark:bg-gray-900">Search for genres</h3>
//                 <ul id="genresList" className="dark:bg-gray-900 justify-center items-center flex flex-wrap w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 -lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="vue-checkbox-list" type="checkbox" value="28" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Action</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="react-checkbox-list" type="checkbox" value="12" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="react-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adventure</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="angular-checkbox-list" type="checkbox" value="16" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="angular-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Animation</label>
//                         </div>
//                     </li>
//                     <li className="w-44 dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="laravel-checkbox-list" type="checkbox" value="35" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comedy</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="vue-checkbox-list" type="checkbox" value="80" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crime</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="react-checkbox-list" type="checkbox" value="99" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="react-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Documentary</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="angular-checkbox-list" type="checkbox" value="18" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="angular-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Drama</label>
//                         </div>
//                     </li>
//                     <li className="w-44 dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="laravel-checkbox-list" type="checkbox" value="10751" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Family</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="vue-checkbox-list" type="checkbox" value="14" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fantasy</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="react-checkbox-list" type="checkbox" value="36" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="react-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">History</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="angular-checkbox-list" type="checkbox" value="27" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="angular-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Horror</label>
//                         </div>
//                     </li>
//                     <li className="w-44 dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="laravel-checkbox-list" type="checkbox" value="10402" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Music</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="vue-checkbox-list" type="checkbox" value="9648" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mystery</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="react-checkbox-list" type="checkbox" value="10749" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="react-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Romance</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="angular-checkbox-list" type="checkbox" value="878" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="angular-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sci-Fi</label>
//                         </div>
//                     </li>
//                     <li className="w-44 dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="laravel-checkbox-list" type="checkbox" value="10770" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">TV Movie</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="vue-checkbox-list" type="checkbox" value="53" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thriller</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="react-checkbox-list" type="checkbox" value="10752" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="react-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">War</label>
//                         </div>
//                     </li>
//                     <li className="w-44 border border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="angular-checkbox-list" type="checkbox" value="37" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="angular-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Western</label>
//                         </div>
//                     </li>
//                     <li className="w-44 dark:border-gray-600">
//                         <div className="flex items-center pl-3">
//                             <input id="laravel-checkbox-list" type="checkbox" value="37" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Western</label>
//                         </div>
//                     </li>
//                 </ul>
//             </section>

//             <NavLink to="/discover/movie" genres={searchMoviesByGenres()} className="text-white my-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Search movies</NavLink>

//             <section className="max-w-7xl mx-auto py-y">
//                 <div className="flex justify-center flex-wrap ">
//                     {movies.map((movie) => (
//                         <Card 
//                         key={movie.id}
//                         movie={movie}
//                         />
//                     ))}

//                 </div>
//             </section>
//     </main>
// )
// }
