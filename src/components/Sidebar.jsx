import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[250px] min-h-screen bg-black'>
      <h1 className='text-red-600 text-center font-bold text-[26px] pt-[25px]'> Admin Dashboard </h1>
        <ul className='pt-[100px] flex flex-col gap-[30px] justify-center pl-[15px]'>
            <li> <NavLink className={"text-red-600 text-[40px] font-bold"} to="/dashboard"> Dashboard </NavLink> </li>
            <li> <NavLink className={'text-red-600 text-[40px] font-bold'} to="/products"> Products </NavLink> </li>
            <li> <NavLink className={'text-red-600 text-[40px] font-bold'} to="/users"> Users </NavLink> </li>
        </ul>
        <button className='w-[180px] h-[40px] shadow-[0_0_20px_rgba(255,0,0,0.7)] bg-black text-red-600 border-[5px] ml-[10px] rounded-[15px] text-[20px] border-red-600 text-shadow-red-600 
          font-bold absolute bottom-[70px] hover:bg-red-600 hover:text-white hover:border-[5px] hover:border-white active:bg-black active:border-[5px] 
          active:border-red-700 active:text-red-700 active:shadow-[0_0_10px_#ff0000,0_0_20px_#ff0000]'> Log out </button>
    </div>
  )
}
export default Sidebar