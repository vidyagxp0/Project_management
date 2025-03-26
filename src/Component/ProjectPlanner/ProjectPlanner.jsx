import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Avatar, Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import config from "../../../config";

const ProjectPlanner = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyName: "",
    year: "",
    description: "",
  });

  const [companies, setCompanies] = useState([]);
  console.log(companies, "companies");
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/project-planner/get-all-project-planners`
        );
        setCompanies(response.data.reverse());
        // console.log(companies,"compnies")
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("Failed to load companies. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [allcompany, setAllcomapany] = useState("");

  // getAllcompnies()
  useEffect(() => {
    const getAllcompnies = async () => {
      const data = await axios.get(
        `${config.BASE_URL}/api/project-planner/get-all-companies`
      );
      setAllcomapany(data);
    };
    getAllcompnies();
  }, []);

  const handleSave = async () => {
    const selectedCompany = allcompany?.data.find(
      (company) => company.name === formData.companyName
      // (company) => company.company_id
    );

    if (!formData.companyName || !formData.year || !formData.description) {
      toast.error("All fields are required!");
      return;
    }

    const existingProject = companies.find(
      (project) => project.company_name === formData.companyName
    );

    if (existingProject) {
      toast.error(
        "This company already has a project plan. You cannot create another."
      );
      return;
    }

    try {
      const response = await fetch(
        `${config.BASE_URL}/api/project-planner/companies/creaate-project-planner`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_name: formData.companyName,
            year: formData.year,
            description: formData.description,
            company_id: selectedCompany.company_id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save project");
      }

      const newProject = await response.json();
      setCompanies((prevCompanies) => [...prevCompanies, newProject]);

      // setProjects((prevProjects) => [...prevProjects, newProject]);

      toast.success("Project saved successfully!");

      setIsOpen(false);
      setFormData({ companyName: "", year: "", description: "" });
    } catch (error) {
      toast.error("Error saving project. Please try again.");
    }
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
              <button
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-900 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 hover:shadow-lg"
                onClick={() => setIsOpen(true)}
              >
                <RiAddFill size={20} />
                <span>Add Project Planner</span>
              </button>
            </div>
          </div>

          {/* Modal for Project Details */}
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="w-[500px] bg-white rounded-lg shadow-lg">
              {/* Modal Header */}
              <div className="p-4 flex justify-between border-b border-gray-300">
                <h2 className="text-lg font-semibold">Project Details</h2>
                <RxCross1
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Modal Body */}
              <div className="p-4 space-y-4">
                {/* Dropdown for Selecting Company */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Select Company</label>
                  <select
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">-- Select Company --</option>
                    {allcompany?.data?.map((company) => (
                      <option key={company.id} value={company.name}>
                        {company.name}
                      </option>
                    ))}
                  </select>
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

        <div className="p-6">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-96 space-y-4">
              <ClipLoader color="#007BFF" size={60} speedMultiplier={1.5} />
              <p className="mt-3 text-gray-600 text-lg font-semibold">
                Please wait...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
              {companies.length > 0 ? (
                companies.map((company) => (
                  <div
                    key={company.id}
                    className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-500 font-bold text-lg cursor-pointer">
                        #000{company.id}
                      </span>
                      <Avatar />
                    </div>

                    <div className="mt-4 space-y-1">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {company.company_name}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Year:{" "}
                        <span className="font-medium">{company.year}</span>
                      </p>
                      <p className="text-gray-500 text-sm">
                        Description:{" "}
                        <span className="font-medium">
                          {company.description}
                        </span>
                      </p>
                    </div>

                    <div className="flex justify-end mt-5">
                      <button
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        onClick={() => {
                          console.log(
                            "Navigating to project with ID:",
                            company.id
                          );
                          navigate(`/project-detail/${company.id}`);
                        }}
                      >
                        View More →
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-64 text-gray-600 text-lg font-semibold">
  No Project Planner available at this time
</div>

              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanner;
