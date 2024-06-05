import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Open", 11],
  ["Overdue", 2],
  ["inProgress", 2],
  ["Completed", 2],
  ["Stuck", 7],
];

export const options = {
  title: "Task Status",
};

 const PieChart =()=> {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  );
}

export default PieChart;
