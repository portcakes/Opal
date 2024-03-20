'use client'
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className='bg-pink-700 border-b border-pink-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* mobile menu button */}
                        <button type='button' id='mobile-dropdown-button' className='relative inline-flex items-center justify-center p-2 rounded-md text-white'  aria-controls='mobile-menu' aria-expanded='false' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                            <span className='absolute -inset-0.5'></span>
                            <span className='sr-only'>Open main menu</span>
                            <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                        </button>
                    </div>

                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className='flex-shrink-0 flex items-center'>
                                <Link href='/'>
                                    <h1 className='text-white text-2xl font-bold'>Opal</h1>
                                </Link>
                            </div>
                        </div>
                        {/* menu */}
                        <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4'>
                                <Link href='/' className='text-white hover:text-pink-300'>Home</Link>
                                <Link href='/about' className='text-white hover:text-yellow-100'>About</Link>
                                <Link href='#' className='text-white hover:text-yellow-100'>Contact</Link>
                                <Link href='#' className='text-white hover:text-cyan-200'>Login</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className=''>
                    {/* mobile menu */}
                {isMobileMenuOpen && (
                    <div className='sm:hidden justify-start' id='mobile-menu'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            <div className='flex flex-col'>
                                <Link href='/' className='text-white bg-pink-400 rounded-md px-3 py-2 text-base hover:bg-cyan-500'>Home</Link>
                                <Link href='/about' className='text-white px-3 py-2 text-base hover:bg-pink-500 hover:rounded-md'>About</Link>
                                <Link href='#' className='text-white px-3 py-2 text-base hover:bg-pink-600 hover:rounded-md'>Contact</Link>
                                <Link href='/login' className='text-white px-3 py-2 text-base hover:bg-pink-800 hover:rounded-md'>Login</Link>
                            </div>
                            
                        </div>
                    </div>
                    )
                }
            </div>
            
        {/* <div className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
                <Link href='/' className='text-white'>Home</Link>
                <Link href='/about' className='text-white'>About</Link>
                <Link href='#' className='text-white'>Contact</Link>
                <Link href='#' className='text-white'>Login</Link>
            </div>
        </div> */}

        {/* <div className='container mx-auto p-4 flex justify-between items-center'>
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
            <li>
                <Link href='#' className='text-white'>Login</Link>
            </li>
            </ul>
        </div> */}
        </nav>
    )
}

export default Navbar