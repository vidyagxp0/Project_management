import React from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { Checkbox, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddTasks = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Header />
        <div className="p-4">
          <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
            <FaHome onClick={() => navigate("/dashboard")} />
            <span>/</span>
            <span onClick={() => navigate("/tasks")}>Tasks</span>
            <span>/</span>
            <span>Add Task</span>
          </div>

          <div className="grid grid-cols-2 p-2 gap-5">
            <div className="p-4 shadow-2xl ">
              <div className="py-2 font-medium">Create Task</div>
              <div className="flex py-2 border border-b-gray-500">
                Task Info
              </div>

              <div className="py-3 group-input">
                  <label>Task Name</label>
                  <input className="border-none" />
                </div>

                <div className="flex py-2 border border-b-gray-500">
                Task Dates
              </div>
              
              <div className="grid grid-cols-2 py-3 gap-5">
                <div className="group-input">
                  <label>Plan Start Date </label>
                 <input type="date"/>
                </div>
                <div className="group-input">
                <label>Plan End Date </label>
                 <input type="date"/>
                </div>
                <div className="group-input">
              <label> Start Date </label>
                 <input type="date"/>
              </div>
              <div className="group-input">
              <label> End Date </label>
                 <input type="date"/>
              </div>
              </div>
              
              
             
              <div className="flex py-2 border border-b-gray-500">
                Progress
              </div>
              <div className="py-3 gap-5">
                <div className="group-input">
                  <label>Progress  </label>
                <LinearProgress variant="determinate" value={10}/>
                </div>
               
              </div>
            </div>
            <div className="p-4 shadow-2xl">
              <div className="flex py-2 border border-b-gray-500">
               Project Info
              </div>
              <div className="grid grid-cols-2 pt-5 gap-5">
                <div className="group-input">
                  <label>Project Name  </label>
                  <select>
                    <option>--Select--</option>
                    <option>DMS</option>
                    <option>TMS </option>
                  </select>
                </div>
                <div className="group-input">
                  <label>Project Version  </label>
                  <select>
                    <option>--Select--</option>
                    <option>V.0.0</option>
                    <option>V.0.1 </option>
                  </select>
                </div>
              </div>

              <div className="flex py-2 border border-b-gray-500">
               Requirements 
              </div>
            <div className="py-3 grid grid-cols-2 gap-5">
            <div className="group-input">
                  <label>Assigned To   </label>
                  <select>
                    <option>--Select--</option>
                    <option>Pankaj</option>
                    <option>Gaurav </option>
                  </select>
                </div>
                <div className="group-input">
                  <label>Status   </label>
                  <select>
                    <option>--Select--</option>
                    <option>In Progress</option>
                    <option>Done </option>
                    <option>Overdue</option>
                  </select>
                </div>
                <div className="group-input">
                  <label>Priority   </label>
                  <select>
                    <option>--Select--</option>
                    <option>Low</option>
                    <option>Medium </option>
                    <option>High</option>
                  </select>
                </div>
                <div className="group-input">
                  <label>Estimate Hours   </label>
                 <input type="number"/>
                </div>
            </div>
              
            </div>
          </div>

          <div className="p-2 shadow-2xl">
            <div className="border border-b-gray-500 py-2">Custom Fields</div>
            <div className="py-3 grid grid-cols-2 gap-5">
              <div className="group-input">
                <label> Help</label>
                <input />
              </div>
              <div className="group-input">
                <label>NUEVO C</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="p-2 shadow-2xl">
            <div className="py-2 border border-b-gray-500">Description</div>
            <div className="py-3 group-input">
              <label>Description</label>
              <textarea></textarea>
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
    </div>
  );
};

export default AddTasks;
