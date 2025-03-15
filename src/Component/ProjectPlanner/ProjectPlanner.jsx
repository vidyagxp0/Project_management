import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Avatar, Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectPlanner = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    companyName: "",
    year: "",
    description: "",
  });

  // Load projects from Local Storage
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.companyName || !formData.year || !formData.description) {
      toast.error("All fields are required!");
      return;
    }

    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    const isDuplicate = savedProjects.some(
      (project) =>
        project.companyName.toLowerCase() === formData.companyName.toLowerCase() &&
        project.year === formData.year
    );

    if (isDuplicate) {
      toast.error("Project already exists!");
      return;
    }

    const nextId = savedProjects.length > 0 ? Math.max(...savedProjects.map(p => p.id)) + 1 : 1;

    const newProject = { ...formData, id: nextId };

    const updatedProjects = [...savedProjects, newProject];

    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setProjects(updatedProjects);

    toast.success("Project saved successfully!");

    setIsOpen(false);
    setFormData({ companyName: "", year: "", description: "" });
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer pb-3">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Project Planner</span>
        </div>

        <div className="p-4 shadow-2xl">
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Project Planner</div>
            <div className="flex gap-4">
              <div
                className="bg-emerald-100 p-2 rounded text-emerald-500 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <RiAddFill />
              </div>
            </div>
          </div>

          {/* Modal for Project Details */}
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="w-[500px] bg-white rounded-lg shadow-lg">
              {/* Modal Header */}
              <div className="p-4 flex justify-between border-b border-gray-300">
                <h2 className="text-lg font-semibold">Project Details</h2>
                <RxCross1 className="cursor-pointer" onClick={() => setIsOpen(false)} />
              </div>

              {/* Modal Body */}
              <div className="p-4 space-y-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter year"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter project description"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-300 flex justify-end space-x-3">
                <button
                  className="border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </Dialog>
        </div>

        {/* Render Saved Projects as Cards */}
        <div className="grid grid-cols-2 gap-5 py-3">
          {projects.map((project) => (
            <div key={project.id} className="p-8 shadow-2xl flex flex-col gap-2">
              <div className="flex gap-3">
                <span className="text-cyan-500 cursor-pointer">#{project.id}</span>
                <span>- {project.companyName}</span>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <span className="font-medium">Year: {project.year}</span>

                </div>
              </div>
              <div className="flex">
                <span className="font-medium">Description:</span>
                <span>{project.description}</span>
              </div>

              <div className="flex justify-between mt-3">
                <Avatar />
                <div className="bg-yellow-400 px-2 hover:bg-yellow-700 text-white rounded flex items-center">
                  In Progress
                </div>
                <button
                  className="bg-cyan-400 px-2 hover:bg-cyan-700 text-white rounded"
                  onClick={() => navigate(`/project-detail/${project.id}`)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanner;
