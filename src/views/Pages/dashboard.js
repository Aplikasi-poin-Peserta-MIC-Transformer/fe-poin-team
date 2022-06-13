import React from 'react'
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

const Klasmen = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  }
  return (
    <>
      <div className='private-content-wrapper'>
        <span className='info-title'>HALO, SELAMAT PAGI</span>
        <span className='info-title'>Team CTBC</span>
        <span className='title'>Petunjuk Games :</span>
        <ol>
          <li>Setiap team akan menyelesaikan 10 pos</li>
          <li>Panitia menscan barcode dari setiap kelompok untuk menambahkan point</li>
          <li>Point tertinngi menjadi pemenang</li>
        </ol>
        <hr />
        <div className='content-center'>
          <span className='jumlah-pos'>JUMLAH POS : 0/10</span>
        </div>
        <hr />
        <div className='jumlah-point'>
          <span className='title'>POINT TEAM :</span>
          <div className='kelompok-form-group'>
            <input type='nama_team' className='kelompok-form-control' disabled value={0} />
          </div>
        </div>
        <div className='content-center'>
          <QRCode className='bottom-fixed' value={'43254-CTBC'} size={150} />
        </div>
      </div>
      <div className='fixed-bottom'>
        <div className='container-width'>
          <div className='flex-between'>
            <button onClick={() => navigate('/kelasemen', { redirect: true })} className='btn-primary'>KLASEMEN</button>
            <button onClick={refreshPage} className='btn-primary'>
              <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>
            </button>
            <button onClick={() => navigate('/lokasi-pos', { redirect: true })} className='btn-primary'>LOKASI POS</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Klasmen