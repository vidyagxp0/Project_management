import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import Header from "../Header/Header";
import { Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const ToDo = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(null);
  const [data, setData] = useState([
    { task: "Create a login page", date: "15-04-2024" },
    { task: "create an api for sign up", date: "18-05-2024" },
  ]);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>ToDos</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">ToDo</div>
            <div className="flex gap-4">
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
                <RiAddFill onClick={() => setIsOpen(true)} />
              </div>
            </div>
          </div>
          <div className="border border-b-gray-300 my-2"></div>
          <div className="p-2 grid grid-cols-2 gap-10">
            <div className="shadow-2xl p-2">
              <span>Open</span>
              <div>
                {data.map((item, index) => {
                  return (
                    <div className="p-2 mt-2 border border-gray-500 rounded-lg flex justify-between items-center">
                      <div className="flex flex-col">
                        {" "}
                        <span className="font-medium">{item.task}</span>
                        <span className="text-gray-400">{item.date}</span>
                      </div>
                      <div>
                        <div className="relative inline-block text-left">
                          <div>
                            <button
                              onClick={() => handleMenuClick(index)}
                              type="button"
                              className="flex items-center p-2 justify-center hover:bg-slate-100 hover:border border-gray-200 rounded-full  focus:outline-none"
                            >
                              <BsThreeDotsVertical />
                            </button>
                          </div>
                          {/* Menu */}
                          {showMenu === index && (
                            <div className="origin-top-right absolute z-10 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="shadow-2xl p-2">
              <span>Completed</span>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>ToDo</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="group-input">
              <label>Description</label>
              <textarea />
            </div>

            <div className="group-input">
              <label>Due Date</label>
              <input type="date" />
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

export default ToDo;
