import React from "react";

const ViewModal = ({ item, type, close }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center backdrop-blur-2xl items-center">
      <div className="bg-neutral-800 p-5 rounded-2xl w-[400px] flex justify-center flex-col items-center">
        {type === "products" ? (
          <>
            <img src={item.image} className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-500" />
            <div className="pt-4">
              <p className="text-[17px]"> <b> Id : </b> {item.id} </p>
              <p className="text-[17px]"> <b> Name : </b> {item.name} </p>
              <p className="text-[17px]"> <b> Price : </b> {item.price} </p>
              <p className="text-[17px]"> <b> Category : </b> {item.category} </p>
            </div>
          </>
        ) : (
          <>
            <img src={item.avatar} className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-500" />
            <div className="pt-4">
              <p className="text-cyan-500 text-[18px] font-bold"> <span className="text-white"> Id: </span> {item.id} </p>
              <p className="text-cyan-500 text-[18px] font-bold"> <span className="text-white"> Name: </span> {item.name} </p>
              <p className="text-cyan-500 text-[18px] font-bold"> <span className="text-white"> Email: </span> {item.email} </p>
              <p className="text-cyan-500 text-[18px] font-bold"> <span className="text-white"> Role: </span> {item.role} </p>
              <p className="text-cyan-500 text-[18px] font-bold"> <span className="text-white"> Country: </span> {item.country} </p>
            </div>
          </>
        )}
        
        <button onClick={close} className="mt-5 bg-red-800 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-bold"> Close </button>
      </div>
    </div>
  );
};
export default ViewModal;