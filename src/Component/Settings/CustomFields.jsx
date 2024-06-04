import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";

const CustomFields = () => {
    const [showMenu, setShowMenu] = useState(null);

    const data=[{label:"Help",
        customFieldFor:"Task",
        type:"text",
        status:"Active",
    },
    {
        label: "Support",
        customFieldFor: "Project",
        type: "dropdown",
        status: "Pending",
        id: 2
    },
    {
        label: "Assistance",
        customFieldFor: "Issue",
        type: "checkbox",
        status: "Resolved",
        id: 3
    },
    {
        label: "Guidance",
        customFieldFor: "Assignment",
        type: "textarea",
        status: "Active",
        id: 4
    },{
        label: "Advice",
        customFieldFor: "Task",
        type: "text",
        status: "Completed",
        id: 5
    }    
]
const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {
  navigate('/add-projects')
  };

  const handleDelete = () => {
    // Implement delete functionality
  };
  return (
    <>
      <div className="flex justify-between">
        <div className=" text-cyan-500 text-[18px] font-medium">
          Custom Fields
        </div>
        <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
          <RiAddFill onClick={() => {}} />
        </div>
      </div>

      <div className="border border-b-gray-300 my-2"></div>
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Custom Field For</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {data.map((item,index)=>{
            return  <tr>
            <td>{item.label}</td>
            <td>{item.customFieldFor}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>   <div className="relative inline-block text-left">
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
                        <div className="py-1 px-2 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
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
         })}
        </tbody>
      </table>
    </>
  );
};

export default CustomFields;
