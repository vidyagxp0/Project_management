import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import Select from "react-select";
import DataTable from "react-data-table-component";
import { FaPlus } from "react-icons/fa";

const weekOptions = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#f4f4f4", 
      color: "#333", 
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  cells: {
    style: {
      fontSize: "14px", 
      textAlign: "center", 
    },
  },
};

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [weekendData, setWeekendData] = useState([]);
  const [holidayData, setHolidayData] = useState([]);
  const [selectedWeekends, setSelectedWeekends] = useState([]);
  const [isWeekendModalOpen, setIsWeekendModalOpen] = useState(false);
  const [isHolidayModalOpen, setIsHolidayModalOpen] = useState(false);
  const [data, setData] = useState([
    {
      sNo: 1,
      phase: "Phase 1",
      milestones: "Milestone A",
      customerName: "Customer X",
      vendorName: "Vendor Y",
      projectDetails: "Project Description",
      projectPhase: "Planning",
      progress: "60%",
      status: "Ongoing",
      assign: "John Doe",
      role: "Manager",
      responsibility: "Supervision",
      startDate: "2025-03-01",
      endDate: "2025-06-01",
      holidays: "5 Days",
      supportingDocuments: "Document.pdf",
      percentComplete: "60%",
      remarks: "On Track",
    },
  ]);

  const handleChange = (e, index, key) => {
    const updatedData = [...data];
    updatedData[index][key] = e.target.value;
    setData(updatedData);
  };

  const columns = [
    { name: "S.No", selector: (row) => row.sNo, sortable: true },
    {
      name: "Phase",
      cell: (row, index) => (
        <input
          type="text"
          value={row.phase}
          onChange={(e) => handleChange(e, index, "phase")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Milestones",
      cell: (row, index) => (
        <input
          type="text"
          value={row.milestones}
          onChange={(e) => handleChange(e, index, "milestones")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Customer Name",
      cell: (row, index) => (
        <input
          type="text"
          value={row.customerName}
          onChange={(e) => handleChange(e, index, "customerName")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Vendor Name",
      cell: (row, index) => (
        <input
          type="text"
          value={row.vendorName}
          onChange={(e) => handleChange(e, index, "vendorName")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Project Details",
      cell: (row, index) => (
        <input
          type="text"
          value={row.projectDetails}
          onChange={(e) => handleChange(e, index, "projectDetails")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Project Phase",
      cell: (row, index) => (
        <input
          type="text"
          value={row.projectPhase}
          onChange={(e) => handleChange(e, index, "projectPhase")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Progress",
      cell: (row, index) => (
        <input
          type="text"
          value={row.progress}
          onChange={(e) => handleChange(e, index, "progress")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Status",
      cell: (row, index) => (
        <input
          type="text"
          value={row.status}
          onChange={(e) => handleChange(e, index, "status")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Assign",
      cell: (row, index) => (
        <input
          type="text"
          value={row.assign}
          onChange={(e) => handleChange(e, index, "assign")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Role",
      cell: (row, index) => (
        <input
          type="text"
          value={row.role}
          onChange={(e) => handleChange(e, index, "role")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Responsibility",
      cell: (row, index) => (
        <input
          type="text"
          value={row.responsibility}
          onChange={(e) => handleChange(e, index, "responsibility")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Start Date",
      cell: (row, index) => (
        <input
          type="date"
          value={row.startDate}
          onChange={(e) => handleChange(e, index, "startDate")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "End Date",
      cell: (row, index) => (
        <input
          type="date"
          value={row.endDate}
          onChange={(e) => handleChange(e, index, "endDate")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Holidays",
      cell: (row, index) => (
        <input
          type="text"
          value={row.holidays}
          onChange={(e) => handleChange(e, index, "holidays")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Supporting Documents",
      cell: (row, index) => (
        <input
          type="text"
          value={row.supportingDocuments}
          onChange={(e) => handleChange(e, index, "supportingDocuments")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "% Complete",
      cell: (row, index) => (
        <input
          type="number"
          value={row.percentComplete}
          onChange={(e) => handleChange(e, index, "percentComplete")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
    {
      name: "Remarks",
      cell: (row, index) => (
        <input
          type="text"
          value={row.remarks}
          onChange={(e) => handleChange(e, index, "remarks")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
    },
  ];

  const addRow = () => {
    setData((prevData) => [
      ...prevData,
      {
        sNo: prevData.length + 1,
        phase: "",
        milestones: "",
        customerName: "",
        vendorName: "",
        projectDetails: "",
        projectPhase: "",
        progress: "",
        status: "",
        assign: "",
        role: "",
        responsibility: "",
        startDate: "",
        endDate: "",
        holidays: "",
        supportingDocuments: "",
        percentComplete: "",
        remarks: "",
      },
    ]);
  };

  const [holidayForm, setHolidayForm] = useState({
    startDate: "",
    endDate: "",
    reason: "",
  });

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const foundProject = savedProjects.find((proj) => proj.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    }

    setWeekendData(JSON.parse(localStorage.getItem("weekendDays")) || []);
    setHolidayData(JSON.parse(localStorage.getItem("holidays")) || []);
  }, [id]);

  const handleSaveWeekendDays = () => {
    if (!project) return;

    const updatedWeekends = [
      ...weekendData,
      {
        company: project.companyName,
        year: project.year,
        days: selectedWeekends,
      },
    ];
    setWeekendData(updatedWeekends);
    localStorage.setItem("weekendDays", JSON.stringify(updatedWeekends));

    setIsWeekendModalOpen(false);
  };

  if (!project) {
    return <p className="text-center text-gray-500">Project not found</p>;
  }
  const handleSaveHoliday = () => {
    if (!holidayForm.startDate || !holidayForm.endDate || !holidayForm.reason) {
      alert("All fields are required!");
      return;
    }

    const newHoliday = {
      ...holidayForm,
      company: project.companyName,
      year: project.year,
    };
    const updatedHolidays = [...holidayData, newHoliday];
    localStorage.setItem("holidays", JSON.stringify(updatedHolidays));
    setHolidayData(updatedHolidays);
    setIsHolidayModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span
            onClick={() => navigate("/project-planner")}
            className="hover:underline">
            Project Planner
          </span>
          <span>/</span>
          <span>Detail</span>
        </div>

        <div className="p-6 shadow-2xl mt-4 bg-white rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {project.companyName} - {project.year}
            </h2>

            <div className="flex gap-4">
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                onClick={() => setIsWeekendModalOpen(true)}>
                Weekend Days
              </button>
              <button
                className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
                onClick={() => setIsHolidayModalOpen(true)}>
                Holidays
              </button>
            </div>
          </div>

          <p className="text-gray-600 mt-3">{project.description}</p>
        </div>
      </div>

      {/* Weekend Days Modal - Full Screen Feel */}
      <Dialog
        open={isWeekendModalOpen}
        onClose={() => setIsWeekendModalOpen(false)}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          style: {
            width: "80vw",
            height: "75vh",
            padding: "20px",
            borderRadius: "12px",
          },
        }}>
        <DialogTitle className="text-lg font-semibold bg-gray-100 p-4 border-b">
          Select Weekend Days
        </DialogTitle>
        <DialogContent className="p-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Company Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={project.companyName}
                readOnly
                className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Year
              </label>
              <input
                type="text"
                // value={project.year}
                // readOnly
                className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
              />
            </div>

            {/* Multi-Select Dropdown */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Select Weekend Days
              </label>
              <Select
                options={weekOptions}
                isMulti
                onChange={(selected) =>
                  setSelectedWeekends(selected.map((s) => s.value))
                }
                className="w-full"
                placeholder="Choose weekend days..."
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions className="p-4 border-t bg-gray-50">
          <Button
            onClick={() => setIsWeekendModalOpen(false)}
            className="text-gray-600">
            Cancel
          </Button>
          <Button
            onClick={handleSaveWeekendDays}
            color="primary"
            variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isHolidayModalOpen}
        onClose={() => setIsHolidayModalOpen(false)}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          style: { maxHeight: "90vh", overflowY: "auto" }, // Enables scrolling when needed
        }}>
        <DialogTitle className="text-lg font-semibold bg-gray-100 p-4 border-b">
          Add Holiday
        </DialogTitle>

        {/* Scrollable Content */}
        <DialogContent dividers className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="Company Name"
              value={project.companyName}
              fullWidth
              InputProps={{ readOnly: true }}
            />
            <TextField
              label="Year"
              value={project.year}
              fullWidth
              InputProps={{ readOnly: true }}
            />
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              value={holidayForm.startDate}
              onChange={(e) =>
                setHolidayForm({ ...holidayForm, startDate: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              type="date"
              fullWidth
              value={holidayForm.endDate}
              onChange={(e) =>
                setHolidayForm({ ...holidayForm, endDate: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
            />

            {/* Reason as a Proper Textarea */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Reason
              </label>
              <textarea
                className="w-full p-3 border rounded-lg h-24 resize-y"
                value={holidayForm.reason}
                onChange={(e) =>
                  setHolidayForm({ ...holidayForm, reason: e.target.value })
                }
                placeholder="Enter reason for holiday..."
              />
            </div>
          </div>
        </DialogContent>

        <DialogActions className="p-4 border-t bg-gray-50">
          <Button onClick={() => setIsHolidayModalOpen(false)}>Cancel</Button>
          <Button
            onClick={handleSaveHoliday}
            color="primary"
            variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <div className="p-6 shadow-2xl mt-4 bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {project.companyName} - {project.year}
          </h2>
        </div>

        {/* 🏢 Project Details Form */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          {/* Company Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              value={project.companyName}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
            />
          </div>

          {/* Comments (Now Normal Input) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Comments
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Enter comments..."
            />
          </div>

          {/* Document Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Document
            </label>
            <input
              type="file"
              className="w-full p-3 border rounded-lg bg-white"
            />
          </div>

          {/* Remark (Now Normal Input) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Remark
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Enter remark..."
            />
          </div>
        </div>
      </div>
      {/* Data Table with Add Row */}
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Project Details</h2>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaPlus />}
            onClick={addRow}>
            Add Row
          </Button>
        </div>

        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          customStyles={customStyles}
          noDataComponent="No data available"
          onRowClicked={(row) => console.log(row)}
          conditionalRowStyles={[
            {
              when: (row) => true,
              style: {
                backgroundColor: "white",
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
