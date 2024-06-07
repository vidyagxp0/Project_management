import React, { useState } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { Avatar, Dialog } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import Paginations from "../Pagination/Paginations";

const Roles = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(null);
  const [data, setData] = useState([
    {
      id: "abc001",
      roleName: "Fixed Unassigned placeholder translation issue in 6 pages. ",
      roleSlug: "	admin",
      description: "User has access to all system functionality.",
    },
    {
      id: "abc002",
      roleName: "Increase meeting title max length. ",
      roleSlug: "	sales_employee",
      description: "Sale   ",
    },
    {
      id: "abc003",
      roleName: "report",
      roleSlug: "manager",
      description: "Client role. ",
    },
    {
      id: "abc004",
      roleName: "Api",
      roleSlug: "	project_manager",
      description: "Project Manager role.  ",
    },
    {
      id: "abc005",
      roleName: "ui",
      roleSlug: "	hr_manager",
      description: "Human Resource   ",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {};

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setShowMenu(null);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Roles</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Roles</div>
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
                  <th>Role Name</th>
                  <th className="w-[200px]">Role Slug</th>
                  <th>Description </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{item.roleName}</td>
                      <td>{item.roleSlug}</td>
                      <td>{item.description}</td>
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
                                  onClick={() => handleDelete(index)}
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
                  ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <Paginations
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Roles</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="group-input">
              <label>Role Name</label>
              <input />
            </div>

            <div className="group-input">
              <label>Description</label>
              <textarea />
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

export default Roles;
