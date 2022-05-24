import React from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard", { replace: true });
  }
  return (
    <div className='private-content-wrapper'>
    <div className='flext-column'>
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='nama_team'>Nama Team</label>
          <input type='nama_team' name='nama_team' className='form-control' id='nama_team' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' className='form-control' id='password' />
        </div>
        <div className='content-center'>
          <button type='submit' className='btn-primary'>LOGIN</button>
        </div>
      </form>
      <span className='register-info'>Belum Register ?</span>
      <div className='content-center'>
        <button onClick={() => navigate('/register', { replace: true })} className='btn-primary'>REGISTER</button>
      </div>
      </div>
    </div>
  )
}

export default Login