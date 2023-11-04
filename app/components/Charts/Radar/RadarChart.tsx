import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { DatatypeScores } from "@/lib/types";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    // <-- note change in options from scale to scales
    r: {
      grid: {
        circular: true,
      },
      beginatzero: true,
    },
  },
};

const RadarChart = ({
  datatypeScores,
}: {
  datatypeScores: DatatypeScores[];
}) => {
  const labels = datatypeScores.map((item) => item.id);
  const score = datatypeScores.map((item) => item.score);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: score, // Example data, you can replace this with your actual data
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "#609fd3",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // Add your chart options here
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
