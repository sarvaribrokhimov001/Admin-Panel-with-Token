import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData , setFormData] = useState({
    username : "",
    password : ""
  });


  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });
  }

const handleSubmit = (e) => {
  e.preventDefault();

  const username = formData.username.trim();
  const password = formData.password.trim();

    if (!username || !password) {
      toast.error("Bo'sh maydonni to'ldiring !", {
         position : "top-center",
         style : {
            color : "red",
            fontWeight : "bold",
            backgroundColor : "black",
            border : "5px solid red",
            boxShadow: `
                0 0 15px rgba(255, 0, 0, 0.7),
                0 0 30px rgba(255, 0, 0, 0.5),
                0 0 45px rgba(255, 0, 0, 0.3)
            `
        }  
    });      
        return;
    }


  if (username !== "Admin" || password !== "Admin12345") {
    toast.error("Invalid username or password", {
        position : "top-center",
        style : {
            color : "red",
            fontWeight : "bold",
            backgroundColor : "black",
            border : "5px solid red",
            boxShadow: `
                0 0 15px rgba(255, 0, 0, 0.7),
                0 0 30px rgba(255, 0, 0, 0.5),
                0 0 45px rgba(255, 0, 0, 0.3)
            `
        }  
    });
        return;
  } else {
    const token = "AdminToken"; 
    localStorage.setItem("token", token); 

    toast.success("Successfully Validation to Dashboard !", {
        position : "top-center",
        style : {
            color : "green",
            fontWeight : "bold",
            backgroundColor : "black",
            border : "5px solid green",
            boxShadow: `
               0 0 15px rgba(0, 255, 0, 0.7),
               0 0 30px rgba(0, 255, 0, 0.5),
               0 0 45px rgba(0, 255, 0, 0.3)
            `,
            width : "300px",
            textAlign : "center"
        }  
    });

    setTimeout(() => {
        navigate("/dashboard");
    }, 1500);
  }
}

  return (
    <div className='w-full min-h-screen bg-gray-950 backdrop-blur-2xl flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='w-[500px] px-5 py-9 pt-17 m-auto border-red-600 border-4 flex items-center justify-center flex-col gap-6 rounded-[20px] 
        shadow shadow-[0_0_15px_rgba(255,0,0,0.7),0_0_30px_rgba(255,0,0,0.5),0_0_45px_rgba(255,0,0,0.3)]'>
            <input 
                className='w-[250px] h-[45px] px-4 border-red-800 border-2 rounded-[8px] text-red-600 focus:outline-none focus:border-green-700
                 focus:text-green-700 font-bold shadow shadow-[0_0_15px_rgba(255,0,0,0.7),0_0_30px_rgba(255,0,0,0.5),0_0_45px_rgba(255,0,0,0.3)] 
                 focus:shadow-[0_0_15px_rgba(0,255,0,0.7),0_0_30px_rgba(0,255,0,0.5),0_0_45px_rgba(0,255,0,0.3)] capitalize placeholder:normal-case' 
                value={formData.username} 
                type="text" 
                placeholder='username' 
                name='username'
                onChange={handleChange} 
            />
            <input 
                className='w-[250px] h-[45px] px-4 border-red-800 border-2 rounded-[8px] text-red-600 focus:outline-none focus:border-green-700 
                 focus:text-green-700 font-bold shadow shadow-[0_0_15px_rgba(255,0,0,0.7),0_0_30px_rgba(255,0,0,0.5),0_0_45px_rgba(255,0,0,0.3)] 
                 focus:shadow-[0_0_15px_rgba(0,255,0,0.7),0_0_30px_rgba(0,255,0,0.5),0_0_45px_rgba(0,255,0,0.3)] capitalize placeholder:normal-case' 
                value={formData.password} 
                type="password" 
                placeholder='password' 
                name='password'
                onChange={handleChange} 
            />
            <button 
                type='submit'
                className='w-[170px] h-[45px] rounded-[10px] bg-black text-red-600 font-bold  border-red-600 border-4 shadow shadow-[0_0_15px_rgba(255,0,0,0.7),0_0_30px_rgba(255,0,0,0.5),0_0_45px_rgba(255,0,0,0.3)]
                 hover:text-yellow-400 hover:border-4 hover:border-yellow-400 hover:shadow hover:shadow-[0_0_15px_rgba(255,193,7,0.8),0_0_30px_rgba(255,193,7,0.6),0_0_45px_rgba(255,193,7,0.4)]
                 active:text-green-700 active:border-4 active:border-green-700 active:shadow active:shadow-[0_0_15px_rgba(74,222,128,0.8),0_0_30px_rgba(74,222,128,0.6),0_0_45px_rgba(74,222,128,0.4)]'
            > Submit 
            </button>
        </form>
    </div>
  )
}

export default Login