import { Dialog } from '@mui/material';
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import Header from '../Header/Header';
import { SiHandshakeProtocol } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Paginations from '../Pagination/Paginations';

const Appointments = () => {
    const navigate=useNavigate()
    const [showMenu, setShowMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  const [currentPage,setCurrentPage]=useState()
  const [data,setData]=useState( [
    {
      title: "",
      provider: "Pankaj Jat",
      location: "Indore",
      start: "14-06-2024",
      end: "14-06-2024",
      hours: "2.30",
      status: "Scheduled",
    },
    {
      title: "",
      provider: "Amit Patel",
      location: "Indore",
      start: "04-06-2024",
      end: "04-06-2024",
      hours: "2",
      status: "In Progress",
    },
    {
      title: "",
      provider: "Gaurav",
      location: "Indore",
      start: "24-06-2024",
      end: "24-06-2024",
      hours: "3",
      status: "Completed",
    },
    {
      title: "",
      provider: "Mayank",
      location: "Indore",
      start: "",
      end: "",
      hours: "",
      status: "Scheduled",
    },
  ])
   
    const handleMenuClick = (index) => {
      setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
    };
  
    const handleEdit = () => {
      navigate("/add-task");
    };
  
    const handleDelete = (index) => {
      const newData=[...data]
      newData.splice(index ,1)
      setData(newData)
      setShowMenu(null)
    };
    const handlePageChange=(newPage)=>{
      setCurrentPage(newPage)
    }
    const handleClose = () => {
      setIsOpen(false);
    };
    const itemsPerPage=3;
    const totalItems=Math.ceil(data.length/itemsPerPage)
  return (
    <div>
    <Header />
    <div className="p-4">
      <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
        <FaHome onClick={() => navigate("/dashboard")} />
        <span>/</span>
        <span>Appointments</span>
      </div>
      <div className="p-4 shadow-2xl">
        <div className="flex justify-between p-2">
          <div className="text-[22px] font-semibold">Appointments</div>
          <div className="flex gap-4">
          <div
              className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
              onClick={() => {
                navigate("/providers");
              }}
            >
              <SiHandshakeProtocol />
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

        <div className="flex gap-4">
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-cyan-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
              open{" "}
            </div>
            <div className="border border-cyan-500 px-3 flex items-center justify-center rounded-r-lg">
              70
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer ">
            <div className="bg-yellow-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
              In Progress{" "}
            </div>
            <div className="border border-yellow-500 px-3 flex items-center justify-center rounded-r-lg">
              82
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-rose-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
              Cancel{" "}
            </div>
            <div className="border border-rose-500 px-3 flex items-center justify-center rounded-r-lg">
              4
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-green-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
              Completed{" "}
            </div>
            <div className="border border-green-500 px-3 flex items-center justify-center rounded-r-lg">
              54
            </div>
          </div>
          <div className="flex hover:shadow-2xl cursor-pointer">
            <div className="bg-gray-500  py-1 text-white px-6 rounded-l-lg">
              {" "}
              Total{" "}
            </div>
            <div className="border border-gray-500 px-3 flex items-center justify-center rounded-r-lg">
              128{" "}
            </div>
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

        <div className="py-3">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Provider</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage).map((item, index) => {
                return (
                  <tr>
                    <td>A00{index + 1}</td>
                    <td>{item.title}</td>
                    
                    <td>{item.provider} </td>
                    <td>{item.start}</td>
                    <td>{item.end}</td>
                   <td>{item.location}</td>
                    <td>
                      {" "}
                      <div
                        className={` py-1 text-white min-w-10 rounded-full ${
                          item.status === "In Progress"
                            ? "bg-yellow-400"
                            : item.status === "Scheduled"
                            ? "bg-cyan-500"
                            : item.status === "Completed"
                            ? "bg-green-500"
                            : ""
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>
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
          <div>Appointments</div>
          <div>
            <RxCross1 className="cursor-pointer" onClick={handleClose} />
          </div>
        </div>
        <div className="p-4">
          <div className="group-input">
            <label>Title </label>
            <input />
          </div>
          <div className="dual-group-input">
          <div className="group-input">
              <label>Provider </label>
              <select>
                <option>--Select Provider--</option>
                <option>Pankaj Jat</option>
                <option>Mayank</option>
                <option>Amit Patel</option>
              </select>
            </div>
            <div className="group-input">
              <label>Client  </label>
              <select>
                <option>--Select Client--</option>
                <option>Pankaj Jat</option>
                <option>Gaurav</option>
                <option>Mayank</option>
              </select>
            </div>
            <div className="group-input">
              <label>Start Date </label>
              <input type="date" />
            </div>
            <div className="group-input">
              <label>End Date </label>
              <input type="date" />
            </div>
            <div className="group-input">
            <label>Location</label>
            <input />
          </div>
          <div className="group-input">
            <label>Attendees</label>
            <input />
          </div>
          </div>

          <div className='group-input'>
            <label>Notes</label>
            <textarea/>
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
  )
}

export default Appointments
