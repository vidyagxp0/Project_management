import React, { useState, useEffect } from "react";
import { Select, Input, Button } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const { Option } = Select;

const AddHoliday = ({onClose}) => {
  const [formData, setFormData] = useState({
    companyId: null,
    year: new Date().getFullYear(), // Default to current year
    startDate: "",
    endDate: "",
    reason: "",
  });

  const [allCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/project-planner/get-all-companies"
        );
        setAllCompanies(response.data || []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("Failed to load companies. Please try again.");
      }
    };
    fetchCompanies();
  }, []);

  // Handle input changes dynamically
  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    const { companyId, startDate, endDate, reason } = formData;

    if (!companyId || !startDate || !endDate || !reason) {
      toast.error("All fields are required!");
      return;
    }

    const requestData = {
      start_date: startDate,
      end_date: endDate,
      reason,
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/project-planner/companies/${companyId}/holidays`,
        requestData
      );
      onClose();
      toast.success("Holiday saved successfully!");
      console.log("Response:", response.data);

      // Reset form after successful submission
      setFormData({
        companyId: null,
        year: new Date().getFullYear(),
        startDate: "",
        endDate: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error saving holiday:", error);
      toast.error("Failed to save holiday.");
    }
  };

  return (
    <div className="flex justify-center items-center h-auto p-1 bg-gray-100"> 
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Add Holiday</h2>

        {/* Company Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Select Company</label>
          <Select
            placeholder="Select company"
            value={formData.companyId}
            onChange={(value) => handleChange("companyId", value)}
            className="w-full"
          >
            {allCompanies.map((company) => (
              <Option key={company.company_id} value={company.company_id}>
                {company.name}
              </Option>
            ))}
          </Select>
        </div>

        {/* Year Input (Prefilled) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Year</label>
          <Input
            type="number"
            value={formData.year}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Start Date</label>
          <Input
            type="date"
            value={formData.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">End Date</label>
          <Input
            type="date"
            value={formData.endDate}
            onChange={(e) => handleChange("endDate", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Reason */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Reason</label>
          <Input.TextArea
            placeholder="Enter reason"
            value={formData.reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            className="w-full p-2 border rounded-lg"
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="primary"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white p-2 rounded-lg hover:scale-105 transition-transform duration-300"
          onClick={handleSave}
        >
          Save Holiday
        </Button>
      </div>
    </div>
  );
};

export default AddHoliday;
