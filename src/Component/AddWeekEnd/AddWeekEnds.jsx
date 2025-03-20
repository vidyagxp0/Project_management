import React, { useEffect, useState } from "react";
import { Select, Input, Button } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const { Option } = Select;

const weekOptions = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const AddWeekEnds = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [year, setYear] = useState("");
  const [selectedWeekends, setSelectedWeekends] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/project-planner/get-all-companies");
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("Failed to load companies.");
      }
    };
    fetchCompanies();
  }, []);

  const handleSave = async () => {
    if (!selectedCompany || !year || selectedWeekends.length === 0) {
      toast.error("All fields are required!");
      return;
    }

    const payload = {
      weekend_days: selectedWeekends,
      year: parseInt(year, 10),
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/project-planner/companies/${selectedCompany}/weekends`,
        payload
      );
      toast.success("Weekend days saved successfully!");
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error saving weekend days:", error);
      toast.error("Failed to save weekend days.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-10 bg-white shadow-2xl rounded-2xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Add Weekend Days</h2>
        <div className="space-y-6">
          <Select
            placeholder="Select a Company"
            value={selectedCompany}
            onChange={setSelectedCompany}
            className="w-full text-lg"
          >
            {companies?.map((company) => (
              <Option key={company.company_id} value={company.company_id}>
                {company.name}
              </Option>
            ))}
          </Select>

          <Input
            placeholder="Enter Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="text-lg"
          />

          <Select
            mode="multiple"
            placeholder="Select Weekend Days"
            value={selectedWeekends}
            onChange={setSelectedWeekends}
            className="w-full text-lg"
          >
            {weekOptions.map((day) => (
              <Option key={day} value={day}>{day}</Option>
            ))}
          </Select>

          <Button type="primary" block onClick={handleSave} className="text-lg py-3">
            Save Weekends
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddWeekEnds;
