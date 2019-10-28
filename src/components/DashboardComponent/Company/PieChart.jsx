import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Finished Projects", "Current Projects", "Unfinished Projects"],
  datasets: [
    {
      data: [47, 8, 2],
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
