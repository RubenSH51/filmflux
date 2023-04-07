import { Routes, Route }  from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search, MovieGenres, TermsAndConditions, PrivacyPolicy} from "../pages"

import React from 'react'
import { MoviesActor } from "../pages/MoviesActor"


export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            {/* <Route path="/" element={<MovieList  title="Home" apiPath="movie/now_playing"/>} /> */}
            <Route path="/" element={<MovieList  title="Home" apiPath="movie/now_playing"/>} />
            <Route path="filmflux" element={<MovieList  title="Home" apiPath="movie/now_playing"/>} />
            <Route path="movie/:id" element={<MovieDetail  apiPath="movie/:id" />} />
            <Route path="movies/popular" element={<MovieList title="Popular" apiPath="movie/popular" />} />
            <Route path="movies/top" element={<MovieList title="Top Rated" apiPath="movie/top_rated" />} />
            <Route path="movies/upcoming" element={<MovieList title="Upcoming" apiPath="movie/upcoming" />} />
            <Route path="discover/movie" element={<MovieGenres title="Genres" apiPath="discover/movie" genres />} />
            <Route path="search/person" element={<MoviesActor title="Person" apiPath="search/person" />} />
            <Route path="search" element={<Search apiPath="search/movie"/>} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<PageNotFound title="Page Not Found"/>} />
        </Routes>
    </div>
  )
}
