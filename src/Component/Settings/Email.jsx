import React from "react";

const Email = () => {
  return (
    <>
      <div className=" text-cyan-500 text-[18px] font-medium">Email</div>
      <div className="border border-b-gray-300 my-2"></div>
      <div className="grid grid-cols-4 gap-5 pb-3">
        <div className="group-input">
          <label>Company Email</label>
          <input />
        </div>
        <div className="group-input">
          <label>Mail From Name</label>
          <input />
        </div>
        <div className="group-input">
          <label>Email Protocol</label>
          <select>
            <option>SMTP</option>
          </select>
        </div>
        <div className="group-input ">
          <label>SMTP Host</label>
          <input />
        </div>
        <div className="group-input ">
          <label>SMTP User</label>
          <input />
        </div>
        <div className="group-input ">
          <label>SMTP Password</label>
          <input />
        </div>
        <div className="group-input ">
          <label>SMTP Port</label>
          <input />
        </div>
        <div className="group-input ">
          <label>Email Encryption</label>
          <select>
            <option>SSL</option>
            <option>TLS</option>
          </select>
        </div>
      </div>
      <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl">
        <button className="border border-gray-400 rounded-full px-4 py-2">
          Cancel
        </button>
        <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
          Save
        </button>
      </div>
    </>
  );
};

export default Email;
