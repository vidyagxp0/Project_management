import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gantt from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import config from "../../../config";

const GanttChart = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchPlanners = async () => {
      try {
        const response = await fetch(
          `${config.BASE_URL}/api/project-planner/companies/${id}/project-planner`
        );
        const data = await response.json();

        if (data.project_details) {
          const projectDetails = JSON.parse(data.project_details);

          const formattedTasks = projectDetails.map((task, index) => ({
            id: index + 1,
            phase: task.phase,
            milestones: task.milestones, 
            start_date: task.startDate,
            end_date: task.endDate,
            duration: task.noOfDays ? parseInt(task.noOfDays) : 1,
          }));

          setTasks(formattedTasks);
        }
      } catch (error) {
        console.error("Error fetching planners:", error);
      }
    };

    fetchPlanners();
  }, [id]);

  useEffect(() => {
    gantt.config.date_format = "%Y-%m-%d"; 
    gantt.config.grid_width = 600; 
    gantt.config.scale_height = 50; 

    // Define columns for Phase & Milestone separately
    gantt.config.columns = [
      { name: "phase", label: "Phase", align: "left", width: 150 },
      { name: "milestones", label: "Milestone", align: "left", width: 200 },
      { name: "start_date", label: "Start Date", align: "center", width: 100 },
      { name: "end_date", label: "End Date", align: "center", width: 100 },
    ];

    gantt.init("gantt-container");
    gantt.clearAll();
    gantt.parse({ data: tasks });
  }, [tasks]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[90vw] max-w-6xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Project Gantt Chart
        </h2>
        <div id="gantt-container" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </div>
  );
};

export default GanttChart;
