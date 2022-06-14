import React from 'react'
import { useOutlet, useNavigate, useLocation } from "react-router-dom"
import mic_logo from '../assets/logo-mic.png'
import logo1 from '../assets/logo1.png'
import { useAuthContext } from '../context/authContext'
import '../styles/layout.css'

const Layout = () => {
    const { logout } = useAuthContext();
    const { pathname } = useLocation();
    const outlet = useOutlet();
    const navigate = useNavigate();

    const navigateBtn = () => {
        if (pathname === '/dashboard') {
            logout();
        } else {
            navigate(-1)
        }
    }
    return (
        <>
            <div className='private-header-wrapper'>
                <div className='private-header-container'>
                    <div className='top-header-content'>
                        <button onClick={navigateBtn}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>
                            {pathname === '/dashboard' ? ' Keluar' : ''}
                        </button>
                        <img src={mic_logo} alt='' className='mic-logo' />
                    </div>
                    <img src={logo1} alt='' className='logo-1' />
                    <h1>WE ARE ONE FIRE</h1>
                    <h3>FAMILY DAY</h3>
                </div>
            </div>
                {outlet}
        </>
    )
}

export default Layout