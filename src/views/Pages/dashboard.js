import React from 'react'
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import API from '../../api';
// import AddMembers from './form-add-member';

const Klasmen = () => {
  const { user } = useAuthContext();
  console.log(user);
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  }
  const [pos, setPos] = React.useState(0);
  const [jml_pos, setJmlPos] = React.useState(0);
  const [poin, setPoin] = React.useState(0);

  React.useEffect(() => {
    API.getTeamsId(user?.id).then(res => {
      setPos(res.pos);
      setJmlPos(res.jml_pos);
      setPoin(res.total_poin);
    }).catch(err => {
      console.log(err);
    })
  }, [user])
  return (
    <>
      <div className='private-content-wrapper'>
        {/* {user?.totalTeamMember > 0 ? (
          <> */}
            <span className='info-title'>HALO, SELAMAT PAGI</span>
            <span className='info-title'>{user?.nama_tim}</span>
            <span className='title'>Petunjuk Games :</span>
            <ol>
              <li>Setiap team akan menyelesaikan {jml_pos} pos</li>
              <li>Panitia menscan barcode dari setiap kelompok untuk menambahkan point</li>
              <li>Point tertingi menjadi pemenang</li>
            </ol>
            <hr />
            <div className='content-center'>
              <span className='jumlah-pos'>JUMLAH POS : {`${pos === undefined ? 0 : pos}/${jml_pos}`}</span>
            </div>
            <hr />
            <div className='jumlah-point'>
              <span className='title'>POINT TEAM :</span>
              <div className='kelompok-form-group'>
                <input type='nama_team' className='kelompok-form-control' disabled value={poin} />
              </div>
            </div>
            <div className='content-center' style={{ marginBottom: "3rem" }}>
              <QRCode className='bottom-fixed' value={`team/${user?.id}/${user.EventId}`} size={300} />
            </div>
          {/* </>
        ) : (
            <AddMembers />
        )} */}
      </div>
      <div className='fixed-bottom'>
        <div className='container-width'>
          <div className='flex-between'>
            <button onClick={() => navigate('/kelasemen', { redirect: true })} className='footer-font btn-primary'>KLASEMEN</button>
            <button onClick={refreshPage} className='btn-primary'>
              <svg fill='currentColor' width="22" height="22" viewBox="0 0 24 24"><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>
            </button>
            <button onClick={() => navigate('/lokasi-pos', { redirect: true })} className='footer-font btn-primary'>LOKASI POS</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Klasmen