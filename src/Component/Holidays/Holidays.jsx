import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import Paginations from "../Pagination/Paginations";

const Holidays = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage,setCurrentPage]=useState(1)
const [data,setData]=useState(  [
  {
    date: "15-05-2024",
    day: " Monday ",
    eventName: "Pongal",
    location: "Hydrabad",
    color: "gray",
  },
  {
    date: "28-10-2024",
    day: "Friday ",
    eventName: "Diwali",
    location: "All India",
    color: "rose",
  },
  {
    date: "22-03-2025",
    day: "Tuesday",
    eventName: "Holi",
    location: "South India",
    color: "red",
  },
  {
    date: "24-06-2024",
    day: "Saturday",
    eventName: "Mahatma Gandhi Jayanti",
    location: "Delhi",
    color: "indigo",
  },
  {
    date: "30-08-2024",
    day: "Sunday",
    eventName: "Ganesh chaturthi",
    location: "Mumbai",
    color: "emerald",
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
  newData.splice(index,1)
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
          <span>Holidays</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Holidays</div>
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
                  <th>Date</th>
                  <th>Day</th>
                  <th>Event Name</th>
                  <th>Location</th>
                  <th>Color</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage).map((item, index) => {
                  return (
                    <tr>
                      <td>{item.date}</td>
                      <td>{item.day}</td>
                      <td>{item.eventName}</td>
                      <td>{item.location}</td>
                      <td className="flex justify-center items-center">
                        <div
                          className={`bg-${item.color}-400 text-${item.color}-400 px-2 py-1`}
                        >
                          p
                        </div>
                      </td>

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
            <div>Holidays</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Event Name</label>
                <input />
              </div>

              <div className="group-input">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="group-input">
                <label>Color</label>
                <input />
              </div>

              <div className="group-input">
                <label>Location</label>
                <input type="" />
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

export default Holidays;
