import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiType } from "react-icons/fi";
import { FaCodePullRequest } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { Checkbox, Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

const Leaves = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      id: "abc001",
      user: "Pankaj Jat ",
      requestDate: "22-05-2024",
      leaveDate: "25-05-2024",
      leave: "fever",
      duration: "Full Day",
      status: "Approved",
    },
    {
      id: "abc001",
      user: "Farhan ",
      requestDate: "30-05-2024",
      leaveDate: "31-05-2024",
      leave: "Heart surgery",
      duration: "First Half Day",
      status: "Approved",
    },
    {
      id: "abc001",
      user: "Mayank ",
      requestDate: "01-06-2024",
      leaveDate: "03-06-2024",
      leave: "Stone",
      duration: "Second half ",
      status: "Rejected",
    },
    {
      id: "abc001",
      user: "Amit Patel ",
      requestDate: "05-06-2024",
      leaveDate: "10-06-2024",
      leave: "Emergency",
      duration: "5 days",
      status: "Cancel",
    },
    {
      id: "abc001",
      user: "Gaurav",
      requestDate: "07-09-2024",
      leaveDate: "10-10-2024",
      leave: "Typhoid",
      duration: "10 Days",
      status: "Rejected",
    },
  ];

  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {};

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
          <span>Leaves</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Leaves</div>
            <div className="flex gap-4">
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer" onClick={() => navigate("/leave-type")}>
                <FiType  />
              </div>
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer" onClick={() => navigate("/leave-request")}>
                <FaCodePullRequest  />
              </div>
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer" onClick={() => navigate("/leave-report")} >
                <HiDocumentReport />
              </div>
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer" onClick={() => setIsOpen(true)}>
                <RiAddFill  />
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
                  <th>Id</th>
                  <th>User</th>
                  <th>Request Date</th>
                  <th>Leave Date </th>
                  <th>Leave</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.user}</td>
                      <td>{item.requestDate}</td>
                      <td>{item.leaveDate}</td>
                      <td>{item.leave}</td>
                      <td>{item.duration}</td>
                      <td>
                        <div
                          className={` py-1 text-white min-w-10 rounded-full ${
                            item.status === "Approved"
                              ? "bg-green-400"
                              : item.status === "Cancel"
                              ? "bg-red-500"
                              : item.status === "Rejected"
                              ? "bg-red-500"
                              : ""
                          }`}
                        >
                          {item.status}
                        </div>
                      </td>

                      <td>
                        -{" "}
                        {/* <div className="relative inline-block text-left">
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
                      </div> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Teams</div>
            <div>
              <RxCross1 onClick={() => setIsOpen(false)} />
            </div>
          </div>
          <div className="p-4">
            <div className="dual-group-input">
              <div className="group-input">
                <label>User</label>
                <select>
                  <option>--Select User---</option>
                  <option>Pankaj jat</option>
                  <option>Gaurav</option>
                  <option>Mayank</option>
                </select>
              </div>

              <div className="group-input">
                <label>Leave</label>
                <select>
                  <option>--Select Leave Type---</option>
                  <option>Casual</option>
                  <option>Paid</option>
                  <option>Annual Leave</option>
                </select>
              </div>
            </div>

            <div className="dual-group-input">
              <div className="group-input">
                <label>Duration</label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <Checkbox />
                    <span>Single</span>
                  </div>
                  <div className="flex gap-3">
                    <Checkbox />
                    <span>Multiple</span>
                  </div>
                  <div className="flex gap-3">
                    <Checkbox />
                    <span>Half Day</span>
                  </div>
                </div>
              </div>
              <div className="group-input">
                <label>Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="group-input">
              <label>Reason</label>
              <textarea />
            </div>
            <div className="group-input">
              <label>Attachments</label>
              <input type="file"/>
            </div>
          </div>
          <div className="border-b-2 border-gray-400"></div>
          <div className="p-4">
            <div className="flex gap-5 justify-end">
              <button
                className="border border-gray-400 rounded-full px-4 py-2"
                onClick={() => setIsOpen(false)}
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

export default Leaves;
