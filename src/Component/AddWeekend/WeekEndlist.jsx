
import React, { useState, useEffect } from "react";
import { Select, Input, Button } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const { Option } = Select;

const weekOptions = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const AddWeekend = ({onClose}) => {
  const [formData, setFormData] = useState({
    companyId: null,
    year: "",
    selectedWeekends: [],
  });

  const [allCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/project-planner/get-all-companies");
        setAllCompanies(response.data || []); 
      } catch (error) {
        toast.error("Failed to load companies. Please try again.");
      }
    };
    fetchCompanies();
  }, []);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    const { companyId, year, selectedWeekends } = formData;

    if (!companyId || !year || selectedWeekends.length === 0) {
      toast.error("All fields are required!");
      return;
    }

    const requestData = {
      weekend_days: selectedWeekends,
      year: parseInt(year),
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/project-planner/companies/${companyId}/weekends`,
        requestData
      );
      onClose()
      toast.success("Weekend days saved successfully!");

      // Reset form after successful submission
      setFormData({ companyId: null, year: "", selectedWeekends: [] });

    } catch (error) {
      toast.error("Failed to save weekend days.");
    }
  };

  return (
    <div className="flex justify-center items-center h-auto p-6 bg-gray-100"> 
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Add Weekend Days</h2>

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

        {/* Year Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Year</label>
          <Input
            type="number"
            placeholder="Enter year"
            value={formData.year}
            onChange={(e) => handleChange("year", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Select Weekend Days */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Select Weekend Days</label>
          <Select
            mode="multiple"
            placeholder="Select weekend days"
            value={formData.selectedWeekends}
            onChange={(value) => handleChange("selectedWeekends", value)}
            className="w-full"
            allowClear
          >
            {weekOptions.map((day) => (
              <Option key={day} value={day}>{day}</Option>
            ))}
          </Select>
        </div>

        {/* Submit Button */}
        <Button
          type="primary"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-lg hover:scale-105 transition-transform duration-300"
          onClick={handleSave}
        >
          Save Weekend Days
        </Button>
      </div>
    </div>
  );
};

export default AddWeekend;
