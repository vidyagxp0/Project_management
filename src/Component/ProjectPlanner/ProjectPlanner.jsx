import React, { useState } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CgTemplate } from "react-icons/cg";
import { VscTasklist } from "react-icons/vsc";
import { MdOutlineStorage } from "react-icons/md";
import { Avatar, Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

const ProjectPlanner = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer pb-3">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Project Planner</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Project Planner</div>
            <div className="flex gap-4">
              <div
                className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <RiAddFill />
              </div>
            </div>
          </div>
          {/* <div className="border border-b-gray-300 my-2"></div> */}
        </div>
        <div className="flex gap-4 pt-4">
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-cyan-500  py-1 text-white px-6 rounded-l-lg">
              open
            </div>
            <div className="border border-cyan-500 px-3 flex items-center justify-center rounded-r-lg">
              70
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer ">
            <div className="bg-yellow-500  py-1 text-white px-6 rounded-l-lg">
              In Progress
            </div>
            <div className="border border-yellow-500 px-3 flex items-center justify-center rounded-r-lg">
              82
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-gray-500  py-1 text-white px-6 rounded-l-lg">
              On Hold
            </div>
            <div className="border border-gray-500 px-3 flex items-center justify-center rounded-r-lg">
              04
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-rose-500  py-1 text-white px-6 rounded-l-lg">
              Cancel
            </div>
            <div className="border border-rose-500 px-3 flex items-center justify-center rounded-r-lg">
              30
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-green-500  py-1 text-white px-6 rounded-l-lg">
              Completed
            </div>
            <div className="border border-green-500 px-3 flex items-center justify-center rounded-r-lg">
              54
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-red-500  py-1 text-white px-6 rounded-l-lg">
              Overdue
            </div>
            <div className="border border-red-500 px-3 flex items-center justify-center rounded-r-lg">
              198
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 py-3">
          <div className="p-8 shadow-2xl flex flex-col gap-2">
            <div className="flex gap-3">
              <span
                className="text-cyan-500 cursor-pointer"
                onClick={() => navigate("/project-detail")}
              >
                #P001
              </span>
              <span>- Pankaj Jat</span>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <span className="font-medium">Start Date :</span>
                <span>03-06-2024</span>
              </div>
              <div className="flex">
                <span className="font-medium">End Date :</span>
                <span>10-06-2024</span>
              </div>
            </div>

            <div className="flex gap-2  text-[18px]">
              <div className="flex items-center gap-1">
                <span>1</span>
                <CgTemplate />
              </div>
              <div className="flex items-center gap-1">
                <span>3</span>
                <VscTasklist />
              </div>
              <div className="flex items-center gap-1">
                <span>0</span>
                <MdOutlineStorage />
              </div>
            </div>
            <div className="flex justify-between">
              <Avatar />
              <div className="bg-yellow-400 px-2 hover:bg-yellow-700 text-white rounded flex items-center">
                Inprogress
              </div>
              <button
                className="bg-cyan-400 px-2 hover:bg-cyan-700  text-white rounded"
                onClick={() => navigate("/project-detail")}
              >
                View More
              </button>
            </div>
          </div>
          <div className="p-8 shadow-2xl flex flex-col gap-2">
            <div className="flex gap-3">
              <span
                className="text-cyan-500 cursor-pointer"
                onClick={() => navigate("/project-detail")}
              >
                #P002
              </span>
              <span>- Pankaj Jat</span>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <span className="font-medium">Start Date :</span>
                <span>03-06-2024</span>
              </div>
              <div className="flex">
                <span className="font-medium">End Date :</span>
                <span>10-06-2024</span>
              </div>
            </div>

            <div className="flex gap-2 text-[18px]">
              <div className="flex items-center gap-1">
                <span>1</span>
                <CgTemplate />
              </div>
              <div className="flex items-center gap-1">
                <span>3</span>
                <VscTasklist />
              </div>
              <div className="flex items-center gap-1">
                <span>0</span>
                <MdOutlineStorage />
              </div>
            </div>
            <div className="flex justify-between">
              <Avatar />
              <div className="bg-green-400 px-2 hover:bg-green-700 text-white rounded flex items-center">
                Completed
              </div>
              <button
                className="bg-cyan-400 px-2 hover:bg-cyan-700  text-white rounded"
                onClick={() => navigate("/project-detail")}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[580px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Create Project</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Project Name</label>
                <input />
              </div>

              <div className="group-input">
                <label>Version</label>
                <input />
              </div>
              <div className="group-input">
                <label>Start Date </label>
                <input type="date" />
              </div>

              <div className="group-input">
                <label>End Date</label>
                <input type="date" />
              </div>
              <div className="group-input">
                <label>Client Name</label>
                <select>
                  <option>--Select Client--</option>
                  <option>Pankaj Jat</option>
                  <option>Gaurav</option>
                  <option>Mayank</option>
                </select>
              </div>

              <div className="group-input">
                <label>Estimate Hours</label>
                <input type="time" />
              </div>

              <div className="group-input">
                <label>Status </label>
                <select>
                  <option>--Select Status--</option>
                  <option> Open</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                </select>
              </div>

              <div className="group-input">
                <label>Assigned Group</label>
                <select>
                  <option>--Select Assigned Group--</option>
                  <option>React</option>
                  <option>Laravel</option>
                  <option>Track Wise</option>
                </select>
              </div>
              <div className="group-input">
                <label>Assigned To </label>
                <select>
                  <option>Pankaj Jat</option>
                  <option>Gaurav</option>
                  <option>Mayank</option>
                </select>
              </div>

              <div className="group-input">
                <label>Demo URL</label>
                <input />
              </div>

              <div className="group-input">
                <label>Billing Type</label>
                <select>
                  <option>Fixed Rate</option>
                  <option>Hourly Rate</option>
                </select>
              </div>

              <div className="group-input">
                <label>Fixed Price</label>
                <input />
              </div>
            </div>

            <div className="group-input">
              <label>Project Logo</label>
              <input type="file" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="group-input">
                <label>Milestone</label>
                <input />
              </div>
              <div className="group-input">
                <label>Milestone Target</label>
                <input type="date" />
              </div>
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

export default ProjectPlanner;
