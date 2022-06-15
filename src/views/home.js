import React from 'react'
import { useNavigate } from "react-router-dom"
import '../styles/home.css'
import mic_logo from '../assets/logo-mic.png'
import logo_bank from '../assets/logo-bank.png'
import event_logo_home from '../assets/event-logo-home.png'

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='header-wrapper'>
                <div className='header-container'>
                    <div className='logo-bank-contain'>
                        <img src={logo_bank} alt='' className='logo-bank' />
                    </div>
                    <div className='middle-logo-contain'>
                        <img src={event_logo_home} alt='' className='event-logo' />
                    </div>
                    <div className='mic-logo-contain'>
                        <img src={mic_logo} alt='' className='mic-logo' />
                    </div>
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