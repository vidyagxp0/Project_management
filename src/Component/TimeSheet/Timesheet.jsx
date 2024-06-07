import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaClock, FaHome, FaTree } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Paginations from "../Pagination/Paginations";

const Timesheet = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
const  [currentPage,setCurrentPage]=useState(1);
const [data,setData]=useState( [
  {
    project: "TMS",
    entry: " ",
    note: "",
    startTime: "25-12-2023",
    endTime: "25-12-2024",
    hours: "880",
  },
  {
    project: "QMS",
    entry: " ",
    note: "",
    startTime: "12-02-2024",
    endTime: "12-06-2024",
    hours: "120",
  },
  {
    project: "DMS",
    entry: "",
    note: "",
    startTime: "09-06-2023",
    endTime: "09-09-2023",
    hours: "360",
  },
  {
    project: "Ajio",
    entry: "",
    note: "",
    startTime: "15-06-2022",
    endTime: "18-08-2024",
    hours: "880",
  },
  {
    project: "Navin ",
    entry: "",
    note: "",
    startTime: "12-12-2023",
    endTime: "12-03-2024",
    hours: "180",
  },
])
  

  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {
    navigate("/add-defects");
  };

  const handleDelete = (index) => {
    const newData=[...data]
    newData.splice(index, 1)
    setData(newData)
    setShowMenu(null)
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const itemsPerPage=3;
  const totalItems=Math.ceil(data.length/itemsPerPage)
  const handlePageChange=(newPage)=>{
    setCurrentPage(newPage)
  }
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Timesheet</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Timesheet</div>
            <div className="flex gap-4">
              <div
                className="bg-emerald-100 flex gap-2 items-center p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => navigate("/holidays")}
              >
                <FaTree />
              </div>
              <div
                className="bg-emerald-100 flex gap-2 items-center p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => navigate("")}
              >
                <FaClock />
              </div>
              <div
                className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <RiAddFill />
              </div>
            </div>
          </div>
          <div className="border border-b-gray-300 my-2"></div>

          <div className="flex gap-3">
            <div className="group-input">
              <select>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="group-input">
              <select>
                <option>--Select Project--</option>
                <option>TMS</option>
                <option>DMS</option>
              </select>
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
                  <th>Project</th>
                  <th>Entry</th>
                  <th>Note</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Hours</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage).map((item, index) => {
                  return (
                    <tr>
                      <td>{item.project}</td>
                      <td>{item.entry}</td>
                      <td>{item.note}</td>
                      <td>{item.startTime}</td>
                      <td>{item.endTime}</td>
                      <td>{item.hours}</td>

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
          <Paginations onPageChange={handlePageChange} totalItems={totalItems} currentPage={currentPage}/>
        </div>
      </div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Timesheet</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Start Time</label>
                <input type="time" />
              </div>

              <div className="group-input">
                <label>End Time</label>
                <input type="time" />
              </div>
            </div>

            <div className="group-input">
              <label>Note</label>
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

export default Timesheet;
