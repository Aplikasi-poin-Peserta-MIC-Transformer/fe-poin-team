import React from 'react'
import { useNavigate } from "react-router-dom"
import '../../styles/home.css'
import mic_logo from '../../assets/logo-mic.png'

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard", { replace: true });
  }
  return (
    <>
      <div className='header-wrapper'>
        <div className='header-container'>
          <img src={mic_logo} alt='' className='logo-1' />
          <h1>DASHBOARD</h1>
        </div>
      </div>
      <div className='flex-center'>
        <form onSubmit={handleSubmit}>
          <div className='kelompok-form-group'>
            <label htmlFor='nama_team'>Nama Team</label>
            <input type='nama_team' name='nama_team' className='kelompok-form-control' id='nama_team' />
          </div>
          <div className='kelompok-form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' className='kelompok-form-control' id='password' />
          </div>
          <div className='content-center'>
            <button type='submit' className='btn-primary'>LOGIN</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Home