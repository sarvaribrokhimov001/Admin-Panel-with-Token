import React, { useEffect } from "react";
import Login from "./auth/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      localStorage.removeItem("token");
    } else {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<h1> Page is Not Founded 😢 </h1>} />
    </Routes>
  );
};
export default App;
