import React, { useState } from "react";
import Header from "../Header/Header";
import { FaHome, FaLock } from "react-icons/fa";
import { Avatar, Dialog } from "@mui/material";
import { FiActivity, FiAlertCircle } from "react-icons/fi";
import { BsWindowStack } from "react-icons/bs";
import { BsUiRadios } from "react-icons/bs";
import { LiaTradeFederation } from "react-icons/lia";
import { RiIndentIncrease } from "react-icons/ri";
import { RxAvatar, RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  const [head, setHead] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-gray-20">
      <Header />
      <div className="p-8shadow-2xl">
        <div className="flex gap-4 items-center">
          <FaHome />
          <div>/</div>
          <div>Users</div>
          <div>/</div>
          <div>Profile</div>
        </div>

        <div className="p-2 flex justify-end mt-3 gap-8shadow-2xl">
          <div className=" flex flex-col justify-center  ">
            <span className="text-[20px] font-medium pt-5">Pankaj</span>
            <span className="pt-2">acv002</span>
          </div>
          <div>
            <Avatar src="" sx={{ height: 150, width: 150 }}></Avatar>
          </div>
        </div>

        <div className="py-6 px-2shadow-2xl grid grid-cols-4 gap-4">
          <div className="bg-gray-100 rounded-full p-3 flex gap-8">
            <div className="rounded-full bg-green-600 text-white p-4 h-[5px] w-[5px] flex items-center justify-center cursor-pointer hover:bg-green-900">
              8
            </div>
            <span className="font-semibold text-[18px]">Projects</span>
          </div>
          <div className="bg-gray-100 rounded-full p-3 flex gap-8">
            <div className="rounded-full bg-cyan-600 text-white p-4 h-[5px] w-[5px] flex items-center justify-center cursor-pointer hover:bg-cyan-900">
              15
            </div>
            <span className="font-semibold text-[18px]">Tasks</span>
          </div>
          <div className="bg-gray-100 rounded-full p-3 flex gap-8">
            <div className="rounded-full bg-emerald-600 text-white p-4 h-[5px] w-[5px] flex items-center justify-center cursor-pointer hover:bg-emerald-900">
              8
            </div>
            <span className="font-semibold text-[18px]">Defects</span>
          </div>
          <div className="bg-gray-100 rounded-full p-3 flex gap-8">
            <div className="rounded-full bg-indigo-600 text-white p-4 h-[5px] w-[5px] flex items-center justify-center cursor-pointer hover:bg-indigo-900">
              8
            </div>
            <span className="font-semibold text-[18px]">Incidents</span>
          </div>
          <div className="bg-gray-100 rounded-full p-3 flex gap-8">
            <div className="rounded-full bg-rose-600 text-white p-4 h-[5px] w-[5px] flex items-center justify-center cursor-pointer hover:bg-rose  -900">
              8
            </div>
            <span className="font-semibold text-[18px]">Comments</span>
          </div>
          <div className="bg-gray-100 rounded-full p-3 flex gap-8">
            <div className="rounded-full bg-sky-600 text-white p-4 h-[5px] w-[5px] flex items-center justify-center cursor-pointer hover:bg-sky-900">
              8
            </div>
            <span className="font-semibold text-[18px]">Activities</span>
          </div>
          <div className="bg-gray-100 rounded-full p-3 flex gap-8">
            <div className="rounded-full bg-pink-600 text-white p-4 h-[5px] w-[5px] flex items-center justify-center cursor-pointer hover:bg-pink-900">
              8
            </div>
            <span className="font-semibold text-[18px]">Total Messages</span>
          </div>
          <div className="bg-gray-100 rounded-full p-3 flex gap-8">
            <div className="rounded-full bg-purple-600 text-white p-4 h-[5px] w-[5px] flex items-center justify-center cursor-pointer hover:bg-purple-900">
              8
            </div>
            <span className="font-semibold text-[18px]">Articles</span>
          </div>
        </div>

        <div>
          <div className="py-6 flex gap-8 justify-center">
            <div
              className={`flex items-center cursor-pointer text-[20px] font-semibold ${
                head === "details" ? "bg-gray-300 p-1 rounded" : ""
              }`}
              onClick={() => setHead("details")}
            >
              <FiAlertCircle size={20} /> Details
            </div>
            <div
              className={`flex items-center cursor-pointer text-[20px] font-semibold ${
                head === "projects" ? "bg-gray-300 p-1 rounded" : ""
              }`}
              onClick={() => setHead("projects")}
            >
              <BsWindowStack /> Projects
            </div>
            <div
              className={`flex items-center cursor-pointer text-[20px] font-semibold ${
                head === "tasks" ? "bg-gray-300 p-1 rounded" : ""
              }`}
              onClick={() => setHead("tasks")}
            >
              <BsUiRadios /> Tasks
            </div>
            <div
              className={`flex items-center cursor-pointer text-[20px] font-semibold ${
                head === "defects" ? "bg-gray-300 p-1 rounded" : ""
              }`}
              onClick={() => setHead("defects")}
            >
              <LiaTradeFederation /> Defects
            </div>
            <div
              className={`flex items-center cursor-pointer text-[20px] font-semibold ${
                head === "incidents" ? "bg-gray-300 p-1 rounded" : ""
              }`}
              onClick={() => setHead("incidents")}
            >
              <RiIndentIncrease /> Incidents
            </div>
            <div
              className={`flex items-center cursor-pointer text-[20px] font-semibold ${
                head === "activities" ? "bg-gray-300 p-1 rounded" : ""
              }`}
              onClick={() => setHead("activities")}
            >
              <FiActivity /> Activities
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" py-2 text-[24px] font-bold ">Pankaj</div>
            <div className="flex items-center  gap-5">
              <button className="flex gap-5 bg-blue-600 text-white p-2 rounded items-center" onClick={handleClickOpen}>
                {" "}
                <RxAvatar />
                <span>Change Avatar</span>{" "}
              </button>
              <button className="flex  gap-5 bg-blue-600 text-white p-2 rounded items-center" onClick={handleClickOpen}>
                {" "}
                <MdEmail />
                <span>Change Email</span>
              </button>
              <button className="flex gap-5 bg-blue-600 text-white p-2 rounded items-center" onClick={handleClickOpen}>
                <FaLock /> <span>Change Password</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 py-2">
            <div className="group-input">
              <label>Employment Id</label>
              <input  />
            </div>
            <div className="group-input">
              <label>First Name </label>
              <input />
            </div>
            <div className="group-input">
              <label>Last Name </label>
              <input />
            </div>
            <div className="group-input">
              <label>UserName </label>
              <input />
            </div> <div className="group-input">
              <label>Primary Manager </label>
              <input />
            </div> <div className="group-input">
              <label>Secondary Manager </label>
              <input />
            </div> <div className="group-input">
              <label>Joining Date </label>
              <input />
            </div>  
          </div>
          <div className=" py-2 text-[24px] font-bold ">Personal Information</div> 
          <div className="py-2 grid grid-cols-3 gap-5">
          <div className="group-input">
              <label>Father's Name </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Mother's Name </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Gender </label>
              <input />
            </div>  
            <div className="group-input">
              <label> Date Of Birth </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Maritial Status </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Language </label>
              <input />
            </div>  
          
          </div>
          <div className=" py-2 text-[24px] font-bold ">Contact Information</div> 
          <div className="py-2 grid grid-cols-3 gap-5">
          <div className="group-input">
              <label>Email </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Skype </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Mobile </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Phone </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Address </label>
              <input />
            </div>  
            <div className="group-input">
              <label>City </label>
              <input />
            </div>  
            <div className="group-input">
              <label>State </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Country </label>
              <input />
            </div>  
            <div className="group-input">
              <label>Postal Code </label>
              <input />
            </div>  
          </div>
        </div>
      </div>
      <Dialog  open={open}
        onClose={handleClose} className=" ">
         <div className="p-2 w-[400px]">
          <div className="border border-b-gray-600 py-4 text-[22px] flex justify-between font-semibold"> 
          <div> Change Email</div>
          <div className="pr-2"> <RxCross2 onClick={handleClose}/></div>
          </div>
<div className="group-input pt-4">
  <label>Email</label>
  <input/>
</div>
<div className="group-input">
  <label>Password</label>
  <input/>
</div>
         </div>
      </Dialog>
    </div>
  );
};

export default Profile;
