import React from 'react'
import logo1 from '../assets/logo1.png'
import mic_logo from '../assets/logo-mic.png'

const Loading = () => {
  return (
      <div className='loading'>
          <img src={mic_logo} alt='' className='mic-logo' width={80} height={70} />
          <img src={logo1} alt='' className='logo-1' />
          <span>Loading...</span>
      </div>
  )
}

export default Loading