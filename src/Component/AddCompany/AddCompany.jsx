import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const AddCompany = () => {
  const [companies, setCompanies] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch all companies
  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/project-planner/get-all-companies");
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
      await axios.post("http://127.0.0.1:8000/api/project-planner/companies", { name: companyName });
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
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Company List</h3>
          <div className="h-60 overflow-y-auto p-3 border rounded-lg bg-white shadow-md">
            {loading ? (
              <p className="text-center text-gray-500">Loading companies...</p>
            ) : companies.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-3"
              >
                {companies.map((company) => (
                  <div 
                    key={company.id} 
                    className="p-3 bg-blue-100 border-l-4 border-blue-600 rounded-lg shadow-sm hover:bg-blue-200 transition duration-300"
                  >
                    <p className="text-blue-800 font-semibold">{company.name}</p>
                  </div>
                ))}
              </motion.div>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Company</h2>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
              className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300"
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
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AddCompany;
