import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { FaHome, FaPercent } from 'react-icons/fa';
import { BsPersonRaisedHand, BsThreeDotsVertical } from 'react-icons/bs';
import { RiAddFill } from 'react-icons/ri';
import { Dialog } from '@mui/material';
import { RxCross1 } from 'react-icons/rx';

const Items = () => {
    const navigate=useNavigate()
    const [showMenu, setShowMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

    const data = [
      {
        itemName: "Some Item",
        description: "some item add ",
        tax: 123 ,     
        unit: "",
        price:"100", 
      },
      {
        itemName: "New Item",
        description: "add new item ",
        tax: 98,
        unit: "2",
        price:"80",
      },
      {
        itemName: "Cap",
        description: "Buy a new cap",
        tax: 23,
        unit: "5",
        price:"200",
      },
      {
        itemName: "Laptop",
        description: "Buy new laptops",
        tax: 18,
        unit: "100",
        price:"1081",
      },
      {
        itemName: "Keyboard",
        description: "Add keyboards",
        tax: 23,
        unit: "50",
        price:"567",
      
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
    const handleClose = () => {
        setIsOpen(false);
      };
  return (
    <div>
    <Header />
    <div className="p-4">
      <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
        <FaHome onClick={() => navigate("/dashboard")} />
        <span>/</span>
        <span>Items</span>
      </div>
      <div className="p-4 shadow-2xl">
        <div className="flex justify-between p-2">
          <div className="text-[22px] font-semibold">Items</div>
          <div className="flex gap-4">
          
          <div className="bg-emerald-100 flex gap-2 items-center p-2 rounded text-emerald-500 cursor-pointer" onClick={() => navigate("/taxes")}>
              <FaPercent  /> 
            </div>
            <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
              <RiAddFill onClick={() => {setIsOpen(true)}} />
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
                <th>Item Name</th>
                <th >Description</th>
               <th>Tax</th>
                <th>Unit</th>
               <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.itemName}</td>
                    <td>{item.description}</td>
                    <td>{item.tax}</td>
                    <td>{item.unit}</td>
                    <td>${item.price}</td>
                   
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
    <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Items</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            

           <div className='dual-group-input'>
           <div className="group-input">
              <label>Item Name</label>
              <input />
            </div>
           <div className="group-input">
              <label>Price</label>
            <input/>
            </div>
            <div className="group-input">
              <label>Unit</label>
              <input />
            </div>

            <div className="group-input">
              <label>Tax</label>
              <select>
                <option>--Select Leader---</option>
                <option>GST</option>
                <option>SGST</option>
                <option>CGST</option>
             </select>
            </div>
           </div>

           <div className='group-input'>
            <label>Description</label>
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

export default Items
