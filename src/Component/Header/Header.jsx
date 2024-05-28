import React, { useState } from 'react';
import { FcTodoList } from "react-icons/fc";
import { BsCalendar2Check } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { Avatar, Tooltip } from '@mui/material';
import { ImProfile } from "react-icons/im";
import { MdForwardToInbox } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const navigate=useNavigate()
  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className='bg-white grid grid-cols-5 p-4  shadow-2xl'>
      <img src='/headerlogo.png' className='h-[40px] flex items-center col-span-4 cursor-pointer' onClick={()=>navigate("/dashboard")}/>
      <div className='flex justify-end  items-center  gap-8'>
        {/* <Tooltip title="To Do"> */}
          <FcTodoList size={30}/>
        {/* </Tooltip> */}
        {/* <Tooltip title="Calendar"> */}
          <BsCalendar2Check size={30} onClick={()=>navigate("/calendar")}/>
        {/* </Tooltip> */}
        <IoNotifications size={30}/>
        <div>
          {/* <Tooltip title="Avatar"> */}
            <div className="cursor-pointer" onClick={handleAvatarClick}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </div>
          {/* </Tooltip> */}
          {isDropdownOpen && (
            <div className="absolute top-16 right-2 bg-white border rounded shadow-md">
              <ul>
                <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
                  <Avatar sx={{width:100,height:100}}></Avatar>
                </li>
                <li className="py-4 px-6 flex gap-2 items-center cursor-pointer hover:bg-gray-200 "  onClick={()=>navigate("/profile")}>
                  <ImProfile/>
                  Profile
                </li>
                <li className="py-4 flex gap-2 px-6 items-center cursor-pointer hover:bg-gray-200 " >
                  <MdForwardToInbox/>
                  My Inbox
                </li>
                <li className="py-4 flex gap-2 border border-t-slate-600 px-6 items-center cursor-pointer hover:bg-gray-200 " onClick={()=>navigate("/")} >
                  <IoMdLogOut/>
                 LogOut
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
