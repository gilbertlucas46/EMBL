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
import { ChartData } from "@/lib/types";
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

const RadarChart = ({ data, title }: { data: ChartData; title: string }) => {
  const radarData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderColor: "#609fd3",
      borderWidth: 2,
    })),
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
      <span className={style.chartTitle}>{title}</span>
      <Radar
        className={style["RadarchartBox"]}
        data={radarData}
        options={options}
      />
    </>
  );
};

export default RadarChart;
