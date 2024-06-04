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
              <div className="border border-gray-400 shadow-2xl col-span-1 rounded ">
                <div className="p-2 flex justify-end text-cyan-500">
                  <FaEllipsisVertical size={20} />
                </div>
                <div className="px-6 py-3 flex justify-center items-center">
                  <GoFileDirectory className="text-cyan-500" size={100} />
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="flex flex-col justify-center items-center gap-2 py-3">
                  <span className="font-medium">Folder</span>
                  <span className="text-gray-400">Added: 17-09-2022 17:38</span>
                </div>
              </div>
              <div className="border border-gray-400 shadow-2xl col-span-1 rounded">
                <div className="p-2 flex justify-end text-cyan-500">
                  <FaEllipsisVertical size={20} />
                </div>
                <div className="px-6 py-3 flex justify-center items-center">
                  <GoFileDirectory className="text-cyan-500" size={100} />
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="flex flex-col justify-center items-center gap-2 py-3">
                  <span className="font-medium">Folder</span>
                  <span className="text-gray-400">Added: 17-09-2022 17:38</span>
                </div>
              </div>
              <div className="border border-gray-400 shadow-2xl col-span-1 rounded ">
                <div className="p-2 flex justify-end text-cyan-500">
                  <FaEllipsisVertical size={20} />
                </div>
                <div className="px-6 py-3 flex justify-center items-center">
                  <GoFileDirectory className="text-cyan-500" size={100} />
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="flex flex-col justify-center items-center gap-2 py-3">
                  <span className="font-medium">Folder1</span>
                  <span className="text-gray-400">Added: 17-09-2022 17:38</span>
                </div>
              </div>
              <div className="border border-gray-400 shadow-2xl col-span-1 rounded">
                <div className="p-2 flex justify-end text-cyan-500">
                  <FaEllipsisVertical size={20} />
                </div>
                <div className="px-6 py-3 flex justify-center items-center">
                  <GoFileDirectory className="text-cyan-500" size={100} />
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="flex flex-col justify-center items-center gap-2 py-3">
                  <span className="font-medium">Folder2</span>
                  <span className="text-gray-400">Added: 17-09-2022 17:38</span>
                </div>
              </div>
              <div className="border border-gray-400 shadow-2xl col-span-1 rounded">
                <div className="p-2 flex justify-end text-cyan-500">
                  <FaEllipsisVertical size={20} />
                </div>
                <div className="px-6 py-3 flex justify-center items-center">
                  <GoFileDirectory className="text-cyan-500" size={100} />
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="flex flex-col justify-center items-center gap-2 py-3">
                  <span className="font-medium">Folder3</span>
                  <span className="text-gray-400">Added: 17-09-2022 17:38</span>
                </div>
              </div>
              <div className="border border-gray-400 shadow-2xl col-span-1 rounded">
                <div className="p-2 flex justify-end text-cyan-500">
                  <FaEllipsisVertical size={20} />
                </div>
                <div className="px-6 py-3 flex justify-center items-center">
                  <GoFileDirectory className="text-cyan-500" size={100} />
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="flex flex-col justify-center items-center gap-2 py-3">
                  <span className="font-medium">Folder4</span>
                  <span className="text-gray-400">Added: 17-09-2022 17:38</span>
                </div>
              </div>
              <div className="border border-gray-400 shadow-2xl col-span-1 rounded">
                <div className="p-2 flex justify-end text-cyan-500">
                  <FaEllipsisVertical size={20} />
                </div>
                <div className="px-6 py-3 flex justify-center items-center">
                  <GoFileDirectory className="text-cyan-500" size={100} />
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="flex flex-col justify-center items-center gap-2 py-3">
                  <span className="font-medium">Folder5</span>
                  <span className="text-gray-400">Added: 17-09-2022 17:38</span>
                </div>
              </div>
              <div className="border border-gray-400 shadow-2xl col-span-1 rounded">
                <div className="p-2 flex justify-end text-cyan-500">
                  <FaEllipsisVertical size={20} />
                </div>
                <div className="px-6 py-3 flex justify-center items-center">
                  <GoFileDirectory className="text-cyan-500" size={100} />
                </div>
                <div className="border border-gray-300 mt-2"></div>
                <div className="flex flex-col justify-center items-center gap-2 py-3">
                  <span className="font-medium">Folder6</span>
                  <span className="text-gray-400">Added: 17-09-2022 17:38</span>
                </div>
              </div>
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
