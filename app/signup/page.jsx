import React from 'react'
import Link from 'next/link'

const SignUpPage = () => {
  return (
    <div>
        <div className='flex-1 flex items-center justify-center mt-6'>
            <h1 className='text-pink-400 flex items-center'>Sign Up</h1>
        </div>
        
        <div className='flex space-x-4'>

        
            <Link href="/login">Login</Link>
            <Link href="/">Return</Link>
        
        </div>
    </div>
    
  )
}

export default SignUpPage