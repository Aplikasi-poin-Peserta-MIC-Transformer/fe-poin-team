import React from 'react'
import { useNavigate } from "react-router-dom"
import '../styles/home.css'
import mic_logo from '../assets/logo-mic.png'
import logo1 from '../assets/logo1.png'

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='header-wrapper'>
                <div className='header-container'>
                    <img src={mic_logo} alt='' className='mic-logo'/>
                    <img src={logo1} alt='' className='logo-1'/>
                    <h1>WE ARE ONE FIRE</h1>
                    <h3>FAMILY DAY</h3>
                </div>
            </div>
            <div className='content-wrapper'>
                <button
                    className='button-primary'
                    onClick={() => navigate('/login')}
                >
                    START
                </button>
            </div>
        </>
    )
}

export default Home