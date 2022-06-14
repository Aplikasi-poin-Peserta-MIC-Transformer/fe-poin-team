import React from 'react'
import { useNavigate } from 'react-router-dom';
import map_image from '../../assets/map-example.png'
import { useAuthContext } from '../../context/authContext';

const LokasiPos = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  }
  return (
    <>
      <div className='private-content-wrapper'>
        <span className='info-title'>HALO, SELAMAT PAGI</span>
        <span className='info-title'>{user?.nama_tim}</span>
        <span className='title'>Lokasi Pos :</span>
        <img src={map_image} alt='' className='pos-image' />
      </div>
      <div className='fixed-bottom'>
        <div className='container-width'>
          <div className='flex-between'>
            <button onClick={() => navigate('/dashboard', { redirect: true })} className='btn-primary'>DASHBOARD</button>
            <button onClick={refreshPage} className='btn-primary'>
              <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>
            </button>
            <button onClick={() => navigate('/kelasemen', { redirect: true })} className='btn-primary'>KLASEMEN</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LokasiPos