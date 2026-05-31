import React from "react";
import Login from "./auth/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Users from "./components/Users";

const App = () => {
  const token = localStorage.getItem("token");
  const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
};

  return (
    <Routes>
      <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
      <Route path="/login" element={token ? <Navigate to="/dashboard"/> : <Login/>} />

      <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}>
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
      </Route>

      <Route path="*" element={<h1 className="text-center text-5xl text-red-600"> Page Not Found 😢 </h1>} />
    </Routes>
  );
};
export default App;