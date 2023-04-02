import React, { useEffect } from 'react'
import  notFound  from '../assets/pageNotFound.webp'
import { Link, NavLink , useNavigate} from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'

export const PageNotFound = ({title}) => {

  useTitle(title)

  return (
    <main>
      <section className="flex flex-col items-center justify-center px-2">
        <div className="flex flex-col items-center mb-2 max-w-4xl">
          <p className='text-7xl text-gray-700 font-bold dark:text-white my-4' >Page not found</p>
          <img src={notFound} className='max-w-md'/>
        </div>
        
        <div className='flex justify-center my-4'>
          <Link to='/filmflux'>
            <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Back to Cinemate</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
