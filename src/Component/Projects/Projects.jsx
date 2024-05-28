import React, { useState } from "react";
import Header from "../Header/Header";
import { FaFile, FaHome, FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiAddFill } from "react-icons/ri";
import { Avatar, AvatarGroup, LinearProgress } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

const Projects = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(null);
  const data = [
    {
      id: "abc001",
      projectName: "CMS",
      duration: { startDate: "22-05-2024", endDate: "25-05-2024" },
      progress: 5,
      creator: "",
      assignTo: [""],
      status: "Open",
    },
    {
      id: "abc002",
      projectName: "TMS",
      duration: { startDate: "22-05-2024", endDate: "25-05-2024" },
      progress: 10,
      creator: "",
      assignTo: [""],
      status: "In Progress",
    },
    {
      id: "abc003",
      projectName: "eBMR",
      duration: { startDate: "22-05-2024", endDate: "25-05-2024" },
      progress: 25,
      creator: "",
      assignTo: [""],
      status: "In Progress",
    },
    {
      id: "abc004",
      projectName: "eLogBook",
      duration: { startDate: "22-05-2024", endDate: "25-05-2024" },
      progress: 50,
      creator: "",
      assignTo: [ "",""     ],
      status: "Completed",
    },
    {
      id: "abc005",
      projectName: "LMS",
      duration: { startDate: "22-05-2024", endDate: "25-05-2024" },
      progress: 33,
      creator: "",
      assignTo: [""],
      status: "Open",
    },
  ];

  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {
  navigate('/add-projects')
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
          <span>Projects</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Projects</div>
            <div className="flex gap-4">
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
                <FaFile />
              </div>
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer ">
                <FaUpload />
              </div>
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
                <RiAddFill onClick={()=>navigate("/add-projects")} />
              </div>
            </div>
          </div>
          <div className="border border-b-gray-300 my-2"></div>

          <div className="flex gap-4">
            <div className="flex hover:shadow-2xl">
              <div className="bg-cyan-500  py-1 text-white px-6 rounded-l-lg">
                {" "}
                open{" "}
              </div>
              <div className="border border-cyan-500 px-3 flex items-center justify-center rounded-r-lg">
                70
              </div>
            </div>
            <div className="flex hover:shadow-2xl">
              <div className="bg-yellow-500  py-1 text-white px-6 rounded-l-lg">
                {" "}
                In Progress{" "}
              </div>
              <div className="border border-yellow-500 px-3 flex items-center justify-center rounded-r-lg">
                82
              </div>
            </div>
            <div className="flex hover:shadow-2xl">
              <div className="bg-gray-500  py-1 text-white px-6 rounded-l-lg">
                {" "}
                On Hold{" "}
              </div>
              <div className="border border-gray-500 px-3 flex items-center justify-center rounded-r-lg">
                26
              </div>
            </div>
            <div className="flex hover:shadow-2xl">
              <div className="bg-rose-500  py-1 text-white px-6 rounded-l-lg">
                {" "}
                Cancel{" "}
              </div>
              <div className="border border-rose-500 px-3 flex items-center justify-center rounded-r-lg">
                20
              </div>
            </div>
            <div className="flex hover:shadow-2xl">
              <div className="bg-green-500  py-1 text-white px-6 rounded-l-lg">
                {" "}
                Completed{" "}
              </div>
              <div className="border border-green-500 px-3 flex items-center justify-center rounded-r-lg">
                54
              </div>
            </div>
            <div className="flex hover:shadow-2xl">
              <div className="bg-red-500  py-1 text-white px-6 rounded-l-lg">
                {" "}
                Overdue{" "}
              </div>
              <div className="border border-red-500 px-3 flex items-center justify-center rounded-r-lg">
                198{" "}
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
                  <th>Project Name</th>
                  <th>Duration</th>
                  <th>Progress</th>
                  <th>Creator</th>
                  <th>Assign To</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.projectName}</td>
                      <td>
                        <div>
                          Start :{" "}
                          <span className="font-bold">
                            {item.duration.startDate}
                          </span>
                        </div>
                        <div>
                          End :
                          <span className="font-bold">
                            {item.duration.endDate}
                          </span>
                        </div>
                      </td>
                      <td> <LinearProgress variant="determinate" value={item.progress} /></td>
                      <td className="flex justify-center items-center">
                        <Avatar src={item.creator}></Avatar>
                      </td>
                      <td >
                        <AvatarGroup max={3} className="flex justify-center items-center">
                          {" "}
                          {item.assignTo.map((itm) => {
                            return <Avatar src={itm}></Avatar>;
                          })}
                        </AvatarGroup>
                      </td>
                      <td><div className={` py-1 text-white min-w-10 rounded-full ${item.status==="In Progress" ? "bg-yellow-400":item.status==="Open"?"bg-cyan-500" :item.status==="Completed"?"bg-green-500":""}`}>{item.status}</div></td>
                      <td>   <div className="relative inline-block text-left">
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
                      <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 px-2 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
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
  );
};

export default Projects;
