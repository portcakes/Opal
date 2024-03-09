import React from 'react'
import Link from 'next/link';

export const metadata = {
    title: 'Opal | About Opal',
    description: 'All about Opal: A simple, yet powerful task manager.',
}

const AboutPage = () => {
  return (
    <div>
        <h1 className="text-3xl">About Opal</h1>
        <Link href="/">Return</Link>
    </div>
  )
}

export default AboutPage