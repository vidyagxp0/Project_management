import React, { useEffect, useState } from "react";
import gantt from "dhtmlx-gantt";
import "../GanttChart/Gant-custom.css"; // Ensure you have this CSS file

const GanttChart = ({ planners }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (planners.length > 0) {
      let formattedTasks = [];

      planners.forEach((planner) => {
        const projectDetails = JSON.parse(planner.project_details);

        projectDetails.forEach((task) => {
          let startDate = task.startDate && task.startDate !== "0002-03-20"
            ? new Date(task.startDate)
            : new Date(); // Default to today if invalid

          let duration = task.noOfDays ? parseInt(task.noOfDays) : 1;
          let endDate = new Date(startDate);
          endDate.setDate(endDate.getDate() + duration - 1); // Calculate end date

          // Format to "DD-MM-YYYY"
          let formattedStartDate = startDate.toLocaleDateString("en-GB").replace(/\//g, "-");
          let formattedEndDate = endDate.toLocaleDateString("en-GB").replace(/\//g, "-");

          formattedTasks.push({
            id: `${planner.id}-${task.sNo}`,
            text: task.milestones || "Unnamed Task",
            start_date: formattedStartDate, 
            end_date: formattedEndDate,  // Adding End Date
            duration: duration,
            parent: 0, 
          });
        });
      });

      setTasks(formattedTasks);
    }
  }, [planners]);

  useEffect(() => {
    gantt.config.date_format = "%d-%m-%Y";  // Ensure correct date parsing
    gantt.init("gantt-container");

    gantt.config.columns = [
      { name: "text", label: "Task Name", tree: true, width: "*" },
      { name: "start_date", label: "Start Date", align: "center" },
      { name: "end_date", label: "End Date", align: "center" }  // Show End Date
    ];

    gantt.parse({ data: tasks });
  }, [tasks]);

  return <div id="gantt-container" style={{ width: "100%", height: "500px" }}></div>;
};

export default GanttChart;
