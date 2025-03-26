import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { FaHome, FaTrash } from "react-icons/fa";
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
import axios from "axios";
import { Spin } from "antd";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { BiBarChartAlt2 } from "react-icons/bi";
import { MdAnalytics } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi";
import ImportExport from "../ImportExport/ImportExport";
import config from "../../../config";

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
      whiteSpace: "nowrap",
      overflow: "visible",
      textOverflow: "unset",
      fontSize: "14px",
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#f4f4f4",
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
  // const navigate = useNavigate()
  const navigate = useNavigate();
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState({
    description: "",
    comments: "",
    company_name: "",
    year: "",
    vendore_name:"",
    customer_name:"",
  });
  const [weekendData, setWeekendData] = useState([]);
  const [holidayData, setHolidayData] = useState([]);
  const [selectedWeekends, setSelectedWeekends] = useState([]);
  const [isWeekendModalOpen, setIsWeekendModalOpen] = useState(false);
  const [isHolidayModalOpen, setIsHolidayModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [companies, setCompanies] = useState([]);
  const [getProject, setGetProject] = useState([]);
  const [getWeekEnd, setGetWeekEnd] = useState([]);
  const [getHolidays, setGetHolidays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
const [departments,setDepartments]=useState([])
  // console.log(companies,"companies")
  // console.log(getProject,"getProject")
  // console.log(getWeekEnd,"getWeekEnd")
  // console.log(getHolidays,"getHolidays")
  // console.log(getProject.company_name,"name name")
  // console.log(year,"year")

  const [loadingCompanies, setLoadingCompanies] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [loadingWeekends, setLoadingWeekends] = useState(false);
  const [loadingHolidays, setLoadingHolidays] = useState(false);

  const [tableData, setTableData] = useState([]); // Store the table rows
  useEffect(() => {
    if (tableData && tableData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [tableData]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoadingCompanies(true);
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/project-planner/companies/${id}/project-planner`
        );
        setCompanies(response.data);
      } catch (error) {
        toast.error("Failed to load companies. Please try again.");
      } finally {
        setLoadingCompanies(false);
      }
    };
    fetchCompanies();
  }, [id]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoadingProjects(true);
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/project-planner/companies/${id}/project-planner`
        );
        setGetProject(response.data);
      } catch (error) {
        toast.error("Failed to load projects. Please try again.");
      } finally {
        setLoadingProjects(false);
      }
    };
    fetchProjects();
  }, [id]);

  useEffect(() => {
    const fetchWeekends = async () => {
      setLoadingWeekends(true);
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/project-planner/companies/${id}/weekends`
        );
        setGetWeekEnd(response.data);
      } catch (error) {
        // toast.error("Failed to load weekends. Please try again.");
      } finally {
        setLoadingWeekends(false);
      }
    };
    fetchWeekends();
  }, [id]);

  useEffect(() => {
    const fetchHolidays = async () => {
      setLoadingHolidays(true);
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/project-planner/companies/${id}/holidays`
        );
        setGetHolidays(response.data);
      } catch (error) {
        toast.error("Failed to load holidays. Please try again.");
      } finally {
        setLoadingHolidays(false);
      }
    };
    fetchHolidays();
  }, [id]);

  useEffect(() => {
    if (getProject?.project_details) {
      try {
        setTableData(JSON.parse(getProject.project_details)); // Parse the JSON string
      } catch (error) {
        setTableData([]);
      }
    }
  }, [getProject]);

  const handleSaveProject = async () => {
    // const isValid = tableData.every(row =>
    //   Object.values(row).every(value => value !== "" && value !== null)
    // );

    // if (!isValid) {
    //   toast.error("All fields in the grid are required!");
    //   return;
    // }
    try {
      const projectData = {
        description: projectDetails.description,
        comments: projectDetails.comments,
        vendor_name: projectDetails.vendore_name,
        customer_name: projectDetails.customer_name,
        // company_name: projectDetails.name,
        // year: getWeekEnd.year,

        project_details: JSON.stringify(tableData),
      };

      const response = await axios.put(
        `${config.BASE_URL}/api/project-planner/project-planner/${id}`,
        projectData
      );

      toast.success("Project updated successfully!");
      navigate("/project-planner");
    } catch (error) {
      toast.error("Failed to update project. Please try again.");
    }
  };
  const statusOptions = [
    { value: "Started", label: "Started" },
    { value: "In Progress", label: "In Progress" },
    { value: "Cancelled", label: "Cancelled" },
    { value: "Completed", label: "Completed" },
  ];
  const assigneeOptions = [
    { value: "Pankaj", label: "Pankaj" },
    { value: "Farhan", label: "Farhan" },
    { value: "Himanshu", label: "Himanshu" },
    { value: "Nikshay", label: "Nikshay" },
    { value: "Gautam", label: "Gautam" },
  ];

  const roleOptions = [
    { value: "Validation", label: "Validation" },
    { value: "Configuration", label: "Configuration" },
    { value: "Testing", label: "Testing" },
    { value: "SME", label: "SME" },
    { value: "PM", label: "PM" },
    { value: "Steering Committee", label: "Steering Committee" },
  ];
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
      minWidth: "200px",
    },
    {
      name: "Deliverables",
      cell: (row, index) => (
        <input
          type="text"
          value={row.deliverables}
          onChange={(e) => handleChange(e, index, "deliverables")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
      minWidth: "200px",
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
      minWidth: "200px",
    },
    {
      name: "Pre-requisites",
      cell: (row, index) => (
        <input
          type="text"
          value={row.preRequisites}
          onChange={(e) => handleChange(e, index, "preRequisites")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
      minWidth: "200px",
    },
    {
      name: "No of Days",
      cell: (row, index) => (
        <input
          type="number"
          value={row.noOfDays}
          onChange={(e) => handleChange(e, index, "noOfDays")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
      minWidth: "200px",
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
      minWidth: "200px",
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
      minWidth: "200px",
    },
    {
      name: "Actual Start Date",
      cell: (row, index) => (
        <input
          type="date"
          value={row.actualStartDate}
          onChange={(e) => handleChange(e, index, "actualStartDate")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
      minWidth: "200px",
    },
    {
      name: "Actual End Date",
      cell: (row, index) => (
        <input
          type="date"
          value={row.actualEndDate}
          onChange={(e) => handleChange(e, index, "actualEndDate")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
      minWidth: "200px",
    },
    {
      name: "Priority",
      cell: (row, index) => (
        <select
          value={row.priority}
          onChange={(e) => handleChange(e, index, "priority")}
          className="border p-1 rounded w-full bg-white cursor-pointer">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      ),
      sortable: true,
      minWidth: "200px",
    },
    {
      name: "Assignee",
      cell: (row, index) => (
        <select
          value={row.assignee}
          onChange={(e) => handleChange(e, index, "assignee")}
          className="border p-1 rounded w-full bg-white cursor-pointer">
          <option value="Nickshay">Nickshay</option>
          <option value="Pankaj">Pankaj</option>
          <option value="Farhan">Farhan</option>
          <option value="Himanshu">Himanshu</option>
          <option value="Gautam">Gautam</option>
        </select>
      ),
      sortable: true,
      minWidth: "200px",
    },
    {
      name: "Role",

      cell: (row, index) => (
        <select
          value={row.role}
          onChange={(e) => handleChange(e, index, "role")}
          className="border p-1 rounded w-full bg-white cursor-pointer">
          <option value="Validation">Validation</option>
          <option value="Configuration">Configuration</option>
          <option value="Testing">Testing</option>
          <option value="SME">SME</option>
          <option value="PM">PM</option>
          <option value="Steering Committee">Steering Committee</option>
        </select>
      ),
      sortable: true,
      minWidth: "200px",
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
      minWidth: "200px",
    },

    {
      name: "Status",
      cell: (row, index) => (
        <select
          value={row.status}
          onChange={(e) => handleChange(e, index, "status")}
          className="border p-1 rounded w-full bg-white cursor-pointer">
          <option value="Started">Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Completed">Completed</option>
        </select>
      ),
      sortable: true,
      minWidth: "200px",
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
      minWidth: "200px",
    },

    {
      name: "Delay Justification",
      cell: (row, index) => (
        <input
          type="text"
          value={row.delayJustification}
          onChange={(e) => handleChange(e, index, "delayJustification")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
      minWidth: "200px",
    },
    {
      name: "Supporting Documents",
      cell: (row, index) => (
        <input
          type="file"
          // value={row.supportingDocuments}
          onChange={(e) => handleChange(e, index, "supportingDocuments")}
          className="border p-1 rounded w-full"
        />
      ),
      sortable: true,
      minWidth: "220px",
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
      minWidth: "200px",
    },
    {
      name: "Action",
      cell: (row, index) => (
        <button
          onClick={() => handleDelete(index)}
          className="text-red-600 hover:text-red-800 p-2">
          <FaTrash />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      minWidth: "100px",
    },
  ];

  const handleDelete = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const addRow = () => {
    setTableData((prevData) => {
      if (!Array.isArray(prevData)) prevData = [];

      const lastRow = prevData[prevData.length - 1];
      const newStartDate = lastRow?.endDate
        ? getNextWorkingDay(lastRow.endDate)
        : "";

      return [
        ...prevData,
        {
          sNo: prevData.length + 1,
          phase: "",
          milestones: "",
          customerName: "",
          vendorName: "",
          projectDetails: "",
          progress: "",
          status: "",
          assignee: "",
          role: "",
          responsibility: "",
          startDate: newStartDate,
          endDate: "",
          noOfDays: "",
          actualStartDate: "",
          actualEndDate: "",
          supportingDocuments: "",
          remarks: "",
        },
      ];
    });
  };

  const [holidayForm, setHolidayForm] = useState({
    startDate: "",
    endDate: "",
    reason: "",
  });

  const calculateEndDate = (startDate, noOfDays) => {
    if (!startDate || !noOfDays) return "";

    let currentDate = new Date(startDate);
    let daysAdded = 0;

    while (daysAdded < noOfDays) {
      const dayName = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
      });

      const isWeekend =
        Array.isArray(getWeekEnd?.weekend_days) &&
        getWeekEnd.weekend_days.includes(dayName);

      const formattedDate = currentDate.toISOString().split("T")[0];
      const isHoliday =
        Array.isArray(getHolidays) &&
        getHolidays.some(
          (holiday) =>
            formattedDate >= holiday.start_date &&
            formattedDate <= holiday.end_date
        );

      if (!isWeekend && !isHoliday) {
        daysAdded++;
      }

      if (daysAdded < noOfDays) {
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    return currentDate.toISOString().split("T")[0];
  };

  const getNextWorkingDay = (prevEndDate) => {
    if (!prevEndDate) return "";

    let currentDate = new Date(prevEndDate);

    while (true) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayName = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
      });
      const formattedDate = currentDate.toISOString().split("T")[0];

      const isWeekend = getWeekEnd?.weekend_days?.includes(dayName);
      const isHoliday = getHolidays?.some(
        (holiday) =>
          formattedDate >= holiday.start_date &&
          formattedDate <= holiday.end_date
      );

      if (!isWeekend && !isHoliday) {
        return formattedDate;
      }
    }
  };

  const handleChange = (e, index, field) => {
    const value = e.target.value;
    setTableData((prevData) => {
      let updatedData = [...prevData];

      if (field === "noOfDays" || field === "startDate") {
        // Recalculate end date for this row
        let startDate =
          field === "startDate" ? value : updatedData[index].startDate;
        let noOfDays =
          field === "noOfDays"
            ? parseInt(value, 10)
            : updatedData[index].noOfDays;

        if (startDate && noOfDays) {
          updatedData[index].endDate = calculateEndDate(startDate, noOfDays);
        }

        // Update subsequent rows' start dates
        for (let i = index + 1; i < updatedData.length; i++) {
          updatedData[i].startDate = getNextWorkingDay(
            updatedData[i - 1].endDate
          );
          if (updatedData[i].noOfDays) {
            updatedData[i].endDate = calculateEndDate(
              updatedData[i].startDate,
              updatedData[i].noOfDays
            );
          }
        }
      }

      updatedData[index][field] = value;
      return updatedData;
    });
  };

  const handleSaveWeekendDays = async () => {
    try {
      const weekendData = {
        weekend_days: selectedWeekends,
        year: year,
      };

      // Make POST request to the API
      const response = await axios.post(
        `${config.BASE_URL}/api/project-planner/companies/${id}/weekends`,
        weekendData
      );

      toast.success("Weekend days saved successfully! 🎉");

      setIsWeekendModalOpen(false);
    } catch (error) {
      toast.error("Failed to save weekend days. Please try again! ❌");
    }
  };

  const handleSaveHoliday = async () => {
    try {
      // Prepare the data to be sent to the API
      const holidayData = {
        start_date: holidayForm.startDate,
        end_date: holidayForm.endDate,
        reason: holidayForm.reason,
      };

      // Send POST request to the API
      const response = await axios.post(
        `${config.BASE_URL}/api/project-planner/companies/${id}/holidays`,
        holidayData
      );

      toast.success("Holidays saved successfully!");

      setIsHolidayModalOpen(false);
    } catch (error) {
      toast.error("Failed to save Holidays. Please try again!");
    }
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
              {companies.company_name}
            </h2>

            <div className="flex gap-4">
              <button
                className="flex items-center gap-2 text-black text-lg font-medium hover:text-gray-700 transition"
                onClick={() => navigate(`/gntt-chart/${id}`)}>
                <HiOutlineChartBar size={28} className="text-black" />
              </button>
              {/* <button
                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                onClick={() => setIsWeekendModalOpen(true)}>
                Weekend Days
              </button>
              <button
                className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
                onClick={() => setIsHolidayModalOpen(true)}>
                Holidays
              </button> */}
            </div>
          </div>
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
                readOnly
                className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
                value={companies.name}
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Year
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
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
          style: { maxHeight: "90vh", overflowY: "auto" }, // Enables scrolling
        }}>
        <DialogTitle className="text-lg font-semibold bg-gray-100 p-4 border-b">
          Add Holiday
        </DialogTitle>

        {/* Scrollable Content */}
        <DialogContent dividers className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="Company Name"
              fullWidth
              InputProps={{ readOnly: true }}
              value={companies.name} 
            />
            <TextField
              label="Year"
              fullWidth
              InputProps={{ readOnly: true }}
              value={new Date().getFullYear()} 
            />
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              onChange={(e) =>
                setHolidayForm({ ...holidayForm, startDate: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
              value={getHolidays.start_date}
            />
            <TextField
              label="End Date"
              type="date"
              fullWidth
              onChange={(e) =>
                setHolidayForm({ ...holidayForm, endDate: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
              value={getHolidays.end_date}
            />

            {/* Reason as a Proper Textarea */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Reason
              </label>
              <textarea
                className="w-full p-3 border rounded-lg h-24 resize-y"
                onChange={(e) =>
                  setHolidayForm({ ...holidayForm, reason: e.target.value })
                }
                placeholder="Enter reason for holiday..."
                value={getHolidays.reason}
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
          {/* <h2 className="text-2xl font-semibold text-gray-800">
            {companies.name}
          </h2> */}
        </div>

        {/* Project Details Form */}
        <div className="p-6 shadow-2xl mt-4 bg-white rounded-lg">
          <div className="flex justify-between items-center">
            {/* <h2 className="text-2xl font-semibold text-gray-800"> {companies.name}</h2> */}
          </div>

          {/* 🏢 Project Details Form */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                readOnly
                className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    company_name: e.target.value,
                  })
                }
                value={companies.company_name}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Remark
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter remark..."
                value={companies.description}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Customer Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter Customer Name..."
                value={companies.customer_name}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    customer_name: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Vendor Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter Vendor Name..."
                value={companies.vendor_name}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    vendore_name: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Upload Document
              </label>
              <input
                type="file"
                className="w-full p-3 border rounded-lg bg-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Comments
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter comments..."
                value={getProject.comments}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    comments: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* Data Table with Add Row */}
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Project Details</h2>
          <div className="flex items-center gap-x-4">

          <ImportExport
              data={tableData}
          setData={(importedData) => {
            const updatedData = importedData.map((item, index) => ({
              ...item,
              srNo: `${tableData.length + index + 1}.`, // Continue SR.NO.
            }));
            setTableData((prev) => [...prev, ...updatedData]); // Append data
          }}
          fileName="Department_Master"
          sheetNumbers={0}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaPlus />}
            onClick={addRow}>
            Add Row
          </Button>
        </div>
        </div>

        {/* {isLoading ? (
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
          <ClipLoader color="#007BFF" size={60} speedMultiplier={1.5} />
          <p className="mt-3 text-gray-600 text-lg font-semibold">Add Row...</p>
        </div>
      ) : ( */}
     

        <DataTable
          columns={columns}
          data={Array.isArray(tableData) ? tableData : []}
          pagination
          highlightOnHover
          customStyles={customStyles}
          noDataComponent="No data available"
          onRowClicked={(row) => row}
          fixedHeader
          fixedHeaderScrollHeight="400px"
          persistTableHead
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
      <div className="fixed top-3/4 right-0 z-10 flex flex-col">
        <button
          className="
          px-4
          py-2
          bg-teal-600
          text-white
          font-semibold
          rounded-l-full
          shadow-md
          hover:bg-teal-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-teal-500
          mb-5
          flex items-center justify-center
        "
          onClick={handleSaveProject}>
          Save
        </button>

        {/* Exit Button */}
        <button
          className="
          px-4
          py-2
          bg-teal-600
          text-white
          font-semibold
          rounded-l-full
          shadow-md
          hover:bg-teal-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-teal-500
        "
          onClick={() => navigate(-1)}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
