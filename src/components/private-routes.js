import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, useOutlet } from "react-router-dom";

const PerivateRoute = () => {
    const { user } = useAuth();
    console.log("🚀 ~ user", user)
    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

  return (
      <div>{outlet}</div>
  )
}

export default PerivateRoute