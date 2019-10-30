import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Local", "International", "Multinational"],
  datasets: [
    {
      data: [14, 5, 1],
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
