import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-20 border-b border-slate-800 bg-slate-900 px-8 flex items-center justify-between">
      <h2 className="text-2xl font-bold"> Dashboard </h2>
      <div>
        <ul className="flex gap-10 pr-8">
            <li> <NavLink className={'font-bold text-2xl hover:text-red-600'} to="/dashboard"> Dashboard </NavLink> </li>
            <li> <NavLink className={'font-bold text-2xl hover:text-red-600'} to="/dashboard/products"> Products </NavLink> </li>
            <li> <NavLink className={'font-bold text-2xl hover:text-red-600'} to="/dashboard/users"> Users </NavLink> </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;