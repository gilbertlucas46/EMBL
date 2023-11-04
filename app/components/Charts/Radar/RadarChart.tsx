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
  ChartOptions,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { DatatypeScores } from "@/lib/types";
import style from "@/app/components/Sheets/sheets.module.scss";

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
  const chartTitle = `Data Type Scores: ${title} and lung carcinoma`;
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

  const options: ChartOptions<"radar"> = {
    scales: {
      r: {
        grid: {
          circular: true,
        },
        max: 1,
        ticks: {
          // NOTE: 💁 Unfortunately in chartjs as zero(0) is the lowest value
          // it is skipped so it starts at 0.25
          stepSize: 0.25,
          format: { maximumFractionDigits: 3, minimumFractionDigits: 3 },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <span className={style.chartTitle}>{chartTitle}</span>
      <Radar data={data} options={options} />
    </>
  );
};

export default RadarChart;
