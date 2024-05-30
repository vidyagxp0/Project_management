import React, { useState } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiAddFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Checkbox, Dialog } from "@mui/material";

const Departments = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const AdministrationData = [
    { d1: "1", designation: "Admin" },
    { d1: "1", designation: "sales employee" },
    { d1: "1", designation: "Manager" },
    { d1: "1", designation: "HR" },
  ];
  const roles = [
    { role: "Admin" },
    { role: "Sales Employee" },
    { role: "Manager" },
    { role: "Project Manager" },
    { role: "Tester" },
    { role: "Hr Manager" },
    { role: "Personal" },
    { role: "Consultant" },
    { role: "User" },
    { role: "Analyst" },
    { role: "Director" },
    { role: "Chief Operator" },
    { role: "Global" },
  

  ];
  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {};
  const handleClose = () => {
    setIsOpen(false);
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
          <span>Departments</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Departments</div>
            <div className="flex gap-4">
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
                <RiAddFill
                  onClick={() => {
                    setIsOpen(true);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border border-b-gray-300 my-2"></div>

          <div className="grid grid-cols-2 gap-5 py-3">
            <div className="shadow-2xl">
              <div className="flex justify-between items-center p-2 ">
                <span className="font-medium">Administration</span>
                <button className="p-2 bg-cyan-400 text-white rounded-3xl ">
                  Actions
                </button>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>D1</th>
                    <th>Designation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {AdministrationData.map((item, index) => {
                    return (
                      <tr>
                        <td>{item.d1}</td>
                        <td>{item.designation}</td>
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
            <div className="shadow-2xl">
              <div className="flex justify-between items-center p-2 ">
                <span className="font-medium">Project</span>
                <button className="p-2 bg-cyan-400 text-white rounded-3xl ">
                  Actions
                </button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>D1</th>
                    <th>Designation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Departments</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="group-input">
              <label>Department Name</label>
              <input />
            </div>

            <div className="group-input">
              <label>Department Roles</label>
            {roles.map((item)=> <> <Checkbox /> <span>{item.role}</span></>)}
            </div>
          </div>
          <div className="border-b-2 border-gray-400"></div>
          <div className="p-4">
            <div className="flex gap-5 justify-end">
              <button
                className="border border-gray-400 rounded-full px-4 py-2"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Departments;
