import React from 'react'
import From from './From'

const LeftSide = () => {
  return (
    <div className='w-1/2 bg-black flex flex-col bg-opacity-50 px-14  py-10 text-gray-500'>
        <nav className='flex flex-row items-center justify-items-start justify-between text-xl'>
                <div className='flex items-center gap-2'>
                    <div className='bg-sky-600 w-8 h-8 rounded-full'></div>
                    <span className='text-white font-bold'>Doddy MATABARO</span>
                </div>
                <ul className='list-none flex flex-row justify-evenly gap-40'>
                    <li className='hover:text-red-400'><a href='' className=''>Home</a></li>
                    <li className='hover:text-red-400'><a href=''>Join</a></li>
                </ul>
        </nav>
        <From/>
    </div>
  )
}

export default LeftSide