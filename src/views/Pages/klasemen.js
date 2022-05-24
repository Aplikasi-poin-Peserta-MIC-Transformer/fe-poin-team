import React from 'react'
import { useNavigate } from 'react-router-dom';

const Petunjuk = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='private-content-wrapper'>
        <span className='info-title'>HALO, SELAMAT PAGI</span>
        <span className='info-title'>Team CTBC</span>
        <span className='title'>Petunjuk Games :</span>
        <table className='table-poin'>
          <thead>
            <tr>
              <th>Nama Team</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Team CTBC</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='sticky-bottom'>
        <div className='container-width'>
          <div className='flex-between'>
            <button onClick={() => navigate('/dashboard', { redirect: true })} className='btn-primary'>DASHBOARD</button>
            <button onClick={() => navigate('/lokasi-pos', { redirect: true })} className='btn-primary'>LOKASI POS</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Petunjuk