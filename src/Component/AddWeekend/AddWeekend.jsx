import React, { useEffect, useState } from "react";
import { Modal, Button, Table, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddWeekend from "./WeekEndlist"; // Import form component

const AddWeekendModal = () => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCompaniesWithWeekends();
  }, []);

  const fetchCompaniesWithWeekends = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/project-planner/companies-with-weekends");
      setCompanies(response.data || []);
    } catch (error) {
      console.error("Error fetching companies:", error);
      toast.error("Failed to load companies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { 
      title: "Company Name", 
      dataIndex: "company_name", 
      key: "company_name", 
      align: "center", // ✅ Center Header
      width: 200 
    },
    { 
      title: "Weekend Days", 
      dataIndex: "weekend_days", 
      key: "weekend_days", 
      align: "center", // ✅ Center Header
      width: 300,
      render: (days) => {
        try {
          return days ? JSON.parse(days).join(", ") : "Not Set";
        } catch (error) {
          return "Invalid Data";
        }
      } 
    },
    { 
      title: "Year", 
      dataIndex: "year", 
      key: "year", 
      align: "center", // ✅ Center Header
      width: 150, 
      render: (year) => year || "Not Set" 
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-[80vw] max-w-7xl bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Company Weekend Management</h2>

        {loading ? (
          <div className="flex justify-center">
            <Spin size="large" />
          </div>
        ) : (
          <Table 
            columns={columns} 
            dataSource={companies} 
            rowKey="company_id" 
            pagination={{ pageSize: 5 }} 
            bordered 
            className="shadow-md"
          />
        )}
      </div>

      {/* Button to open modal */}
      <Button
        type="primary"
        className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-lg transition-transform transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <PlusOutlined className="text-xl" /> Add Weekend Days
      </Button>

      {/* Professionally styled modal */}
      <Modal
        title={<h2 className="text-xl font-semibold text-gray-700 text-center">Add Weekend Days</h2>}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width={700}
        bodyStyle={{ padding: "20px" }}
      >
        <div className="p-4">
          <AddWeekend onClose={() => setIsModalOpen(false)} fetchCompanies={fetchCompaniesWithWeekends} />
        </div>
      </Modal>
    </div>
  );
};

export default AddWeekendModal;
