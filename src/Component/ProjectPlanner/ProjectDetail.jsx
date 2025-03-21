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
  console.log(id,"idididid")
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
  const [isLoading, setIsLoading] = useState(true);
  
  // console.log(companies,"companies")
  // console.log(getProject,"getProject")
  console.log(getWeekEnd,"getWeekEnd")
  console.log(getHolidays,"getHolidays")
  // console.log(getProject.company_name,"name name")
  // console.log(year,"year")
  
  const [loadingCompanies, setLoadingCompanies] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [loadingWeekends, setLoadingWeekends] = useState(false);
  const [loadingHolidays, setLoadingHolidays] = useState(false);
    
  const [tableData, setTableData] = useState([ ]); // Store the table rows
  useEffect(() => {
    // Loader remains until tableData is available
    if (tableData && tableData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [tableData]);
  console.log(tableData,"Tablke data")
  const [data, setData] = useState([
   
  ]);

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoadingCompanies(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}`);
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
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
        const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/project-planner`);
        setGetProject(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
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
        const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/weekends`);
        setGetWeekEnd(response.data);
      } catch (error) {
        console.error("Error fetching weekends:", error);
        toast.error("Failed to load weekends. Please try again.");
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
        const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/holidays`);
        setGetHolidays(response.data);
      } catch (error) {
        console.error("Error fetching holidays:", error);
        toast.error("Failed to load holidays. Please try again.");
      } finally {
        setLoadingHolidays(false);
      }
    };
    fetchHolidays();
  }, [id]);

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}`);
  //       setCompanies(response.data); // Ensure response is an array
  //     } catch (error) {
  //       console.error("Error fetching companies:", error);
  //       toast.error("Failed to load companies. Please try again.");
  //     }
  //   };

  //   fetchCompanies();
  // }, [])

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/project-planner`);
  //       setGetProject(response.data); // Ensure response is an array
  //     } catch (error) {
  //       console.error("Error fetching companies:", error);
  //       toast.error("Failed to load companies. Please try again.");
  //     }
  //   };

  //   fetchCompanies();
  // }, [])

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/weekends`);
  //       setGetWeekEnd(response.data); // Ensure response is an array
  //     } catch (error) {
  //       console.error("Error fetching companies:", error);
  //       toast.error("Failed to load companies. Please try again.");
  //     }
  //   };

  //   fetchCompanies();
  // }, [])

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/project-planner/companies/${id}/holidays`);
  //       setGetHolidays(response.data); // Ensure response is an array
  //     } catch (error) {
  //       console.error("Error fetching companies:", error);
  //       toast.error("Failed to load companies. Please try again.");
  //     }
  //   };

  //   fetchCompanies();
  // }, [])

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

  // const handleChange = (e, index, key) => {
  //   const updatedData = [...tableData];
  //   updatedData[index][key] = e.target.value;
  
  //   // If No of Days or Start Date changes, recalculate End Date
  //   if (key === "noOfDays" || key === "startDate") {
  //     const startDate = updatedData[index].startDate;
  //     const noOfDays = parseInt(updatedData[index].noOfDays, 10);
  
  //     if (startDate && noOfDays > 0) {
  //       const endDate = calculateEndDate(startDate, noOfDays, getHolidays, getWeekEnd.weekend_days);
  //       updatedData[index]["endDate"] = endDate;
  //     }
  //   }
  
  //   setTableData(updatedData);
  // };
  
  // Function to calculate end date by skipping holidays and weekends
 
  
  
  
  const handleSaveProject = async () => {
    try {
      const projectData = {
        description: projectDetails.description,
        comments: projectDetails.comments,
        // company_name: projectDetails.name,
        // year: getWeekEnd.year,

        project_details: JSON.stringify(tableData), 
      };

      console.log(projectData,'>>>>>>>>>>>>>>>>>');
      

      const response = await axios.put(
        `http://127.0.0.1:8000/api/project-planner/project-planner/${id}`,
        projectData
      );
      
      console.log('Project saved:', response.data); // Log the response from the server
      toast.success("Project updated successfully!");
      navigate("/project-planner");
    } catch (error) {
      console.error('Error saving project:', error); // Handle errors
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
      minWidth: "200px"
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
      minWidth: "200px"
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
      minWidth: "200px"
    },
    {
      name: "Priority",
      cell: (row, index) => (
        <select
          value={row.priority}
          onChange={(e) => handleChange(e, index, "priority")}
          className="border p-1 rounded w-full bg-white cursor-pointer"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      ),
      sortable: true,
      minWidth: "200px"
    },   
    {
      name: "Assignee",
      cell: (row, index) => (
        <select
          value={row.assignee}
          onChange={(e) => handleChange(e, index, "assignee")}
          className="border p-1 rounded w-full bg-white cursor-pointer"
        >
          <option value="Nickshay">Nickshay</option>
          <option value="Pankaj">Pankaj</option>
          <option value="Farhan">Farhan</option>
          <option value="Himanshu">Himanshu</option>
          <option value="Gautam">Gautam</option>
        </select>
      ),
      sortable: true,
      minWidth: "200px"
    }, 
    {
      name: "Role",
      cell: (row, index) => (
        <select
          value={row.assignee}
          onChange={(e) => handleChange(e, index, "role")}
          className="border p-1 rounded w-full bg-white cursor-pointer"
        >
          <option value="Validation">Validation</option>
          <option value="Configuration">Configuration</option>
          <option value="Testing">Testing</option>
          <option value="SME">SME</option>
          <option value="PM">PM</option>
          <option value="Steering Committee">Steering Committee</option>
        </select>
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
      name: "Status",
      cell: (row, index) => (
        <select
          value={row.status}
          onChange={(e) => handleChange(e, index, "status")}
          className="border p-1 rounded w-full bg-white cursor-pointer"
        >
          <option value="Started">Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Completed">Completed</option>
        </select>
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
      minWidth: "200px"
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
      minWidth: "220px"
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
    {
      name: "Action",
      cell: (row, index) => (
        <button
          onClick={() => handleDelete(index)}
          className="text-red-600 hover:text-red-800 p-2"
        >
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
  // const addRow = () => {
  //   setTableData((prevData) => [
  //     ...prevData,
  //     {
  //       sNo: prevData.length + 1,
  //       phase: "",
  //       milestones: "",
  //       customerName: "",
  //       vendorName: "",
  //       projectDetails: "",
  //       projectPhase: "",
  //       progress: "",
  //       status: "",
  //       assign: "",
  //       role: "",
  //       responsibility: "",
  //       startDate: "",
  //       endDate: "",
  //       holidays: "",
  //       supportingDocuments: "",
  //       percentComplete: "",
  //       remarks: "",
  //     },
  //   ]);
  // };
  
  // const addRow = () => {
  //   setTableData((prevData) => {
  //     console.log("Previous Data:", prevData);
  
  //     if (!Array.isArray(prevData)) {
  //       prevData = []; // Default empty array if prevData is invalid
  //     }
  
  //     return [
  //       ...prevData,
  //       {
  //         sNo: prevData.length + 1,
  //         phase: "",
  //         milestones: "",
  //         customerName: "",
  //         vendorName: "",
  //         projectDetails: "",
  //         progress: "",
  //         status: "",
  //         assignee: "",
  //         role: "",
  //         responsibility: "",
  //         startDate: "",
  //         endDate: "",
  //         noOfDays: "",
  //         actualStartDate:"",
  //         actualEndDate:"",
  //         supportingDocuments: "",
  //         remarks: "",
  //       },
  //     ];
  //   });
  // };
  
  const addRow = () => {
    setTableData((prevData) => {
      if (!Array.isArray(prevData)) prevData = [];
  
      const lastRow = prevData[prevData.length - 1];
      const newStartDate = lastRow?.endDate ? getNextWorkingDay(lastRow.endDate) : "";
  
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
    startDate: '',
    endDate: '',
    reason: '',
  });


  const calculateEndDate = (startDate, noOfDays) => {
    if (!startDate || !noOfDays) return "";
  
    let currentDate = new Date(startDate); // Start from the given date
    let daysAdded = 0;
  
    while (daysAdded < noOfDays) {
      const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  
      // Check if it's a weekend
      const isWeekend = Array.isArray(getWeekEnd?.weekend_days) && getWeekEnd.weekend_days.includes(dayName);
  
      // Check if it's a holiday
      const formattedDate = currentDate.toISOString().split("T")[0];
      const isHoliday = Array.isArray(getHolidays) && getHolidays.some(holiday =>
        formattedDate >= holiday.start_date && formattedDate <= holiday.end_date
      );
  
      // Only count if it's not a weekend and not a holiday
      if (!isWeekend && !isHoliday) {
        daysAdded++; // Only count valid working days
      }
  
      if (daysAdded < noOfDays) {
        currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
      }
    }
  
    return currentDate.toISOString().split("T")[0]; // Return the correct end date
  };
  
    
  
  
  
  
  const getNextWorkingDay = (prevEndDate) => {
    if (!prevEndDate) return "";
  
    let currentDate = new Date(prevEndDate);
    
    while (true) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });
      const formattedDate = currentDate.toISOString().split("T")[0];
  
      const isWeekend = getWeekEnd?.weekend_days.includes(dayName);
      const isHoliday = getHolidays?.some(holiday => formattedDate >= holiday.start_date && formattedDate <= holiday.end_date);
  
      if (!isWeekend && !isHoliday) {
        return formattedDate; // Return first valid working day
      }
    }
  };
  
  const handleChange = (e, index, key) => {
    const value = e.target.value;
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index][key] = value;
  
      if (key === "startDate" || key === "noOfDays") {
        const startDate = updatedData[index].startDate;
        const noOfDays = updatedData[index].noOfDays;
        
        if (startDate && noOfDays) {
          updatedData[index].endDate = calculateEndDate(startDate, noOfDays);
        }
      }
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
        `http://127.0.0.1:8000/api/project-planner/companies/${id}/weekends`, // Use dynamic company ID from URL params
        weekendData
      );

      console.log('API response:', response.data); 
      toast.success("Weekend days saved successfully! 🎉");

      setIsWeekendModalOpen(false);
    } catch (error) {
      console.error('Error saving weekend days:', error); 
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
        `http://127.0.0.1:8000/api/project-planner/companies/${id}/holidays`, // Use company ID from URL
        holidayData
      );

      console.log('Holiday saved:', response.data); // Log the response from the server
      toast.success("Holidays saved successfully!");

      // Optionally, close the modal after saving
      setIsHolidayModalOpen(false);
    } catch (error) {
      console.error('Error saving holiday:', error); // Handle any errors
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
            <label className="block text-gray-700 font-medium mb-1">Remark</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Enter remark..."
              value={getProject.description}
              onChange={(e) => setProjectDetails({ ...projectDetails, description: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Customer Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Enter Customer Name..."
              value={getProject.customer_name}
              onChange={(e) => setProjectDetails({ ...projectDetails, customer_name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Vendore Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Enter Vendor Name..."
              value={getProject.vendore_name}
              onChange={(e) => setProjectDetails({ ...projectDetails, vendore_name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Document</label>
            <input type="file" className="w-full p-3 border rounded-lg bg-white" />
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

        {isLoading ? (
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
          <ClipLoader color="#007BFF" size={60} speedMultiplier={1.5} />
          <p className="mt-3 text-gray-600 text-lg font-semibold">Please wait...</p>
        </div>
      ) : (

        <DataTable
  columns={columns}
  // data={ [tableData] || [] }
  data={Array.isArray(tableData) ? tableData : []}

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
)}
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

