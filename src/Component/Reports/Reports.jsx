import React, { useState } from "react";
import Header from "../Header/Header";
import { FaHome } from "react-icons/fa";
import { RiAddFill, RiIndentIncrease } from "react-icons/ri";
import { LiaTradeFederation } from "react-icons/lia";
import { BsUiRadios, BsWindowStack } from "react-icons/bs";
import { Avatar, AvatarGroup } from "@mui/material";

const Reports = () => {
  const [isSelected, setIsSelected] = useState("project");
  const projects = [
    {
        id: 1,
        projectName: "Website Redesign",
        version: "v1.0",
        start: "2024-01-15",
        end: "2024-06-15",
        hours: 400,
        progress: "75%",
        creator: "url_to_avatar_image1",
       
        assignedTo:["url_to_avatar_image2", "url_to_avatar_image3"],
     
        status: "In Progress",
        billing: "Hourly",
        budget: "$50,000",
        client: "url_to_avatar_image4",
      
      },
    {
      id: 2,
      projectName: "Mobile App Development",
      version: "v2.1",
      start: "2024-02-10",
      end: "2024-07-20",
      hours: 600,
      progress: "50%",
      creator: "Jane Smith",
      assignedTo: "Michael Johnson",
      status: "In Progress",
      billing: "Fixed Rate",
      budget: "$80,000",
      client: "XYZ Corp",
    },
    {
      id: 3,
      projectName: "Product Launch",
      version: "v1.2",
      start: "2024-03-05",
      end: "2024-09-30",
      hours: 800,
      progress: "25%",
      creator: "Emily Brown",
      assignedTo: "David Wilson",
      status: "Planning",
      billing: "Fixed Rate",
      budget: "$100,000",
      client: "PQR Corp",
    },
    {
      id: 4,
      projectName: "Marketing Campaign",
      version: "v1.0",
      start: "2024-04-20",
      end: "2024-08-30",
      hours: 300,
      progress: "90%",
      creator: "Mark Johnson",
      assignedTo: "Emily Davis",
      status: "Completed",
      billing: "Fixed Rate",
      budget: "$40,000",
      client: "LMN Corp",
    },
    {
      id: 5,
      projectName: "New Feature Development",
      version: "v3.0",
      start: "2024-05-10",
      end: "2024-10-31",
      hours: 1000,
      progress: "40%",
      creator: "Alex White",
      assignedTo: "Chris Brown",
      status: "In Progress",
      billing: "Hourly",
      budget: "$120,000",
      client: "DEF Corp",
    },
  ];

  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Reports</span>
        </div>
        <div className="p-4 shadow-2xl">
          <div className="flex justify-center items-center gap-4  ">
            <div
              className={`flex items-center px-2 py-1 rounded cursor-pointer gap-2 ${
                isSelected === "project" ? "bg-gray-300" : ""
              }`}
              onClick={() => setIsSelected("project")}
            >
              <BsWindowStack />
              <span>Project</span>
            </div>
            <div
              className={`flex items-center px-2 py-1 rounded cursor-pointer gap-2 ${
                isSelected === "task" ? "bg-gray-300" : ""
              }`}
              onClick={() => setIsSelected("task")}
            >
              <BsUiRadios />
              <span>Task</span>
            </div>
            <div
              className={`flex items-center px-2 py-1 rounded cursor-pointer gap-2 ${
                isSelected === "defect" ? "bg-gray-300" : ""
              }`}
              onClick={() => setIsSelected("defect")}
            >
              <LiaTradeFederation />
              <span>Defect</span>
            </div>
            <div
              className={`flex items-center px-2 py-1 rounded cursor-pointer gap-2 ${
                isSelected === "incident" ? "bg-gray-300" : ""
              }`}
              onClick={() => setIsSelected("incident")}
            >
              <RiIndentIncrease />
              <span>Incident</span>
            </div>
          </div>
          <div className="flex justify-between p-2">
            <div className="text-[22px] font-semibold">Reports</div>
           
          </div>
          <div className="border border-b-gray-300 my-2"></div>
          <div className="py-3">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Project Name</th>
                  <th>Version</th>
                  <th>Start</th>
                  <th>end</th>
                  <th>Hours</th>
                  <th>Progress</th>
                  <th>Creator</th>
                  <th>Assigned To</th>
                  <th>Status</th>
                  <th>Billing</th>
                  <th>Budget</th>
                  <th>Client</th>
                </tr>
              </thead>
              <tbody>
  {projects.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.projectName}</td>
      <td>{item.version}</td>
      <td>{item.start}</td>
      <td>{item.end}</td>
      <td>{item.hours}</td>
      <td>{item.progress}</td>
      <td>
        <Avatar src={item.creator} />
      </td>
      <td>
        <AvatarGroup>
          {Array.isArray(item.assignedTo) &&
            item.assignedTo.map((el, index) => (
              <Avatar key={index} src={el} />
            ))}
        </AvatarGroup>
      </td>
      <td>
        <div
          className={` py-1 text-white min-w-10 rounded-full ${
            item.status === "In Progress"
              ? "bg-yellow-400"
              : item.status === "Planning"
              ? "bg-cyan-500"
              : item.status === "Completed"
              ? "bg-green-500"
              : ""
          }`}
        >
          {item.status}
        </div>
      </td>
      <td>{item.billing}</td>
      <td>{item.budget}</td>
      <td>
        <Avatar src={item.client} />
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
