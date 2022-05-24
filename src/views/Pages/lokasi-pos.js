import React from 'react'
import { useNavigate } from 'react-router-dom';
import map_image from '../../assets/map-example.png'

const LokasiPos = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='private-content-wrapper'>
        <span className='info-title'>HALO, SELAMAT PAGI</span>
        <span className='info-title'>Team CTBC</span>
        <span className='title'>Lokasi Pos :</span>
        <img src={map_image} alt='' className='pos-image' />
      </div>
      <div className='sticky-bottom'>
        <div className='container-width'>
          <div className='flex-between'>
            <button onClick={() => navigate('/dashboard', { redirect: true })} className='btn-primary'>DASHBOARD</button>
            <button onClick={() => navigate('/kelasemen', { redirect: true })} className='btn-primary'>KLASEMEN</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LokasiPos