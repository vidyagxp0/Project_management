import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../config";

const AddCompany = () => {
  const [companies, setCompanies] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch all companies
  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${config.BASE_URL}/api/project-planner/get-all-companies`);
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
      toast.error("Failed to load companies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  // Add new company
  const handleAddCompany = async () => {
    if (!companyName.trim()) {
      toast.error("Company name is required!");
      return;
    }

    try {
      await axios.post(`${config.BASE_URL}/api/project-planner/companies`, { name: companyName });

      toast.success("Company added successfully!");
      setCompanyName(""); // Clear input
      setIsModalOpen(false); // Close modal
      fetchCompanies(); // Refresh company list
    } catch (error) {
      console.error("Error adding company:", error);
      toast.error(error.response?.data?.message || "Failed to add company. Try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Manage Companies</h2>

        {/* Company List */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Company List</h3>
          <div className="h-40 overflow-y-auto mt-2 p-2 border rounded-lg bg-white">
            {loading ? (
              <p className="text-center text-gray-500">Loading companies...</p>
            ) : companies.length > 0 ? (
              companies.map((company) => (
                <p key={company.id} className="p-2 border-b last:border-0 text-gray-700">
                  {company.name}
                </p>
              ))
            ) : (
              <p className="text-center text-gray-500">No companies found.</p>
            )}
          </div>
        </div>

        {/* Add Company Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Company
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Company</h2>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
              className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-500 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCompany}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCompany;
