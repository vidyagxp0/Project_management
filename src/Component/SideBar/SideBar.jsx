// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AiFillProduct, AiOutlineDashboard } from "react-icons/ai";
// import { FaList, FaPeopleGroup, FaUserGroup } from "react-icons/fa6";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { IoMdGitPullRequest } from "react-icons/io";
// import { FcDepartment, FcSalesPerformance } from "react-icons/fc";
// import { SiRotaryinternational, SiCriticalrole } from "react-icons/si";
// import { IoIdCardOutline, IoSettingsSharp } from "react-icons/io5";
// import { MdInventory, MdMeetingRoom } from "react-icons/md";
// import { PiUserListBold } from "react-icons/pi";
// import { FaBusinessTime, FaFile, FaUserCheck } from "react-icons/fa";
// import { AiOutlineAudit } from "react-icons/ai";
// import { BsUiRadios, BsWindowStack } from "react-icons/bs";
// import { LiaTradeFederation } from "react-icons/lia";
// import { RiIndentIncrease } from "react-icons/ri";
// import { WiBarometer } from "react-icons/wi";
// import { TbReport } from "react-icons/tb";
// import { CiGrid41 } from "react-icons/ci";
// import { FiUser } from "react-icons/fi";

// const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
//   const [masters, setMasters] = useState(false);
//   const [Hrm, setHrm] = useState(false);
//   const [sales, setsales] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const stopPropagation = (e) => {
//     e.stopPropagation();
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? "text-blue-600" : "";
//   };

//   return (
//     <div className="">
//       {sidebarOpen && (
//         <div className="fixed top-[90px] w-64 flex flex-col gap-5 bg-gray-100 p-4 " style={{zIndex:1, overflowY:"auto",height:"calc(100vh - 5rem)"}}>
//           <div
//             className={`flex gap-3 items-center cursor-pointer ${isActive(
//               "/dashboard"
//             )}`}
//             onClick={() => handleNavigation("/dashboard")}
//           >
//             <AiOutlineDashboard size={25} />
//             Dashboard
//           </div>
//           <div
//             className={`flex gap-3 items-center cursor-pointer ${isActive(
//               "/project-planner"
//             )}`}
//             onClick={() => handleNavigation("/project-planner")}
//           >
//             <AiFillProduct size={25} />
//             Project Planner
//           </div>
//           <div
//             className={`flex gap-3 items-center cursor-pointer ${isActive(
//               "/add-company"
//             )}`}
//             onClick={() => handleNavigation("/add-company")}
//           >
//             <AiFillProduct size={25} />
//             Add Company
//           </div>
//           <div
//             className={`flex gap-3 items-center cursor-pointer ${isActive(
//               "/add-weekend"
//             )}`}
//             onClick={() => handleNavigation("/add-weekend")}
//           >
//             <AiFillProduct size={25} />
//             Add Weekend
//           </div>
       
//           <div
//             className={`flex gap-3 items-center cursor-pointer ${isActive(
//               "/reports"
//             )}`}
//             onClick={() => handleNavigation("/reports")}
//           >
//             <TbReport size={25} />
//             Reports
//           </div>

//           <div
//             className={`flex gap-3 items-center cursor-pointer ${isActive(
//               "/settings"
//             )}`}
//             onClick={() => handleNavigation("/settings")}
//           >
//             <IoSettingsSharp size={25} />
//             Settings
//           </div>
       
//         </div>
//       )}
//     </div>
//   );
// };

// export default SideBar;



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { RiProjector2Line } from "react-icons/ri";

const SideBar = ({ sidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {sidebarOpen && (
        <div
          className="fixed top-[90px] w-64 flex flex-col gap-4 bg-gray-100 border-r border-gray-300 text-gray-800 p-5 shadow-xl rounded-r-lg"
          style={{ zIndex: 10, overflowY: "auto", height: "calc(100vh - 5rem)" }}
        >
          {/* Sidebar Items */}
          {[
            { path: "/dashboard", label: "Dashboard", Icon: AiOutlineDashboard },
            { path: "/project-planner", label: "Project Planner", Icon: RiProjector2Line },
            { path: "/add-company", label: "Add Company", Icon: FaBuilding },
            { path: "/add-weekend", label: "Add Weekend", Icon: FaCalendarAlt },
            { path: "/add-holiday", label: "Add Holidays", Icon: FaCalendarAlt },
            { path: "/reports", label: "Reports", Icon: TbReport },
            { path: "/settings", label: "Settings", Icon: IoSettingsSharp },
          ].map(({ path, label, Icon }) => (
            <div
              key={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-300 
              ${
                isActive(path)
                  ? "bg-blue-500 text-white shadow-md"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleNavigation(path)}
            >
              <Icon
                size={22}
                className={`${
                  isActive(path) ? "text-white" : "text-gray-600"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isActive(path) ? "text-white" : "text-gray-700"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBar;
