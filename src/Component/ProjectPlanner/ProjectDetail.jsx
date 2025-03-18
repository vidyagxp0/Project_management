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
import axios from "axios";

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
      whiteSpace: "nowrap", // Prevents text from wrapping
      overflow: "visible",  // Ensures text is fully visible
      textOverflow: "unset", // Prevents truncation
      fontSize: "14px", // Adjust if needed
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
  console.log(id)
  const [projectDetails, setProjectDetails] = useState({
    description: '',
    comments: '',
    company_name:'',
    year:"",
  });  const [weekendData, setWeekendData] = useState([]);
  const [holidayData, setHolidayData] = useState([]);
  const [selectedWeekends, setSelectedWeekends] = useState([]);
  const [isWeekendModalOpen, setIsWeekendModalOpen] = useState(false);
  const [isHolidayModalOpen, setIsHolidayModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [companies, setCompanies] = useState([]);
  const [getProject, setGetProject] = useState([]);
  const [getWeekEnd, setGetWeekEnd] = useState([]);
  const [getHolidays, setGetHolidays] = useState([]);
  console.log(companies,"companies")
  console.log(getProject,"getProject")
  console.log(getWeekEnd,"getWeekEnd")
  console.log(getHolidays,"getHolidays")
  console.log(getProject.company_name,"name name")
  console.log(year,"year")

  
    
  const [tableData, setTableData] = useState([ ]); // Store the table rows
  console.log(tableData,"Tablke data")
  const [data, setData] = useState([
   
  ]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}`);
        setCompanies(response.data); // Ensure response is an array
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("Failed to load companies. Please try again.");
      }
    };

    fetchCompanies();
  }, [])

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/project-planner`);
        setGetProject(response.data); // Ensure response is an array
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("Failed to load companies. Please try again.");
      }
    };

    fetchCompanies();
  }, [])

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/weekends`);
        setGetWeekEnd(response.data); // Ensure response is an array
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("Failed to load companies. Please try again.");
      }
    };

    fetchCompanies();
  }, [])

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/holidays`);
        setGetHolidays(response.data); // Ensure response is an array
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("Failed to load companies. Please try again.");
      }
    };

    fetchCompanies();
  }, [])

  useEffect(() => {
    if (getProject?.project_details) {
      try {
        setTableData(JSON.parse(getProject.project_details)); // Parse the JSON string
      } catch (error) {
        console.error("Error parsing project details:", error);
        setTableData([]); // Ensure fallback to empty array
      }
    }
  }, [getProject]);


  // const handleChange = (e, index, key) => {
  //   const updatedData = [...tableData];
  //   updatedData[index][key] = e.target.value;
  //   setTableData(updatedData);
  // };

  const handleChange = (e, index, key) => {
    const updatedData = [...tableData];
    updatedData[index][key] = e.target.value;
  
    // If No of Days or Start Date changes, recalculate End Date
    if (key === "noOfDays" || key === "startDate") {
      const startDate = updatedData[index].startDate;
      const noOfDays = parseInt(updatedData[index].noOfDays, 10);
  
      if (startDate && noOfDays > 0) {
        const endDate = calculateEndDate(startDate, noOfDays, getHolidays, getWeekEnd.weekend_days);
        updatedData[index]["endDate"] = endDate;
      }
    }
  
    setTableData(updatedData);
  };
  
  // Function to calculate end date by skipping holidays and weekends
  const calculateEndDate = (startDate, numDays, holidays, weekends) => {
    let currentDate = new Date(startDate);
    let workingDaysCount = 0;
  
    // Convert holidays to a Set for quick lookup
    const holidaySet = new Set();
    holidays.forEach(holiday => {
      let start = new Date(holiday.start_date);
      let end = new Date(holiday.end_date || holiday.start_date); // Handle single-day holidays
      while (start <= end) {
        holidaySet.add(start.toISOString().split("T")[0]); // Store in YYYY-MM-DD format
        start.setDate(start.getDate() + 1);
      }
    });
  
    // Loop until we count the required working days
    while (workingDaysCount < numDays) {
      let formattedDate = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD format
      let dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  
      // Check if it's a working day BEFORE moving forward
      if (!weekends.includes(dayName) && !holidaySet.has(formattedDate)) {
        workingDaysCount++; // Count only valid working days
      }
  
      // Move to the next day AFTER checking
      if (workingDaysCount < numDays) {
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
  
    return currentDate.toISOString().split("T")[0]; // Return final end date
  };
  
  
  
  const handleSaveProject = async () => {
    try {
      const projectData = {
        description: projectDetails.description,
        comments: projectDetails.comments,
        company_name: companies.name,
        year: getWeekEnd.year,

        project_details: JSON.stringify(tableData), 
      };

      

      const response = await axios.put(
        `http://127.0.0.1:8000/api/project-planner/project-planner/${id}`,
        projectData
      );
      
      console.log('Project saved:', response.data); // Log the response from the server
    } catch (error) {
      console.error('Error saving project:', error); // Handle errors
    }
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
      minWidth: "200px"
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
      minWidth: "200px"
    },
    {
      name: "Customer Name",
      cell: (row, index) => (
        <input
          type="text"
          value={row.customerName}
          onChange={(e) => handleChange(e, index, "customerName")}
          className="border p-1 rounded w-full w"
        />
      ),
      sortable: true,
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
      
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
      minWidth: "200px"
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
      minWidth: "220px"
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
      minWidth: "200px"
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
      minWidth: "200px"
    },
  ];

  const addRow = () => {
    setTableData((prevData) => [
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
    startDate: '',
    endDate: '',
    reason: '',
  });



  const handleSaveWeekendDays = async () => {
    try {
      const weekendData = {
        weekend_days: selectedWeekends,
        year: year,
      };

      // Make POST request to the API
      const response = await axios.post(
        `http://127.0.0.1:8000/api/project-planner/companies/${id}/weekends`, // Use dynamic company ID from URL params
        weekendData
      );

      console.log('API response:', response.data); 

      setIsWeekendModalOpen(false);
    } catch (error) {
      console.error('Error saving weekend days:', error); 
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
        `http://127.0.0.1:8000/api/project-planner/companies/${id}/holidays`, // Use company ID from URL
        holidayData
      );

      console.log('Holiday saved:', response.data); // Log the response from the server

      // Optionally, close the modal after saving
      setIsHolidayModalOpen(false);
    } catch (error) {
      console.error('Error saving holiday:', error); // Handle any errors
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
              {companies.name}
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
              value={companies.name} // Dynamically show the company ID
            />
          </div>

          {/* Year */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Year
            </label>
            <input
              type="text"
              value={year} // Bind the input to state
              onChange={(e) => setYear(e.target.value)} // Update state on input change
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
            fullWidth
            InputProps={{ readOnly: true }}
            value={companies.name} // Display company ID or name here
          />
          <TextField
            label="Year"
            fullWidth
            InputProps={{ readOnly: true }}
            value={new Date().getFullYear()} // You can set the current year or dynamically pass it
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
          <h2 className="text-2xl font-semibold text-gray-800">
            {companies.name}
          </h2>
        </div>

        {/* Project Details Form */}
      <div className="p-6 shadow-2xl mt-4 bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800"> {companies.name}</h2>
        </div>

        {/* 🏢 Project Details Form */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Company Name</label>
            <input
              type="text"
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
              onChange={(e) => setProjectDetails({ ...projectDetails, company_name: e.target.value })}
              value={companies.name}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Comments</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Enter comments..."
              value={getProject.comments}
              onChange={(e) => setProjectDetails({ ...projectDetails, comments: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Document</label>
            <input type="file" className="w-full p-3 border rounded-lg bg-white" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Remark</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Enter remark..."
              value={getProject.description}
              onChange={(e) => setProjectDetails({ ...projectDetails, description: e.target.value })}
            />
          </div>
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
  data={tableData|| []}
  pagination
  highlightOnHover
  customStyles={customStyles}
  noDataComponent="No data available"
  onRowClicked={(row) => console.log(row)}
  fixedHeader // Ensures header is always visible
  fixedHeaderScrollHeight="400px" // Adjust height as needed
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
        onClick={handleSaveProject}
            
          >
          Submit
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
        onClick={() => navigate(-1)}
          >
            Exit
          </button>
        </div>
    </div>
  );
};

export default ProjectDetail;

