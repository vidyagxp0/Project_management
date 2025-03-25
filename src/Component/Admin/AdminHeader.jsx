
// import React, { useEffect, useRef, useState } from "react";
// import { IoMenu, IoNotifications } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import { Avatar } from "@mui/material";
// import { ImProfile } from "react-icons/im";
// import { MdForwardToInbox } from "react-icons/md";
// import { IoMdLogOut } from "react-icons/io";

// const AdminHeader = ({ onMenuClick }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleAvatarClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleLogout = () => {
//     console.log("Admin Logged out");
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (dropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownOpen]);

//   return (
//     <div className="w-full px-4 py-2 bg-white shadow-md">
//       <div className="grid grid-cols-5 p-4">
//         <div className="flex gap-3 col-span-4">
//           <div
//             onClick={onMenuClick}
//             className="bg-gray-100 p-2 text-2xl text-black rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white"
//           >
//             <IoMenu />
//           </div>
//           <img
//             src="/headerlogo.png"
//             className="h-[40px] cursor-pointer"
//             onClick={() => navigate("/admin-dashboard")}
//           />
//         </div>
//         <div className="flex justify-end items-center gap-8">
//           <IoNotifications size={30} />
//           <div>
//             <div className="cursor-pointer" onClick={handleAvatarClick}>
//               <Avatar alt="Admin" src="/static/images/avatar/1.jpg" />
//             </div>

//             {isDropdownOpen && (
//               <div
//                 ref={dropdownRef}
//                 className="absolute top-16 right-2 bg-white border rounded shadow-md"
//               >
//                 <ul>
//                   <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
//                     <Avatar
//                       alt="Admin"
//                       src="/static"
//                       sx={{ width: 100, height: 100 }}
//                     ></Avatar>
//                   </li>
//                   <li
//                     className="py-4 px-6 flex gap-2 items-center cursor-pointer hover:bg-gray-200 "
//                     onClick={() => navigate("/admin-profile")}
//                   >
//                     <ImProfile />
//                     Profile
//                   </li>
//                   <li className="py-4 flex gap-2 px-6 items-center cursor-pointer hover:bg-gray-200 ">
//                     <MdForwardToInbox />
//                     Admin Inbox
//                   </li>
//                   <li
//                     className="py-4 flex gap-2 border border-t-gray-600 px-6 items-center cursor-pointer hover:bg-red-500 hover:text-white "
//                     onClick={handleLogout}
//                   >
//                     <IoMdLogOut />
//                     LogOut
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHeader;



import React, { useEffect, useRef, useState } from "react";
import { IoMenu, IoNotifications } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { ImProfile } from "react-icons/im";
import { MdForwardToInbox } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import LogoutModal from "./LogoutPage";

const AdminHeader = ({ onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false); // ✅ Correctly placed state
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Toggle profile dropdown
  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="w-full px-4 py-2 bg-white shadow-md">
      <div className="grid grid-cols-5 p-4">
        <div className="flex gap-3 col-span-4">
          <div
            onClick={onMenuClick}
            className="bg-gray-100 p-2 text-2xl text-black rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white"
          >
            <IoMenu />
          </div>
          <img
            src="/headerlogo.png"
            className="h-[40px] cursor-pointer"
            onClick={() => navigate("/admin-dashboard")}
          />
        </div>
        <div className="flex justify-end items-center gap-8 relative">
          <IoNotifications size={30} />
          <div>
            {/* Avatar Click */}
            <div className="cursor-pointer" onClick={handleAvatarClick}>
              <Avatar alt="Admin" src="/static/images/avatar/1.jpg" />
            </div>

            {/* Profile Dropdown */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-16 right-2 bg-white border rounded shadow-md"
              >
                <ul>
                  <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
                    <Avatar alt="Admin" src="/static" sx={{ width: 100, height: 100 }} />
                  </li>
                  <li
                    className="py-4 px-6 flex gap-2 items-center cursor-pointer hover:bg-gray-200"
                    onClick={() => navigate("/admin-profile")}
                  >
                    <ImProfile />
                    Profile
                  </li>
                  <li className="py-4 flex gap-2 px-6 items-center cursor-pointer hover:bg-gray-200">
                    <MdForwardToInbox />
                    Admin Inbox
                  </li>
                  <li
                    className="py-4 flex gap-2 border-t border-gray-300 px-6 items-center cursor-pointer hover:bg-red-500 hover:text-white"
                    onClick={() => setIsLogoutOpen(true)} // ✅ Opens logout modal
                  >
                    <IoMdLogOut />
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Logout Modal */}
      <LogoutModal isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)} />
    </div>
  );
};

export default AdminHeader;
