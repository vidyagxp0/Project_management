import React from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";

const AddProjects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span onClick={() => navigate("/projects")}>Projects</span>
          <span>/</span>
          <span>Add Projects</span>
        </div>

        <div className="grid grid-cols-2 p-2 gap-5">
          <div className="p-4shadow-2xl ">
            <div className="py-2 font-medium">Create Project</div>
            <div className="flex py-2 border border-b-gray-500">
              Project Info
            </div>
            <div className="grid grid-cols-3 py-3 gap-5">
              <div className="col-span-2 group-input">
                <label>Project Name</label>
                <input className="border-none" />
              </div>
              <div className="group-input">
                <label>Version </label>
                <input className="border-none" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="group-input">
                <label>Client Name </label>
                <select>
                  <option>--Select--</option>
                  <option>Pankaj</option>
                  <option>Mayank</option>
                  <option>Gaurav</option>
                </select>
              </div>
              <div className="group-input">
                <label>Assigned Group </label>
                <select>
                  <option>--Select--</option>
                  <option>Laravel</option>
                  <option>React</option>
                </select>
              </div>
            </div>
            <div className="group-input">
              <label>Assigned To</label>
              <select>
                <option>--Select--</option>
                <option>Pankaj</option>
                <option>Mayank</option>
                <option>Gaurav</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="group-input">
                <label>Demo URl </label>
                <input />
              </div>
              <div className="group-input">
                <label>Status </label>
                <select>
                  <option>--Select--</option>
                  <option>Open</option>
                  <option>Close</option>
                </select>
              </div>
            </div>
            <div className="flex py-2 border border-b-gray-500">
              Project Details
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="group-input">
                <label>Start Date </label>
                <input type="date" />
              </div>
              <div className="group-input">
                <label>End Date </label>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="p-4shadow-2xl">
            <div className="flex py-2 border border-b-gray-500">Other Info</div>
            <div className="grid grid-cols-2 pt-5 gap-5">
              <div className="group-input">
                <label>Billing Type </label>
                <select>
                  <option>--Select--</option>
                  <option>Hourly Rate</option>
                  <option>Daily Rate</option>
                </select>
              </div>
              <div className="group-input">
                <label> Fixed Price </label>
              </div>
              <div className="group-input">
                <label> Estimate Hours </label>
                <input type="number " value={"00:00"} />
              </div>
              <div className="group-input">
                <label> Auto Progress </label>
                <Checkbox />
              </div>
            </div>
            <div className="group-input">
              <label>Project Logo</label>
              <input type="file" />
            </div>
          </div>
        </div>

        <div className="p-2shadow-2xl">
          <div className="border border-b-gray-500 py-2">Custom Fields</div>
          <div className="py-3 grid grid-cols-2 gap-5">
            <div className="group-input">
              <label> Milestone</label>
              <input />
            </div>
            <div className="group-input">
              <label> Milestone Target</label>
              <input type="date" />
            </div>
          </div>
        </div>

        <div className="p-2shadow-2xl">
<div className="py-2 border border-b-gray-500">Description</div>
<div className="py-3 group-input">
<label>Description</label>
<textarea></textarea>
</div>
        </div>
        <div className="p-2 py-4 flex justify-end gap-5shadow-2xl"> 
        <button className="border border-gray-400 rounded-full px-4 py-2">Cancel</button>
        <button className="border bg-green-400 text-white rounded-full px-4 py-2 hover:bg-green-700">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProjects;
