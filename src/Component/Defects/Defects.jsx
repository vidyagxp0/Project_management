import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaFile, FaHome, FaUpload } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Defects = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(null);
    const [isDark, setIsDark] = useState(false);
    const data = [
      {
        id: "abc001",
        defectName: "Fixed Unassigned placeholder translation issue in 6 pages. ",
        startDate: "22-05-2024",
        endDate: "25-05-2024",
        hours: 5,
        Assigned: "",
        severity: "High",
        status: "Open",
      },
      {
        id: "abc002",
        defectName: "Increase meeting title max length. ",
        startDate: "22-05-2024",
        endDate: "25-05-2024",
        hours: 10,
        Assigned: "",
        severity: "Medium",
        status: "In Progress",
      },
      {
        id: "abc003",
        defectName: "report",
        startDate: "22-05-2024",
        endDate: "25-05-2024",
        hours: 25,
        Assigned: "",
        severity: "High",
        status: "In Progress",
      },
      {
        id: "abc004",
        defectName: "Api",
        startDate: "22-05-2024",
        endDate: "25-05-2024",
        hours: 50,
        Assigned: "",
        severity: "Medium",
        status: "Completed",
      },
      {
        id: "abc005",
        defectName: "ui",
        startDate: "22-05-2024",
        endDate: "25-05-2024",
        hours: 33,
        Assigned: "",
        severity: "Urjent",
        status: "Open",
      },
    ];
  
    const handleMenuClick = (index) => {
      setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
    };
  
    const handleEdit = () => {
      navigate("/add-defects");
    };
  
    const handleDelete = () => {
      // Implement delete functionality
    };
  return (
    <div>
    <Header />
    <div className="p-4">
      <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
        <FaHome onClick={() => navigate("/dashboard")} />
        <span>/</span>
        <span>Defects</span>
      </div>
      <div className="p-4 shadow-2xl">
        <div className="flex justify-between p-2">
          <div className="text-[22px] font-semibold">Defects</div>
          <div className="flex gap-4">
          
            <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
              <RiAddFill onClick={() => navigate("/add-defects")} />
            </div>
          </div>
        </div>
        <div className="border border-b-gray-300 my-2"></div>

        <div className="flex gap-4">
          <div className="flex">
            <div
              className={`px-3 py-1 text-white cursor-pointer rounded-l-lg ${
                isDark === true ? "bg-gray-500" : "bg-gray-400"
              }`}
              onClick={() => setIsDark(!isDark)}
            >
              All
            </div>
            <div
              className={`px-3 py-1 text-white  cursor-pointer rounded-r-lg ${
                isDark === false ? "bg-gray-500" : "bg-gray-400"
              }`}
              onClick={() => setIsDark(!isDark)}
            >
              My
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-cyan-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
              open{" "}
            </div>
            <div className="border border-cyan-500 px-3 flex items-center justify-center rounded-r-lg">
              70
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer ">
            <div className="bg-yellow-700  py-1 text-white px-6 rounded-l-lg">
              {" "}
              Assigned{" "}
            </div>
            <div className="border border-yellow-700 px-3 flex items-center justify-center rounded-r-lg">
              1
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer ">
            <div className="bg-yellow-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
              In Progress{" "}
            </div>
            <div className="border border-yellow-500 px-3 flex items-center justify-center rounded-r-lg">
              82
            </div>
          </div>

          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-green-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
             Solved
            </div>
            <div className="border border-green-500 px-3 flex items-center justify-center rounded-r-lg">
              54
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-red-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
              Overdue{" "}
            </div>
            <div className="border border-red-500 px-3 flex items-center justify-center rounded-r-lg">
              8{" "}
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <div>
            <label> Show </label>
            <input className="border border-b-black" />
          </div>

          <div>
            <label>Search </label>
            <input className="border border-b-black" />
          </div>
        </div>

        <div className="py-4">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th className="w-[200px]">Defect Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Hours</th>
                <th>Assigned</th>
                <th>Severity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.defectName}</td>
                    <td>
                      {item.startDate}
                    </td>
                    <td>{item.endDate}</td>
                    <td>{item.hours}</td>
                   
                                          <td className="flex justify-center items-center">
                      <Avatar src={item.Assigned}></Avatar>
                    </td>
                    <td>
                 <div   className={` py-1 text-white min-w-10 rounded-full ${
                          item.severity === "Medium"
                            ? "bg-yellow-400"
                            : item.severity === "High"
                            ? "bg-red-500"
                            : item.severity === "Urjent"
                            ? "bg-orange-500"
                            : ""
                        }`}>{item.severity}</div>
                    </td>
                    <td>
                      <div
                        className={` py-1 text-white min-w-10 rounded-full ${
                          item.status === "In Progress"
                            ? "bg-yellow-400"
                            : item.status === "Open"
                            ? "bg-cyan-500"
                            : item.status === "Completed"
                            ? "bg-green-500"
                            : ""
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            onClick={() => handleMenuClick(index)}
                            type="button"
                            className="flex items-center justify-center hover:border border-gray-200 rounded-full h-5 focus:outline-none"
                          >
                            <BsThreeDotsVertical />
                          </button>
                        </div>
                        {/* Menu */}
                        {showMenu === index && (
                          <div className="origin-top-right z-10 absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div
                              className="py-1 px-2 "
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <button
                                onClick={handleEdit}
                                className="block w-full  px-4 py-2 rounded text-sm text-center text-gray-700 hover:bg-yellow-300 hover:text-white"
                                role="menuitem"
                              >
                                Edit
                              </button>
                              <button
                                onClick={handleDelete}
                                className="block w-full text-center px-4 py-2 text-sm rounded text-gray-700 hover:bg-red-500 hover:text-white"
                                role="menuitem"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Defects
