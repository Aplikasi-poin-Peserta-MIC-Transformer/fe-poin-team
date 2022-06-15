import React from 'react'
import { useNavigate } from "react-router-dom"
import { useAuthContext } from '../../context/authContext'
import API from '../../api'

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    API.loginTeams(value).then(res => {
      console.log(res);
      // login(res);
      // window.location.href = '/dashboard';
      // navigate("/dashboard");
    }).catch(err => {
      console.log(err);
      setError(
        <div className="alert alert-danger" role="alert">
          Username atau password tidak ditemukan!
        </div>
      )
    })
  }
  return (
    <div className='private-content-wrapper'>
      <div className='flext-column'>
        {error}
        <form onSubmit={handleSubmit}>
        <div className='kelompok-form-group'>
          <label htmlFor='nama_team'>Nama Team</label>
            <input type='nama_team' name='username' defaultValue="testteam01" className='kelompok-form-control' id='nama_team' required />
        </div>
        <div className='kelompok-form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' defaultValue="123456" className='kelompok-form-control' id='password' required />
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