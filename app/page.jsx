import React from 'react'
import Link from 'next/link';

export const metadata = {
    title: 'Opal | Organized Chaos',
    description: 'Organize your chaos with Opal. A simple, yet powerful task manager.',
}
const HomePage = () => {
  return (
    <div>
        <h1 className="text-3xl">Welcome to Opal</h1>
        <Link href="/about">About Opal</Link>
        <br />
        <Link href="/"><i className="bi bi-yin-yang text-purple-500"></i></Link>
    </div>
  )
}

export default HomePage