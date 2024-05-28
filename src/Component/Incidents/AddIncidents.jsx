import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";

const AddIncidents = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span onClick={() => navigate("/incidents")}>Incidents</span>
          <span>/</span>
          <span>Add Incidents</span>
        </div>

        <div className="grid grid-cols-2 p-2 gap-5">
          <div className="p-4 shadow-2xl ">
            <div className="py-2 font-medium">Create Incident</div>
            <div className="flex py-2 border border-b-gray-500">
              Incident Info
            </div>

            <div className="py-3 group-input">
              <label>Incident Name</label>
              <input className="border-none" />
            </div>

            <div className="grid grid-cols-2 py-3 gap-5">
              <div className="group-input">
                <label> Start Date </label>
                <input type="date" />
              </div>
              <div className="group-input">
                <label> End Date </label>
                <input type="date" />
              </div>
              <div className="group-input">
                <label>Assigned Group</label>
                <select>
                  <option>--Select--</option>
                  <option>Laravel</option>
                  <option>React</option>
                </select>
              </div>
              <div className="group-input">
                <label>Assigned To</label>
                <select>
                  <option>--Select--</option>
                  <option>Pankaj</option>
                  <option>Gaurav</option>
                </select>
              </div>{" "}
              <div className="group-input">
                <label>Estimate Hours</label>
                <input type="number" />
              </div>{" "}
              <div className="group-input">
                <label>Status</label>
                <select>
                  <option>--Select--</option>
                  <option>Open</option>
                  <option>In progress</option>
                  <option>Done</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-4 shadow-2xl">
            <div className="flex py-2 border border-b-gray-500">
              Project Info
            </div>
            <div className="grid grid-cols-2 pt-5 gap-5">
              <div className="group-input">
                <label>Project Name </label>
                <select>
                  <option>--Select--</option>
                  <option>DMS</option>
                  <option>TMS </option>
                </select>
              </div>
              <div className="group-input">
                <label>Project Version </label>
                <select>
                  <option>--Select--</option>
                  <option>V.0.0</option>
                  <option>V.0.1 </option>
                </select>
              </div>
            </div>

            <div className="flex py-2 border border-b-gray-500">
              Project Info
            </div>

            <div className="grid grid-cols-2 pt-5 gap-5">
              <div className="group-input">
                <label>Priority </label>
                <select>
                  <option>--Select--</option>
                  <option>Low</option>
                  <option>Medium </option>
                  <option>High</option>
                </select>
              </div>
              <div className="group-input">
                <label>Incident Type </label>
                <select>
                  <option>--Select--</option>
                  <option>Info Request</option>
                  <option>Service Request </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 shadow-2xl">
          <div className="py-2 border border-b-gray-500">Custom Fields</div>
          <div className="py-3 group-input">
            <label>Feedack</label>
            <input />
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
  );
};

export default AddIncidents;
