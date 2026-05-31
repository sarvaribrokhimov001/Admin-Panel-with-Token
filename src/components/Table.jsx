import React, { useState } from "react";
import api from "../api/api";
import toast from "react-hot-toast";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import ViewModal from "./ViewModal";

const Table = ({ data, type, title, refresh }) => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const endpoint = type === "products" ? "Products" : "Users";

  const deleteItem = async (id) => {
    try {
      await api.delete(`/${endpoint}/${id}`);
      toast.success("Deleted Successfully");
      refresh();
    } catch {
      toast.error("Delete Error");
    }
  };   

  return (
    <div className="p-5">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold"> {title} </h1>
        <button className="bg-emerald-500 hover:bg-emerald-800 text-white px-5 py-2 rounded-xl font-bold text-[17px]" onClick={() => setAddModal(true)}> + Add </button>
      </div>

      <table className="w-full overflow-hidden rounded-xl">
        <thead className="bg-slate-800">
          {type === "products" ? (
            <tr className="border-b border-slate-800 hover:bg-slate-900 transition">
              <th className="p-4 text-center"> ID </th>
              <th className="p-4 text-center"> Image </th>
              <th className="p-4 text-center"> Name </th>
              <th className="p-4 text-center"> Price </th>
              <th className="p-4 text-center"> Category </th>
              <th className="p-4 text-center"> Actions </th>
            </tr>
          ) : (
            <tr className="border-b border-slate-800 hover:bg-slate-900 transition">
              <th className="p-4 text-center"> ID </th>
              <th className="p-4 text-center"> Avatar </th>
              <th className="p-4 text-center"> Name </th>
              <th className="p-4 text-center"> Email </th>
              <th className="p-4 text-center"> Role </th>
              <th className="p-4 text-center"> Country </th>
              <th className="p-4 text-center"> Actions </th>
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center border-b">
              {type === "products" ? (
                <>
                  <td className="p-4 font-bold text-2xl"> {item.id} </td>
                  <td className="p-4">
                    <img src={item.image} className="w-18 h-18 rounded-2xl mx-auto" />
                  </td>
                  <td className="p-4 font-bold"> {item.name} </td>
                  <td className="p-4 font-bold"> $ {item.price} </td>
                  <td className="p-4 font-bold"> {item.category} </td>
                </>
              ) : (
                <>
                  <td className="p-4 font-bold text-2xl"> {item.id} </td>
                  <td className="p-4">
                    <img src={item.avatar} className="w-18 h-18 rounded-full mx-auto" />
                  </td>
                  <td className="p-4 font-bold"> {item.name} </td>
                  <td className="p-4 font-bold"> {item.email} </td>
                  <td className="p-4 font-bold"> {item.role} </td>
                  <td className="p-4 font-bold"> {item.country} </td>
                </>
              )}

              <td className="p-4 flex justify-center mt-5 gap-3">
                <button className="bg-blue-700 hover:bg-blue-400 text-white px-3 py-1 rounded-lg font-bold"
                  onClick={() => {
                    setSelected(item);
                    setViewModal(true);
                  }}>
                  View
                </button>

                <button className="bg-amber-400 hover:bg-amber-600 text-white px-3 py-1 rounded-lg font-bold"
                  onClick={() => {
                    setSelected(item);
                    setEditModal(true);
                  }}>
                  Edit
                </button>

                <button className="bg-red-700 hover:bg-red-400 text-white px-3 py-1 rounded-lg font-bold" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {addModal && (<AddModal type={type} refresh={refresh} close={() => setAddModal(false)} /> )}
      {editModal && (<EditModal type={type} item={selected} refresh={refresh} close={() => setEditModal(false)} /> )}
      {viewModal && (<ViewModal type={type} item={selected} close={() => setViewModal(false)} /> )}
    </div>
  );
};
export default Table;