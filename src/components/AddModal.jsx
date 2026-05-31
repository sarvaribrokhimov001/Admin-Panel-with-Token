import React, { useState } from "react";
import api from "../api/api";
import toast from "react-hot-toast";

const AddModal = ({ type, close, refresh }) => {
  const endpoint = type === "products" ? "Products" : "Users";
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post(`/${endpoint}`, form);
      toast.success("Added Successfully");
      refresh();
      close();
    } catch {
      toast.error("Add Error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-[600px] text-white flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-cyan-400 mb-2"> +Add {type === "products" ? "Product" : "User"} </h2>
        {type === "products" ? (
          <>
            <input
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

            <input
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

            <input
              name="price"
              placeholder="Price"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

            <input
              name="category"
              placeholder="Category"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />          
          </>
        ) : (
          <>
            <input
              name="avatar"
              placeholder="Avatar URL"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

            <input
              name="role"
              placeholder="Role"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

            <input
              name="country"
              placeholder="Country"
              onChange={handleChange}
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
            />
          </>
        )}

        <div className="flex gap-3 mt-2">
          <button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-lg font-bold text-[22px]"> +Add </button>
          <button type="button" onClick={close} className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold text-[22px]"> Cancel </button>
        </div>
      </form>
    </div>
  );
};
export default AddModal;