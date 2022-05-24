import React from 'react'
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

const Klasmen = () => {
  const navigate = useNavigate();
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
          <div className='form-group'>
            <input type='nama_team' className='form-control' disabled value={0} />
          </div>
        </div>
        <div className='content-center'>
          <QRCode className='bottom-fixed' value={'43254-CTBC'} size={150} />
        </div>
      </div>
      <div className='sticky-bottom'>
        <div className='container-width'>
          <div className='flex-between'>
            <button onClick={() => navigate('/kelasemen', { redirect: true })} className='btn-primary'>KLASEMEN</button>
            <button onClick={() => navigate('/lokasi-pos', { redirect: true })} className='btn-primary'>LOKASI POS</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Klasmen