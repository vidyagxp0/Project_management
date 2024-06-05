import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillProduct, AiOutlineDashboard } from "react-icons/ai";
import { FaList, FaPeopleGroup, FaUserGroup } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdGitPullRequest } from "react-icons/io";
import { FcDepartment, FcSalesPerformance } from "react-icons/fc";
import { SiRotaryinternational, SiCriticalrole } from "react-icons/si";
import { IoIdCardOutline, IoSettingsSharp } from "react-icons/io5";
import { MdInventory, MdMeetingRoom } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { FaBusinessTime, FaFile, FaUserCheck } from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import { BsUiRadios, BsWindowStack } from "react-icons/bs";
import { LiaTradeFederation } from "react-icons/lia";
import { RiIndentIncrease } from "react-icons/ri";
import { WiBarometer } from "react-icons/wi";
import { TbReport } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const [masters, setMasters] = useState(false);
  const [Hrm, setHrm] = useState(false);
  const [sales, setsales] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600" : "";
  };

  return (
    <div className="">
      {sidebarOpen && (
        <div className="fixed top-[90px] w-64 flex flex-col gap-5 bg-gray-100 p-4 " style={{zIndex:1, overflowY:"auto",height:"calc(100vh - 5rem)"}}>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/dashboard"
            )}`}
            onClick={() => handleNavigation("/dashboard")}
          >
            <AiOutlineDashboard size={25} />
            Dashboard
          </div>

          <div
            className={`items-center pl-1 cursor-pointer ${
              isActive("/roles") ? "text-blue-500" : ""
            }`}
            onClick={() => setMasters(!masters)}
          >
            <p className="flex gap-5 items-center">
              <CiGrid41 size={22} /> Administration{" "}
              {masters ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </p>

            <div
              className="px-5 flex pt-3 cursor-pointer text-md"
              onClick={stopPropagation}
            >
              {masters && (
                <div className="flex flex-col gap-5 text-gray-700 ">
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/roles"
                    )}`}
                    onClick={() => handleNavigation("/roles")}
                  >
                    <FcDepartment /> Roles
                  </p>
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/departments"
                    )}`}
                    onClick={() => handleNavigation("/departments")}
                  >
                    <SiRotaryinternational />
                   Departments
                  </p>
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/teams"
                    )}`}
                    onClick={() => handleNavigation("/teams")}
                  >
                    <SiCriticalrole /> Teams
                  </p>
                  
                </div>
              )}
            </div>
          </div>

          <div
            className={`items-center pl-1 cursor-pointer ${
              isActive("/users") ? "text-blue-500" : ""
            }`}
            onClick={() => setHrm(!Hrm)}
          >
            <p className="flex gap-5 items-center">
              <FiUser size={22} /> HRM{" "}
              {Hrm ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </p>

            <div
              className="px-5 flex pt-3 cursor-pointer text-md"
              onClick={stopPropagation}
            >
              {Hrm && (
                <div
                  className="flex flex-col gap-5 text-gray-700 "
                  onClick={stopPropagation}
                >
                  <p
                    className={`hover:list-disc hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/users"
                    )}`}
                    onClick={() => handleNavigation("/users")}
                  >
                  <FaUserCheck />  Users
                  </p>
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/leaves"
                    )}`}
                    onClick={() => handleNavigation("/leaves")}
                  >
                   <IoMdGitPullRequest /> Leaves
                  </p>
                 
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/holidays"
                    )}`}
                    onClick={() => handleNavigation("/holidays")}
                  >
                  <MdInventory />  Holidays
                  </p>
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/timesheet"
                    )}`}
                    onClick={() => handleNavigation("/timesheet")}
                  >
                   <PiUserListBold /> Timesheet
                  </p>
               
                </div>
              )}
            </div>
          </div>
          <div
            className={`items-center pl-1 cursor-pointer ${
              isActive("/user-management") ? "text-blue-500" : ""
            }`}
            onClick={() => setsales(!sales)}
          >
            <p className="flex gap-5 items-center">
              <FcSalesPerformance size={22} />  Sales{" "}
              {sales ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </p>

            <div
              className="px-5 flex pt-3 cursor-pointer text-md"
              onClick={stopPropagation}
            >
              {sales && (
                <div className="flex flex-col gap-5 text-gray-700 ">
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/estimates"
                    )}`}
                    onClick={() => handleNavigation("/estimates")}
                  >
                    {" "}
                    <FaUserGroup/>  Estimates{" "}
                  </p>
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/invoices"
                    )}`}
                    onClick={() => handleNavigation("/invoices")}
                  >
                    {" "}
                    <AiOutlineAudit /> Invoices{" "}
                  </p>
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/payments"
                    )}`}
                    onClick={() => handleNavigation("/payments")}
                  >
                    {" "}
                    <AiOutlineAudit /> Payments{" "}
                  </p>
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/items"
                    )}`}
                    onClick={() => handleNavigation("/items")}
                  >
                    {" "}
                    <AiOutlineAudit /> Items{" "}
                  </p>
                  <p
                    className={`hover:text-blue-500 flex items-center gap-3 ${isActive(
                      "/taxes"
                    )}`}
                    onClick={() => handleNavigation("/taxes")}
                  >
                    {" "}
                    <AiOutlineAudit /> Taxes{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/project-planner"
            )}`}
            onClick={() => handleNavigation("/project-planner")}
          >
            <AiFillProduct size={25} />
            Project Planner
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/projects"
            )}`}
            onClick={() => handleNavigation("/projects")}
          >
            <BsWindowStack size={25} />
            Projects
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/tasks"
            )}`}
            onClick={() => handleNavigation("/tasks")}
          >
            <BsUiRadios size={25} />
            Tasks
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/defects"
            )}`}
            onClick={() => handleNavigation("/defects")}
          >
            <LiaTradeFederation size={25} />
            Defects
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/incidents"
            )}`}
            onClick={() => handleNavigation("/incidents")}
          >
            <RiIndentIncrease size={25} />
            Incidents
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/meetings"
            )}`}
            onClick={() => handleNavigation("/meetings")}
          >
            <MdMeetingRoom size={25} />
            Meetings
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/appointments"
            )}`}
            onClick={() => handleNavigation("/appointments")}
          >
            <FaBusinessTime size={25} />
            Appointments
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/clients"
            )}`}
            onClick={() => handleNavigation("/clients")}
          >
            <FaPeopleGroup size={25} />
            Clients
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/file-manager"
            )}`}
            onClick={() => handleNavigation("/file-manager")}
          >
            <FaFile size={25} />
            File Manager
          </div>
          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/reports"
            )}`}
            onClick={() => handleNavigation("/reports")}
          >
            <TbReport size={25} />
            Reports
          </div>

          <div
            className={`flex gap-3 items-center cursor-pointer ${isActive(
              "/settings"
            )}`}
            onClick={() => handleNavigation("/settings")}
          >
            <IoSettingsSharp size={25} />
            Settings
          </div>
       
        </div>
      )}
    </div>
  );
};

export default SideBar;

