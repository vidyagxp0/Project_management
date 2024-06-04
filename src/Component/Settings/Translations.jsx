import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Translations = () => {
  const [showMenu, setShowMenu] = useState(null);

  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {
    navigate("/add-projects");
  };

  const handleDelete = () => {
    // Implement delete functionality
  };
  const data = [{ language: "Russian", status: "Active" },{ language: "English", status: "InActive" },{ language: "French", status: "Active" },{ language: "Italian", status: "Active" },{ language: "Japanese", status: "Active" },{ language: "Dutch", status: "Active" }];
  return (
    <>
      <div className=" text-cyan-500 text-[18px] font-medium">
        Translations{" "}
      </div>
      <div className="border border-b-gray-300 my-2"></div>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>{
                return  <tr>
                <td>{item.language}</td>
                <td>{item.status}</td>
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
            })}
         
        </tbody>
      </table>
    </>
  );
};

export default Translations;
