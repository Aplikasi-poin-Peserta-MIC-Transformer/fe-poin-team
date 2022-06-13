import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../../assets/logo1.png'

const Register = () => {
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = React.useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    setShowAlert(
      <div className='success-register'>
        <img src={logo1} alt='' className='logo-1' />
        <span>SELAMAT TEAM SUDAH TERDAFTAR</span>
        <div className='content-center'>
          <button onClick={() => navigate('/login', { replace: true })} className='btn-white'>LOGIN</button>
        </div>
      </div>
    )
  }
  return (
    <div className='flext-column'>
      <form onSubmit={handleSubmit}>
        <div className='private-content-wrapper'>
          <div className='kelompok-form-group'>
            <label htmlFor='nama_team'>Nama Team</label>
            <input type='text' name='nama_team' className='kelompok-form-control' id='nama_team' required />
          </div>
          <div className='kelompok-form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' className='kelompok-form-control' id='password' required />
          </div>
          <div className='kelompok'>
            <span className='kelompok-title'>Nama Anggota :</span>
            <span className='kelompok-title'>No WA :</span>
          </div>
          <div className='kelompok bottom-fixed'>
            {Array.from(Array(15).keys()).map((idx) => (
              <>
                <div className='kelompok-form-group'>
                  <input type='text' name={`nama_anggota-${idx}`} className='kelompok-form-control' id={`nama_anggota-${idx}`} />
                </div>
                <div className='kelompok-form-group'>
                  <input type='text' name={`nomor_wa-${idx}`} className='kelompok-form-control' id={`nomor_wa-${idx}`} />
                </div>
              </>
            ))}
          </div>
        </div>
        <div className='fixed-bottom'>
          <div className='content-center'>
            <button type='submit' className='btn-primary'>Register</button>
          </div>
        </div>
      </form>
      {showAlert}
    </div>
  )
}

export default Register