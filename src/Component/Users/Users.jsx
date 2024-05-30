import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { FaHome } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import { Avatar } from '@mui/material';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Users = () => {
    const navigate=useNavigate()
    const [showMenu, setShowMenu] = useState(null);
    const [isDark, setIsDark] = useState(false);
    const data = [
      {
        photo: "abc001",
        fristName: "Pankaj ",
        lastName: "Jat",
        userName: "Panakaj@123",
        department: "Admin (Administration)",
        status: "Active",
      },
      {
        photo: "abc002",
        fristName: "Mayank  ",
        lastName: "Rathore",
        userName: "Mr-2704",
        department: "Admin (Administration)",
       
        status: "InActive",
      },
      {
        photo: "abc003",
        fristName: "Shivam",
        lastName: "Patel",
        userName: "shivamP@123",
        department: "Sales Employee (Administration)",      
        status: "Active",
      },
      {
        photo: "abc004",
        fristName: "Gaurav",
        lastName: "Patel",
        userName: "Gp-123",
        department: "Sales Employee (Administration)",  
        status: "InActive",
      },
      {
        photo: "abc005",
        fristName: "Amit",
        lastName: "Patel",
        userName: "Ap-231",
        department: "Sales Employee (Administration)",    
        status: "InActive",
      },
    ];
  
    const handleMenuClick = (index) => {
      setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
    };
  
    const handleEdit = () => {
      navigate("/add-defects");
    };
  
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
        <span>Users</span>
      </div>
      <div className="p-4 shadow-2xl">
        <div className="flex justify-between p-2">
          <div className="text-[22px] font-semibold">Users</div>
          <div className="flex gap-4">
          
            <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
              <RiAddFill onClick={() => navigate("/add-users")} />
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
                <th>Photo</th>
                <th >First Name</th>
                <th>Last Name</th>
                <th>UserName</th>
                <th>Status</th>
                <th>Department/Roles</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                         <td className="flex justify-center items-center">
                      <Avatar src={item.photo}></Avatar>
                    </td>
                    <td>{item.fristName}</td>
                    <td>{item.lastName}</td>
                    <td>
                      {item.userName}
                    </td>
                    <td>{item.status}</td>
                   
                   
                                     
                    <td>
                 <div   className={` py-1 text-white min-w-10 rounded-full ${
                          item.department === "Sales Employee (Administration)"
                            ? "bg-green-400"
                            : item.department === "Admin (Administration)"
                            ? "bg-red-500"
                            : item.department === "Urjent"
                            ? "bg-orange-500"
                            : ""
                        }`}>{item.department}</div>
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
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Users
