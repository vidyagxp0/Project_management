import React, { useEffect, useState } from "react";
import { Modal, Button, Table, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HoliDayList from "./HoliDayList"; // Import form component

const AddHolidayModal = () => {
  const [loading, setLoading] = useState(true);
  const [holidays, setHolidays] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/project-planner/get-all-holidays"
      );
      setHolidays(response.data || []);
    } catch (error) {
      console.error("Error fetching holidays:", error);
      toast.error("Failed to load holidays. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
      align: "center",
      width: 200,
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      align: "center",
      width: 150,
      render: (date) =>
        new Date(date)
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(",", ""), // Removes extra comma
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      align: "center",
      width: 150,
      render: (date) =>
        new Date(date)
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(",", ""),
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
      align: "center",
      width: 250,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-[80vw] max-w-7xl bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Company Holiday Management
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={holidays}
            rowKey="id" // ✅ Using 'id' from API response
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
        onClick={() => setIsModalOpen(true)}>
        <PlusOutlined className="text-xl" /> Add Holiday
      </Button>

      {/* Professionally styled modal */}
      <Modal
        title={
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Add Holiday
          </h2>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width={700}>
        <div className="p-4">
          <HoliDayList
            onClose={() => setIsModalOpen(false)}
            fetchHolidays={fetchHolidays}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddHolidayModal;
