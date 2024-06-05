import React from "react";
import Header from "../Header/Header";
import { FaHome, FaListUl } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { BsHandIndexThumb } from "react-icons/bs";

const TaskBoards = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer py-3">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Task Boards</span>
        </div>
        <div className="py-4 px-2 shadow-2xl">
          <div className="flex justify-between ">
            <div className="text-[22px] font-semibold">Task Boards</div>
            <div className="flex gap-4">
              <div className="">
                <select className="border border-gray-400 p-1 rounded">
                  <option>--Select Project--</option>
                </select>
              </div>
              <div
                className="bg-emerald-100 p-2 flex gap-2 items-center rounded text-emerald-500 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <FaListUl /> <span>List</span>
              </div>
              <div
                className="bg-emerald-100 flex items-center p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <RiAddFill />
              </div>
            </div>
          </div>
          <div className="border border-b-gray-300 my-2"></div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="p-2">
            <div className="flex gap-3 items-center">
              <FaListUl size={20} /> <span className="text-[24px]">To Dos</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <BsHandIndexThumb />
              <span>Drag task between list</span>
            </div>
            <div className="p-2 shadow-2xl my-2"></div>
          </div>
          <div className="p-2">
            <div className="flex gap-3 items-center">
              <GiProgression size={20} />{" "}
              <span className="text-[24px]">In Progress</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <BsHandIndexThumb />
              <span>Drag task between list</span>
            </div>
            <div className="p-2 shadow-2xl my-2"></div>

          </div>
          <div className="p-2">
            <div className="flex gap-3 items-center">
              <FaListUl size={20} />{" "}
              <span className="text-[24px]">Completed</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <BsHandIndexThumb />
              <span>Drag task between list</span>
            </div>
            <div className="p-2 shadow-2xl my-2"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoards;
