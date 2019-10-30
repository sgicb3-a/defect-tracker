import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Platinum", "Gold", "Silver", "Bronze"],
  datasets: [
    {
      data: [3, 11, 4, 2],
      backgroundColor: ["#e5e4e2", "#d4af37", "#aaa9ad", "#cd7f32"],
      hoverBackgroundColor: ["#e5e4e2", "#d4af37", "#aaa9ad", "#cd7f32"]
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
