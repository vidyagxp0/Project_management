import React, { useState } from "react";
import { FaFile, FaHome, FaRegFile } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import Header from "../Header/Header";
import { GoFileDirectory } from "react-icons/go";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

const FileManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(null);
  const [data, setData] = useState([
    { folderName: "text", date: "12-05-2024", time: "7:56" },
    { folderName: "Folder", date: "22-06-2024", time: "10:20" },
    { folderName: "Android", date: "23-06-2024", time: "12:56" },
    { folderName: "Data", date: "30-06-2024", time: "11:11" },
    { folderName: "Folder4", date: "15-06-2024", time: "12:14" },
    { folderName: "Folder5", date: "16-06-2024", time: "10:14" },
    { folderName: "Folder6", date: "18-06-2024", time: "08:04" },
    { folderName: "Folder7", date: "13-06-2024", time: "06:40" },
    { folderName: "Folder8", date: "11-06-2024", time: "03:41" },
  ]);

  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); 
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
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer py-3">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>File Manager</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">File Manager</div>
            <div className="flex gap-4">
              <div
                className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <RiAddFill />
              </div>
            </div>
          </div>
          <div className="border border-b-gray-300 my-2"></div>

          <div className="grid grid-cols-8 py-4 gap-5">
            <div className="col-span-2"></div>
            <div className="grid grid-cols-3 gap-5 col-span-6">
              {data.map((item, index) => {
                return (
                  <div className="border border-gray-400 shadow-2xl col-span-1 rounded ">
                    <div className="p-2 flex justify-end text-cyan-500">
                      {/* <FaEllipsisVertical size={20} /> */}
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            onClick={() => handleMenuClick(index)}
                            type="button"
                            className="flex items-center justify-center hover:border border-gray-200 rounded-full h-5 focus:outline-none"
                          >
                            <FaEllipsisVertical size={20} />
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
                                onClick={() => {
                                  handleDelete(index);
                                }}
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
                    <div className="px-6 py-3 flex justify-center items-center">
                      <GoFileDirectory className="text-cyan-500" size={100} />
                    </div>
                    <div className="border border-gray-300 mt-2"></div>
                    <div className="flex flex-col justify-center items-center gap-2 py-3">
                      <span className="font-medium">{item.folderName}</span>
                      <span className="text-gray-400">
                        Added: {item.date} {item.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Create Folder</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="group-input">
              <label>Folder Name</label>
              <input />
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

export default FileManager;
