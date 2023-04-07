import React, { useState} from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';


export const MovieList = ({apiPath, title}) => {


  const [page, setPage] = useState('1')
  const {data: movies} = useFetch(apiPath, "", "", page);
  

  useTitle(title)


  return (
    <main>
      <section className="max-w-7xl mx-auto py-y">
        <div className="flex justify-center flex-wrap ">
          {movies.map((movie) => (
            <Card 
              key={movie.id}
              movie={movie}
            />
          ))}

        </div>
        <div>
        <button type="button" onClick={() => setPage((Number(page)+1).toString())} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next Page</button>

        </div>
      </section>
    </main>
  )
}
