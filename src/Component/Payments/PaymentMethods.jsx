import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscSymbolMethod } from "react-icons/vsc";
import { Checkbox, Dialog, Switch } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

const PaymentMethods = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      methodName: "Paypal ",
      description: "d",
      status: true,
    },
    {
      methodName: "Razor Pay ",
      description: "d",
      status: false,
    },
    {
      methodName: "Cash ",
      description: "",
      status: true,
    },
    {
      methodName: "NEFT Transfer  ",
      description: "",
      status: true,
    },
    {
      methodName: "Cheque ",
      description: "",
      status: false,
    },
    {
      methodName: "Paytm ",
      description: "",
      status: false,
    },
  ];

  const handleMenuClick = (index) => {
    setShowMenu(index === showMenu ? null : index); // Toggle menu visibility
  };

  const handleEdit = () => {
    navigate("/add-estimates");
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSwitchChange = (index) => {
    const newData = [...data];
    newData[index].checked = !newData[index].checked;
    setData(newData);
  };
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span onClick={() => navigate("/payments")}>Payments</span>
          <span>/</span>
          <span>Methods</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Payments Method</div>
            <div className="flex gap-4">
              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
                <VscSymbolMethod onClick={() => navigate("/payments")} />
              </div>

              <div className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer">
                <RiAddFill onClick={() => setIsOpen(true)} />
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
                  <th>Method Name</th>
                  <th>Description</th>

                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.methodName}</td>
                      <td>{item.description}</td>
                      <td>
                        {" "}
                        <Switch
                          checked={item.status}
                          onChange={() => handleSwitchChange(index)}
                          name={`switch-${index}`}
                        />
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
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="w-[500px]">
          <div className="p-4 flex justify-between border-b-2 border-gray-400">
            <div>Payment Methods</div>
            <div>
              <RxCross1 onClick={handleClose} />
            </div>
          </div>
          <div className="p-4">
            <div className="group-input">
              <label>Method Name</label>
              <input />
            </div>

            <div className="group-input">
              <label>Description</label>
              <textarea />
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox /> <span>Show Description On Invoice PDF</span>
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

export default PaymentMethods;
