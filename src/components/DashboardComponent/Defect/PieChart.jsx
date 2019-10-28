import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["High Priority", "Medium Priority", "Low Priority"],
  datasets: [
    {
      data: [28, 42, 76],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default function PieChart() {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
}
