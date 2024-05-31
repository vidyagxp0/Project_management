import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { FaHome, FaList } from 'react-icons/fa';
import { BsPersonRaisedHand, BsThreeDotsVertical } from 'react-icons/bs';
import { RiAddFill } from 'react-icons/ri';
import { FaCodePullRequest } from 'react-icons/fa6';

const LeaveType = () => {
    const navigate=useNavigate()
    const [showMenu, setShowMenu] = useState(null);

    const data = [
      {
        id: "1",
        leaveType: "Personal ",
        totalLeave: 1 ,     
        color: "red", 
      },
      {
        id: "2",
        leaveType: "Casual ",
        totalLeave: 2 ,     
        color: "green", 
      },{
        id: "abc001",
        leaveType: "Emergency ",
        totalLeave: 9 ,     
        color: "rose", 
      },{
        id: "abc001",
        leaveType: "Annual ",
        totalLeave: 5 ,     
        color: "gray", 
      },{
        id: "abc001",
        leaveType: "Personal ",
        totalLeave: 8 ,     
        color: "indigo", 
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
        <span>Leave Types</span>
      </div>
      <div className="p-4 shadow-2xl">
        <div className="flex justify-between p-2">
          <div className="text-[22px] font-semibold">Leave Types</div>
          <div className="flex gap-4">
          
          <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer" onClick={()=>navigate("/leaves")}>
              <FaList   />
            </div>
          <div className="bg-emerald-100 flex gap-2 items-center p-2 rounded text-emerald-500 cursor-pointer" onClick={() => navigate("/leave-request")}>
          <FaCodePullRequest  />
            </div>
            
          </div>
        </div>
        <div className="border border-b-gray-300 my-2"></div>

        <div className='grid grid-cols-7  gap-5'>
<div className='col-span-2 py-2 p-2 shadow-2xl'>
<div className='group-input'>
    <label>Leave Type</label>
    <input/>
</div>
<div className='group-input'>
    <label>Total Leave</label>
    <input/>
</div>
<div className='group-input'>
    <label>Color</label>
    <input/>
</div>
<div className='flex items-center justify-center'>
    <button className='px-3 py-1 bg-green-400 text-white rounded'>Add</button>
</div>
</div>

<div className="py-4 col-span-5 p-2 shadow-2xl">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th >Leave Type</th>
               <th>Total Leave</th>
                <th>Color</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.leaveType}</td>
                    <td>
                     {item.totalLeave}
                    </td>
                   
                   
                <td className="flex justify-center items-center">
                    <div className={`bg-${item.color}-400 text-${item.color}-400 px-2 py-1`}>p</div>
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

  </div>
  )
}

export default LeaveType
