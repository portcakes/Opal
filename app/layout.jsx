import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Opal | Organized Chaos',
    description: 'Organize your chaos with Opal. A simple, yet powerful task manager.',
    keywords: 'task, task manager, todo, todo list, list, organize, chaos, opal, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, opal todo, opal list, opal task, opal organize, opal chaos, opal organized chaos, opal organized, opal chaos, opal app, opal task manager, opal todo list, op',
}


const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div>
                {children}
            </div>
        </body>
    </html>
    
  )
}

export default MainLayout;