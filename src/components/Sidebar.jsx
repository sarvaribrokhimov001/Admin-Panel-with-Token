import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10"> Admin Panel </h1>
      <nav className="flex flex-col gap-4">
        <NavLink to="/dashboard/products" className="p-3 rounded-lg bg-slate-800 hover:bg-black hover:text-white transition text-red-600 text-[40px] font-bold"> Products </NavLink>
        <NavLink to="/dashboard/users" className="p-3 rounded-lg bg-slate-800 hover:bg-black hover:text-white transition text-red-600 text-[40px] font-bold"> Users </NavLink>
      </nav>

      <button onClick={handleLogout} className='w-[180px] h-[40px] shadow-[0_0_20px_rgba(255,0,0,0.7)] bg-black text-red-600 border-[5px] ml-[10px] rounded-[15px] text-[20px] border-red-600 text-shadow-red-600 
        font-bold relative top-130 hover:bg-red-600 hover:text-white hover:border-[5px] hover:border-white active:bg-black active:border-[5px] 
        active:border-red-700 active:text-red-700 active:shadow-[0_0_10px_#ff0000,0_0_20px_#ff0000]'> 
        Log out 
      </button>
    </aside>
  );
};
export default Sidebar;