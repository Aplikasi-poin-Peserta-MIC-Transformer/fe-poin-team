import React from 'react';
import { Routes, Route, useOutlet } from "react-router-dom";
import PerivateRoute from './components/private-routes';
import Layout from './components/layout';

import axios from "axios";
import { useAuthContext } from "./context/authContext";
import { checkAPI } from './api/method';

const Loading = React.lazy(() => import('./components/loading'));

const Homepage = React.lazy(() => import('./views/home'));
const UserPoint = React.lazy(() => import('./views/user-point'));
const Login = React.lazy(() => import('./views/Auth/login'));
const Register = React.lazy(() => import('./views/Auth/register'));

const Dashboard = React.lazy(() => import('./views/Pages/dashboard'));
const LokasiPos = React.lazy(() => import('./views/Pages/lokasi-pos'));
const Kelasemen = React.lazy(() => import('./views/Pages/klasemen'));
const KelolaTeam = React.lazy(() => import('./views/Pages/kelola-team'));

const MobileView = () => {
  const outlet = useOutlet();
  return (
    <div className="container-height container-width">{outlet}</div>
  )
}

function App() {
  const { token } = useAuthContext();
  React.useEffect(() => {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.interceptors.request.use(config => {
      config.headers.common['access_token'] = token;
      return config;
    });
    checkAPI().then(res => { 
      console.log(res);
    })
  }, [token]);
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MobileView />}>
          <Route path="/" element={<Homepage />} />
          <Route element={<Layout />} >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/poin-user" element={<UserPoint />} />
          </Route>

          <Route path="*" element={<div className='page-not-found'>Page not Found 404</div>} />

          <Route path="/" element={<PerivateRoute />} >
            <Route path="/" element={<Layout />} >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lokasi-pos" element={<LokasiPos />} />
              <Route path="/kelasemen" element={<Kelasemen />} />
              <Route path="/kelola-team" element={<KelolaTeam />} />
            </Route>
          </Route>
        </Route>

      </Routes>
    </React.Suspense>
  );
}

export default App;
