import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DatatypeScores } from "@/lib/types";
import style from "@/app/components/Sheets/sheets.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({
  datatypeScores,
  title,
}: {
  datatypeScores: DatatypeScores[];
  title: string;
}) => {
  const labels = datatypeScores.map((item) => item.id);
  const scores = datatypeScores.map((item) => item.score);
  const chartTitle = `Data Type Scores: ${title} and lung carcinoma`;
  const data = {
    labels: labels,
    datasets: [
      {
        data: scores,
        backgroundColor: "#609fd3",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    layout: {
      padding: 20,
    },
    scales: {
      y: {
        ticks: {
          stepSize: 0.25,
          callback: (value, values, ctx) => {
            const numericValue = value as number;
            return numericValue.toFixed(3);
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: `Association Score`,
        position: `left`,
      },
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <span className={style.chartTitle}>{chartTitle}</span>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
