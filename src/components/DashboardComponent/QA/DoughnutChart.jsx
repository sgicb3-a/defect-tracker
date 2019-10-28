import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["New", "Opened", "Reopened"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default function DoughnutChart() {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
}
