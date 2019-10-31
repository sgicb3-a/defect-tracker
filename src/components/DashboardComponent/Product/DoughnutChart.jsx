import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Platinum", "Gold", "Silver", "Bronze"],
  datasets: [
    {
      data: [3, 11, 4, 2],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#20c997"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#20c997"]
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
