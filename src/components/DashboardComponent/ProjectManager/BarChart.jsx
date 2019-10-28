import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    "Project 7"
  ],
  datasets: [
    {
      label: "Total Defects by Project",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default function BarChart() {
  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={255}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}
