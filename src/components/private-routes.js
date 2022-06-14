import React from 'react'
import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from '../context/authContext'

const PerivateRoute = () => {
    const { isAuthenticated } = useAuthContext();
    const outlet = useOutlet();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

  return (
      <div>{outlet}</div>
  )
}

export default PerivateRoute