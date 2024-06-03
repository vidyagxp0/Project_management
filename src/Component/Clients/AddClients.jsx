import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { Checkbox } from "@mui/material";

const AddClients = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span onClick={() => navigate("/clients")}>Client</span>
          <span>/</span>
          <span>Add Client</span>
        </div>

        <div className="grid grid-cols-2 p-2 gap-5">
          <div className="p-4 shadow-2xl ">
            <div className="py-2 font-medium">Create Client</div>
            <div className="flex py-2 text-[18px] font-bold border border-b-gray-500">
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
            <div className="flex text-[18px] font-bold py-2 border border-b-gray-500">
              Company Info
            </div>
            <div className="grid grid-cols-2 gap-5 py-3">
              <div className="group-input ">
                <label>Company Name </label>
                <input type="text" />
              </div>
              <div className="group-input ">
                <label>Company Email </label>
                <input type="text" />
              </div>

              <div className="group-input ">
                <label>Company Phone </label>
                <input type="text" />
              </div>
              <div className="group-input ">
                <label>Company Mobile </label>
                <input type="text" />
              </div>
              <div className="group-input ">
                <label>Company Country </label>
                <input type="text" />
              </div>
              <div className="group-input ">
                <label>Company City </label>
                <input type="text" />
              </div>
              <div className="group-input ">
                <label>Company Zip Code </label>
                <input type="text" />
              </div>
              <div className="group-input ">
                <label>Company Fax </label>
                <input type="text" />
              </div>
              <div className="group-input ">
                <label>Company Website </label>
                <input type="text" />
              </div>
              <div className="group-input ">
                <label>Skype </label>
                <input type="text" />
              </div>
            </div>
            <div className="group-input">
              <label> Company Address</label>
              <textarea />
            </div>

            <div className="flex text-[18px] font-bold py-2 border border-b-gray-500">
              Hosting Info
            </div>

            <div className="grid grid-cols-2 gap-5 py-3">
              <div className="group-input ">
                <label>Hosting Company </label>
                <input />
              </div>
              <div className="group-input">
                <label>Username </label>
                <input />
              </div>
              <div className="group-input">
                <label>Password </label>
                <input />
              </div>
              <div className="group-input">
                <label>Port </label>
                <input />
              </div>
            </div>
          </div>
          <div className="p-4 shadow-2xl">
            <div className="flex py-2 text-[18px] font-bold border border-b-gray-500">
              About Client
            </div>
            <div className="grid grid-cols-2 pt-5 gap-5">
              <div className="group-input">
                <label> Client Id </label>
                <input type="text" />
              </div>

              <div className="group-input">
                <label>UserName </label>
                <input />
              </div>

              <div className="group-input">
                <label>Language </label>
                <select>
                  <option>--Select Primary Manager--</option>
                  <option>English</option>
                  <option>Dutch</option>
                  <option>Korean</option>
                </select>
              </div>
            </div>
            <div className="flex py-2 border text-[18px] font-bold border-b-gray-500">
              Contact Info & Bio
            </div>
            <div className="grid grid-cols-2 py-3 gap-5">
              <div className="group-input">
                <label> Mobile </label>
                <input type="number" />
              </div>
              <div className="group-input">
                <label> Phone </label>
                <input type="number" />
              </div>
              <div className="group-input">
                <label> Skype </label>
                <input type="" />
              </div>
              <div className="group-input">
                <label> Country </label>
                <input type="" />
              </div>
            </div>
            <div className="group-input">
              <label> Address </label>
              <textarea type="" />
            </div>

            <div className="flex py-2 border text-[18px] font-bold border-b-gray-500">
              Requirements
            </div>
            <div className="py-3 group-input">
              <label>Profile Photo</label>
              <input type="file" />
            </div>
            <div className="group-input">
              <label>Departments/Roles </label>
              <select>
                <option>--Select Department--</option>
                <option>Manager</option>
                <option>Project</option>
                <option>Hr</option>
              </select>
            </div>

            <div className="flex py-2 border text-[18px] font-bold border-b-gray-500">
              Social Info
            </div>
            <div className="py-3 grid grid-cols-2">
              <div className="group-input">
                <label>Facebook URL</label>
                <input />
              </div>
              <div className="group-input">
                <label>Twitter URL</label>
                <input />
              </div>
              <div className="group-input">
                <label>Linkdin URL</label>
                <input />
              </div>
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

export default AddClients;
