import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <div >
          <Sidebar/>

          <div>
            <Navbar/>

            <main>
              <Outlet/>
            </main>
            
          </div>
        </div>
    </div>
  )
}
export default Dashboard