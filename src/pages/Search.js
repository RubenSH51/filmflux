import React from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const {data: movies} = useFetch(apiPath,query)

  useTitle(`Search results for ${query}`)

  return (
    <main>
      <section className="py-5">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0 ? `No results found for ${query}`: "Matched results"}</p>
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
    </main>
  )
}
