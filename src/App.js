import React from 'react';
import { Routes, Route } from "react-router-dom";
import PerivateRoute from './components/private-routes';

const Homepage = React.lazy(() => import('./views/home'));
const Login = React.lazy(() => import('./views/Auth/login'));
const Register = React.lazy(() => import('./views/Auth/register'));

const Kelasemen = React.lazy(() => import('./views/Pages/klasemen'));
const LokasiPos = React.lazy(() => import('./views/Pages/lokasi-pos'));
const Petunjuk = React.lazy(() => import('./views/Pages/petunjuk'));

function App() {
  return (
      <div className="container">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<div>Page not Found 404</div>} />
            
            <Route element={<PerivateRoute />} >
              <Route path="/kelasemen" element={<Kelasemen />} />
              <Route path="/lokasi-pos" element={<LokasiPos />} />
              <Route path="/petunjuk" element={<Petunjuk />} />
            </Route>
          </Routes>
        </React.Suspense>
      </div>
  );
}

export default App;
