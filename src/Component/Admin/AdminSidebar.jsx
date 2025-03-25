

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { TbReport } from "react-icons/tb";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaUsers, FaUserShield } from "react-icons/fa";
// import { RiAdminFill } from "react-icons/ri";

// const AdminSideBar = ({ sidebarOpen }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigation = (path) => navigate(path);
//   const isActive = (path) => location.pathname.startsWith(path);

//   return (
//     <div>
//       {sidebarOpen && (
//         <div
//           key={location.pathname} // Forces re-render on route change
//           className="fixed top-[90px] w-64 flex flex-col gap-4 bg-gray-100 border-r border-gray-300 text-gray-800 p-5 shadow-xl rounded-r-lg"
//           style={{
//             zIndex: 10,
//             overflowY: "auto",
//             height: "calc(100vh - 5rem)",
//           }}
//         >
//           {[
//             { path: "admin-dashboard", label: "Admin Dashboard", Icon: AiOutlineDashboard },
//             { path: "manage-users", label: "Manage Users", Icon: FaUsers },
//             { path: "manage-admins", label: "Manage Admins", Icon: RiAdminFill },
//             { path: "roles-permissions", label: "Roles & Permissions", Icon: FaUserShield },
//             { path: "admin-reports", label: "Reports", Icon: TbReport },
//             { path: "admin-settings", label: "Settings", Icon: IoSettingsSharp },
//           ].map(({ path, label, Icon }) => (
//             <div
//               key={path}
//               className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-300 
//               ${isActive(path) ? "bg-blue-500 text-white shadow-md" : "hover:bg-gray-200"}`}
//               onClick={() => handleNavigation(path)}
//             >
//               <Icon
//                 size={22}
//                 className={isActive(path) ? "text-white" : "text-gray-600"}
//               />
//               <span
//                 className={`text-sm font-medium ${isActive(path) ? "text-white" : "text-gray-700"}`}
//               >
//                 {label}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminSideBar;



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUsers, FaUserShield } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const AdminSideBar = ({ sidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePath(path); // Update active state on click
  };

  return (
    <div>
      {sidebarOpen && (
        <div
          key={location.pathname} // Forces re-render on route change
          className="fixed top-[90px] w-64 flex flex-col gap-4 bg-gray-100 border-r border-gray-300 text-gray-800 p-5 shadow-xl rounded-r-lg"
          style={{
            zIndex: 10,
            overflowY: "auto",
            height: "calc(100vh - 5rem)",
          }}
        >
          {[
            { path: "/admin/admin-dashboard", label: "Admin Dashboard", Icon: AiOutlineDashboard },
            { path: "/admin/manage-users", label: "Manage Users", Icon: FaUsers },
            { path: "/admin/manage-admins", label: "Manage Admins", Icon: RiAdminFill },
            { path: "/admin/roles-permissions", label: "Roles & Permissions", Icon: FaUserShield },
            { path: "/admin/admin-reports", label: "Reports", Icon: TbReport },
            { path: "/admin/admin-settings", label: "Settings", Icon: IoSettingsSharp },
          ].map(({ path, label, Icon }) => (
            <div
              key={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-300 
              ${location.pathname.startsWith(path) ? "bg-blue-500 text-white shadow-md" : "hover:bg-gray-200"}`}
              onClick={() => handleNavigation(path)}
            >
              <Icon
                size={22}
                className={location.pathname.startsWith(path) ? "text-white" : "text-gray-600"}
              />
              <span
                className={`text-sm font-medium ${location.pathname.startsWith(path) ? "text-white" : "text-gray-700"}`}
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

export default AdminSideBar;
