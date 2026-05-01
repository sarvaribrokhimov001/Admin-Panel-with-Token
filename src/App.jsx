import React, { useEffect } from 'react'
import Login from './auth/Login'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'

const App = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if(!token) {
      navigate("/login")
    } else {
      navigate("/dashboard")
    }
  } , [token , navigate]);

  return (
   <Routes>
      <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
   </Routes>
  )
}

export default App