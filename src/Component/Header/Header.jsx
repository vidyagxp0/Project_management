





import React, { useEffect, useRef, useState } from "react";
import { IoMenu, IoNotifications } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";
import { BsCalendar2Check } from "react-icons/bs";
import { Avatar } from "@mui/material";
import { ImProfile } from "react-icons/im";
import { MdForwardToInbox } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Header = ({onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar open/close
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="w-full px-4 py-2 bg-white shadow-md">
  <div className="flex items-center justify-between">
  

    <div className="flex items-center gap-3">
      <div
        onClick={onMenuClick}
        className="bg-gray-100 p-2 text-2xl text-[#000000] rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white"
      >
        <IoMenu />
      </div>
     
    </div>
    <div className=' grid grid-cols-5 p-4'>
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
 
     
  </div>
</div>

  
  );
};

export default Header;