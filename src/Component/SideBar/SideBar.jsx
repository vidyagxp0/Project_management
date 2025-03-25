


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
            { path: "/add-company", label: "Manage Company", Icon: FaBuilding },
            { path: "/add-weekend", label: "Manage Weekend", Icon: FaCalendarAlt },
            { path: "/add-holiday", label: "Manage Holidays", Icon: FaCalendarAlt },
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
