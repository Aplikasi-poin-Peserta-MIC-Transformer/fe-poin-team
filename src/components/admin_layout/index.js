import React from 'react'
import { useOutlet } from "react-router-dom"
import Sidebar from './sidebar'
import Navbar from './navbar'
import menu from '../../sidebar.json'
import '../../styles/layout.css'

const Layout = () => {
  const outlet = useOutlet();
  return (
    <>
      <div className="main">
        {/* navbar disini */}
        <div className="page-wrapper">
          <Sidebar menuItems={menu} autoActiveMenu />
          <div className="content-dashboard">
            <div className="main-content">
              <Navbar />
              <div className='dashboard-content' style={{ padding: "1rem" }}>
                {outlet}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout