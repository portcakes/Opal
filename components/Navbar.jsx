import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-pink-700 border-b border-pink-500'>
        <div className='container mx-auto p-4 flex justify-between items-center'>
            <h1 className='text-white text-2xl font-bold'>Opal </h1>
            <ul className='flex space-x-4'>
            <li>
                <Link href='/' className='text-white'>Home</Link>
            </li>
            <li>
                <Link href='/about' className='text-white'>About</Link>
            </li>
            <li>
                <Link href='#' className='text-white'>Contact</Link>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar