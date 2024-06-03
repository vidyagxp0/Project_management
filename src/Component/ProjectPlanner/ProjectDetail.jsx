import React, { useState } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Avatar, LinearProgress } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(null);
  const sprintData = [
    {
      name: "Sprint 1",
      type: "Sprint",
      startDate: "",
      endDate: "",
      hours: "",
      status: "Open",
    },
  ];

  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {
    navigate("/add-task");
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
          <span onClick={() => navigate("/project-planner")}>
            Project Planner
          </span>
          <span>/</span>
          <span>Detail</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[18px] flex gap-2 font-medium">
                <span className="text-cyan-400">P001</span>
                <span>Pankaj Jat</span>
            </div>
            <div className="flex gap-4">
              <div
                className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => {}}
              >
                <RiAddFill />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2 py-3">
            <div className="p-3 shadow-2xl">
              <div className="group-input">
                <label>Version</label>
                <input />
              </div>
              <div className="group-input">
                <label>Created By</label>
                <Avatar />
              </div>
              <div className="group-input">
                <label>Assigned To</label>
                <Avatar />
              </div>

              <div className="group-input">
                <label>Completed</label>
                <LinearProgress value={60} />
              </div>
            </div>

            <div className="mt-3 p-3 shadow-2xl">
              <div className="group-input">
                <label>Client Name</label>
                <input />
              </div>
              <div className="group-input">
                <label>Start Date</label>
                <input type="date" />
              </div>
              <div className="group-input">
                <label>End Date</label>
                <input />
              </div>
              <div className="group-input">
                <label>Estimate Hours</label>
                <input type="time" />
              </div>
              <div className="group-input">
                <label>Actual Hours</label>
                <input type="time" />
              </div>
              <div className="group-input">
                <label>Demo URL</label>
                <input />
              </div>
              <div className="group-input">
                <label>Billing Type</label>
                <input />
              </div>
              <div className="group-input">
                <label>Budget</label>
                <input />
              </div>
              <div className="group-input">
                <label>Created</label>
                <input />
              </div>
              <div className="group-input">
                <label>Updated</label>
                <input />
              </div>
            </div>
          </div>

          <div className="col-span-3  py-3">
            <div className="p-3 shadow-2xl">
              <label className="text-[22px]  font-semibold">Description</label>

              <div className="group-input pt-2">
                <input />
              </div>
            </div>

            <div className="p-3 shadow-2xl mt-3">
              <div className="py-2 text-[22px] font-semibold ">
                Custom Fields
              </div>
              <div className="flex gap-3">
                <div className="group-input">
                  <label>Milestone</label>
                  <input />
                </div>
                <div className="group-input">
                  <label>Milestone Target</label>
                  <input />
                </div>
              </div>
            </div>

            <div className="p-3 shadow-2xl mt-3">
              <div className="flex justify-between p-2">
                <div className="text-[22px] font-semibold">Sprint</div>
                <div className="flex gap-4">
                  <div
                    className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
                    onClick={() => {}}
                  >
                    <RiAddFill />
                  </div>
                </div>
              </div>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Responsible</th>
                      <th>Type</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Hours</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sprintData?.map((item, index) => {
                      return (
                        <tr>
                          <td> {item.name}</td>
                          <td>
                            <Avatar />
                          </td>
                          <td>{item.type}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            {" "}
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
                                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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

            <div className="p-3 shadow-2xl mt-3">
              <div className="flex justify-between p-2">
                <div className="text-[22px] font-semibold">Task</div>
                <div className="flex gap-4">
                  <div
                    className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
                    onClick={() => {}}
                  >
                    <RiAddFill />
                  </div>
                </div>
              </div>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Responsible</th>
                      <th>Type</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Hours</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sprintData?.map((item, index) => {
                      return (
                        <tr>
                          <td> {item.name}</td>
                          <td>
                            <Avatar />
                          </td>
                          <td>{item.type}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            {" "}
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
                                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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

            <div className="p-3 shadow-2xl mt-3">
              <div className="flex justify-between p-2">
                <div className="text-[22px] font-semibold">Story</div>
                <div className="flex gap-4">
                  <div
                    className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
                    onClick={() => {}}
                  >
                    <RiAddFill />
                  </div>
                </div>
              </div>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Responsible</th>
                      <th>Type</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Hours</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sprintData?.map((item, index) => {
                      return (
                        <tr>
                          <td> {item.name}</td>
                          <td>
                            <Avatar />
                          </td>
                          <td>{item.type}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            {" "}
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
                                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
      </div>
    </div>
  );
};

export default ProjectDetail;
