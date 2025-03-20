import React, { useEffect, useState } from "react";
// import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import gantt from "dhtmlx-gantt";



const GanttChart = ({ planners }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (planners.length > 0) {
      let formattedTasks = [];

      planners.forEach((planner) => {
        const projectDetails = JSON.parse(planner.project_details);

        projectDetails.forEach((task, index) => {
          formattedTasks.push({
            id: `${planner.id}-${task.sNo}`,
            text: task.milestones || "Unnamed Task",
            start_date: task.startDate, // Ensure this is in YYYY-MM-DD format
            duration: task.noOfDays ? parseInt(task.noOfDays) : 10,
            progress: task.percentComplete ? parseInt(task.percentComplete) / 100 : 0.5,
            parent: 0, // Parent task if needed
          });
        });
      });

      setTasks(formattedTasks);
    }
  }, [planners]);

  useEffect(() => {
    gantt.init("gantt-container");
    gantt.parse({ data: tasks });
  }, [tasks]);

  return <div id="gantt-container" style={{ width: "100%", height: "500px" }}></div>;
};

export default GanttChart;
