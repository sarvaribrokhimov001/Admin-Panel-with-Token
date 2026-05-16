import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <ul>
            <li> <NavLink to="/dashboard"> Dashboard </NavLink> </li>
            <li> <NavLink to="/products"> Products </NavLink> </li>
            <li> <NavLink to="/users"> Users </NavLink> </li>
        </ul>
    </div>
  )
}
export default Navbar