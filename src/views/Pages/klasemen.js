import React from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../../api';
import { useAuthContext } from '../../context/authContext';

const Petunjuk = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const refreshPage = () => {
    API.getKlasemen(user?.EventId, 'team').then(res => {
      setData(res.klasemen);
      setLoading(false);
    }).catch(err => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    API.getKlasemen(user?.EventId, 'team').then(res => {
      setData(res.klasemen);
      setLoading(false);
    }).catch(err => {
      console.log(err);
    })
  }, [user])
  return (
    <>
      <div className='private-content-wrapper'>
        <span className='info-title'>HALO, SELAMAT PAGI</span>
        <span className='info-title'>{user?.nama_tim}</span>
        <span className='title'>Klasemen Games :</span>
        <table className='table-poin table table-hover align-middle'>
          <thead>
            <tr>
              <th>Nama Team</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.nama_tim}</td>
                  <td>{item.total_poin}</td>
                </tr>
              )
            }
            ) : <tr><td colSpan={2}>Loading...</td></tr>}
          </tbody>
        </table>
      </div>
      <div className='fixed-bottom'>
        <div className='container-width'>
          <div className='flex-between'>
            <button onClick={() => navigate('/dashboard', { redirect: true })} className='btn-primary'>DASHBOARD</button>
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

export default Petunjuk