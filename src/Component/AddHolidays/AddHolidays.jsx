import React, { useEffect, useState } from "react";
import { Select, Input, Button, DatePicker, Form } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import dayjs from "dayjs";

const { Option } = Select;

const AddHolidays = () => {
  const [form] = Form.useForm();
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);


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
  console.log(companies,"see all compnies")

  const handleSave = (values) => {
    console.log("Form values:", values);
    toast.success("Holiday saved successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-xl rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Holidays</h2>
        <Form layout="vertical" form={form} onFinish={handleSave}>
          <Form.Item
            name="companyName"
            label="Select Company"
            rules={[{ required: true, message: "Please select a company" }]}
          >
            <Select placeholder="-- Select Company --">
              {companies?.map((company) => (
                <Option key={company.company_id} value={company.name}>
                  {company.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: "Please select the start date" }]}
          >
            <DatePicker className="w-full" format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true, message: "Please select the end date" }]}
          >
            <DatePicker className="w-full" format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item
            name="reason"
            label="Reason"
            rules={[{ required: true, message: "Please provide a reason" }]}
          >
            <Input.TextArea rows={3} placeholder="Enter reason" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Save Holiday
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddHolidays;