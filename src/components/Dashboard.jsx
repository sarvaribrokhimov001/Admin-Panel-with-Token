import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="min-h-screen flex bg-slate-950 text-white">
        <Sidebar />

      <div className="flex-1">
        <Navbar />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
   </div>
  </div>
  )
}
export default Dashboard