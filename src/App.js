import React from 'react';
import { Routes, Route, useOutlet } from "react-router-dom";
import PerivateRoute from './components/private-routes';
import Layout from './components/layout';
import AdminLayout from './components/admin_layout';

import axios from "axios";
import { useAuthContext } from "./context/authContext";

const Loading = React.lazy(() => import('./components/loading'));

const Homepage = React.lazy(() => import('./views/home'));
const UserPoint = React.lazy(() => import('./views/user-point'));
const Login = React.lazy(() => import('./views/Auth/login'));
const Register = React.lazy(() => import('./views/Auth/register'));

const Dashboard = React.lazy(() => import('./views/Pages/dashboard'));
const LokasiPos = React.lazy(() => import('./views/Pages/lokasi-pos'));
const Kelasemen = React.lazy(() => import('./views/Pages/klasemen'));

// admin comp
const AdminLogin = React.lazy(() => import('./views/Admin/login'));
const AdminDashboard = React.lazy(() => import('./views/Admin/dashboard'));
const AdminPoin = React.lazy(() => import('./views/Admin/poin'));
const AdminScanPoin = React.lazy(() => import('./views/Admin/scan-poin'));

const MobileView = () => {
  const outlet = useOutlet();
  return (
    <div className="container-height container-width">{outlet}</div>
  )
}

function App() {
  const { token } = useAuthContext();
  React.useEffect(() => {
    axios.defaults.baseURL = "http://103.161.184.8/api/v1";
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.interceptors.request.use(config => {
      config.headers.common['access_token'] = token;
      return config;
    });
    axios.get('http://103.161.184.8/').then(res => {
      console.log(res.data);
    });
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
            </Route>
          </Route>
        </Route>

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />} >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/poin" element={<AdminPoin />} />
          <Route path="/admin/scan-poin" element={<AdminScanPoin />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
