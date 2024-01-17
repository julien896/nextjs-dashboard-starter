import React from 'react'
import Sidebar from './_components/sidebar/sidebar'
import Navbar from './_components/navbar/navbar'

const Layout = ({ children }) => {
  return (
    <div>
        <div>
            <Sidebar />
        </div>
        <div>
            <Navbar />

            {children}
        </div>
    </div>
  )
}

export default Layout