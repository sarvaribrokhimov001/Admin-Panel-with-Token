import React, { useState } from "react";
import api from "../api/api";
import toast from "react-hot-toast";

const EditModal = ({ item, type, close, refresh }) => {
  const endpoint = type === "products" ? "Products" : "Users";
  const [form, setForm] = useState(item);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateItem = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/${endpoint}/${item.id}`, form);
      toast.success("Updated Successfully");
      refresh();
      close();
    } catch {
      toast.error("Update Error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-2xl z-50 flex justify-center items-center">
      <form onSubmit={updateItem} className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-[650px] h-100 flex flex-col gap-2 text-white font-bold">
        {type === "products" ? (
          <>
            <input
              className="w-[90%] m-auto block border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              placeholder="Name"
            />

            <input
              className="w-[90%] m-auto block border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="price"
              value={form.price || ""}
              onChange={handleChange}
              placeholder="Price"
            />

            <input
              className="w-[90%] m-auto block border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="category"
              value={form.category || ""}
              onChange={handleChange}
              placeholder="Category"
            />

            <input
              className="w-[90%] m-auto block border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="image"
              value={form.image || ""}
              onChange={handleChange}
              placeholder="Image URL"        
            />
          </>
        ) : (
          <>
            <input
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              placeholder="Name"
            />

            <input
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
              placeholder="Email"
            />

            <input
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="avatar"
              value={form.avatar || ""}
              onChange={handleChange}
              placeholder="Avatar URL"
            />

            <input
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="role"
              value={form.role || ""}
              onChange={handleChange}
              placeholder="Role"
            />

            <input
              className="w-full border border-slate-700 bg-slate-800 rounded-lg p-3 outline-none focus:border-cyan-500"
              name="country"
              value={form.country || ""}
              onChange={handleChange}
              placeholder="Country"
            />
          </>
        )}

        <button className="bg-yellow-400 text-white hover:bg-yellow-600 py-2 rounded-2xl w-28 block m-auto"> Update </button>
      </form>
    </div>
  );
};
export default EditModal;