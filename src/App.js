import React from 'react';
import { Routes, Route } from "react-router-dom";
import PerivateRoute from './components/private-routes';
import Layout from './components/layout';

const Loading = React.lazy(() => import('./components/loading'));

const Homepage = React.lazy(() => import('./views/home'));
const UserPoint = React.lazy(() => import('./views/user-point'));
const Login = React.lazy(() => import('./views/Auth/login'));
const Register = React.lazy(() => import('./views/Auth/register'));

const Dashboard = React.lazy(() => import('./views/Pages/dashboard'));
const LokasiPos = React.lazy(() => import('./views/Pages/lokasi-pos'));
const Kelasemen = React.lazy(() => import('./views/Pages/klasemen'));

function App() {
  return (
    <div className="container-height container-width">
      <React.Suspense fallback={<Loading />}>
        <Routes>
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
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
