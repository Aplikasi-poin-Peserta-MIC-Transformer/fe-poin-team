import React from 'react'
import mic_logo from '../assets/logo-mic.png'
import event_logo_home from '../assets/event-logo-home.png'

const Loading = () => {
  return (
      <div className='loading'>
      <img src={mic_logo} alt='' width={80} />
        <img src={event_logo_home} alt='' className='event-logo' />
          <span>Loading...</span>
      </div>
  )
}

export default Loading