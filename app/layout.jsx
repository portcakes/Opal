import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'Opal | Organized Chaos',
    description: 'Organize your chaos with Opal. A simple, yet powerful task manager.',
    keywords: 'task, task manager, todo, todo list, list, organize, chaos, opal, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, op',
}


const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
        <body>
            <Navbar />
            <main>
                {children}
            </main>
        </body>
    </html>
    
  )
}

export default MainLayout;