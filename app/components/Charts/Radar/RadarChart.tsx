import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { DatatypeScores } from "@/lib/types";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  plugins
);

const RadarChart = ({
  datatypeScores,
  title,
}: {
  datatypeScores: DatatypeScores[];
  title: string;
}) => {
  const labels = datatypeScores.map((item) => item.id);
  const scores = datatypeScores.map((item) => item.score);
  const data = {
    labels: labels,
    datasets: [
      {
        data: scores,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "#609fd3",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      // <-- note change in options from scale to scales
      r: {
        grid: {
          circular: true,
        },
        beginatzero: true,
      },
    },
    plugins: {
      // title: {
      //   display: true,
      //   text: `Data Type Scores: ${title} and lung carcinoma`,
      //   position: `top`,
      //   align: `left`,
      // },
      legend: {
        display: false,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
