import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { Checkbox } from "@mui/material";

const AddUsers = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span onClick={() => navigate("/users")}>Users</span>
          <span>/</span>
          <span>Add Users</span>
        </div>

        <div className="grid grid-cols-2 p-2 gap-5">
          <div className="p-4 shadow-2xl ">
            <div className="py-2 font-medium">Create User</div>
            <div className="flex py-2 border border-b-gray-500">
              Personal Info
            </div>
            <div className="grid grid-cols-2 gap-5 py-3 ">
              <div className=" group-input">
                <label>First Name</label>
                <input />
              </div>
              <div className=" group-input">
                <label>Last Name</label>
                <input />
              </div>
            </div>

            <div className="group-input">
              <label>Email</label>
              <input />
            </div>
            <div className="grid grid-cols-2 gap-5 py-3 ">
              <div className=" group-input">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className=" group-input">
                <label>Confirm Password</label>
                <input type="password" />
              </div>
            </div>
            <div className="flex py-2 border border-b-gray-500">
              Requirements
            </div>

            <div className="group-input pt-5">
              <label>Profile Photo</label>
              <input type="file" />
            </div>

            <div className="group-input">
              <label>Profile Photo</label>
              <select>
                <option>--Select Departments---</option>
                <option>Admin</option>
                <option>Sales Manager</option>
              </select>
            </div>

            <div className="flex gap-3">
                <Checkbox />
                <span>Is He/She Department Head </span>
              </div>
              <div className="flex gap-3">
                <Checkbox />
                <span>Can View All Users/Clients </span>
              </div>
           
          </div>
          <div className="p-4 shadow-2xl">
            <div className="flex py-2 border border-b-gray-500">About User</div>
            <div className="grid grid-cols-2 pt-5 gap-5">
              <div className="group-input">
                <label> User Id </label>
                <input type="text" />
              </div>

              <div className="group-input">
                <label>Employee Id  </label>
                <input/>
              </div>

              <div className="group-input">
                <label>UserName   </label>
                <input/>
              </div>

              <div className="group-input">
                <label>Primary Manager  </label>
             <select>
                <option>--Select Primary Manager--</option>
                <option>Pankaj</option>
                <option>Gaurav</option>
                <option>Mayank</option>
             </select>
              </div>

              <div className="group-input">
                <label>Secondary Manager  </label>
             <select>
                <option>--Select Secondary Manager--</option>
                <option>Pankaj</option>
                <option>Gaurav</option>
                <option>Mayank</option>
             </select>
              </div><div className="group-input">
                <label>Language  </label>
             <select>
                <option>--Select Primary Manager--</option>
                <option>English</option>
                <option>Dutch</option>
                <option>Korean</option>
             </select>
              </div>

            </div>
            <div className="flex py-2 border border-b-gray-500">Contact Info</div>
            <div className="grid grid-cols-2 py-3 gap-5">
              <div className="group-input">
                <label> Mobile  </label>
                <input type="number" />
              </div>
              <div className="group-input">
                <label> Phone  </label>
                <input type="number" />
              </div>
              <div className="group-input">
                <label> Skype  </label>
                <input type="" />
              </div>
              <div className="group-input">
                <label> Country  </label>
                <input type="" />
              </div>
            </div>
            <div className="group-input">
                <label> Address  </label>
                <input type="" />
              </div>
          </div>
        </div>

       
        <div className="p-2 py-4 flex justify-end gap-5 shadow-2xl">
          <button className="border border-gray-400 rounded-full px-4 py-2">
            Cancel
          </button>
          <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
