"use client";

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DatatypeScores, Target } from "@/lib/types";
import BarChart from "../Charts/Bar/BarChart";
import RadarChart from "../Charts/Radar/RadarChart";
import style from "@/app/components/Sheets/sheets.module.scss";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`chart-tabpanel-${index}`}
      aria-labelledby={`chart-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: "100%", padding: "0" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function RowTabs({
  datatypeScores,
  target,
}: {
  datatypeScores: DatatypeScores[];
  target: Target;
}) {
  const [value, setValue] = useState(0);
  const labels = datatypeScores.map((item) => {
    // 6. Format the chart labels to remove the underscores
    // and capitalise each word in the data type label.
    const formattedLabel = item.id
      .split("_")
      .map((word) =>
        word === "rna"
          ? word.toUpperCase()
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

    return formattedLabel;
  });

  const scores = datatypeScores.map((item) => item.score);
  const chartTitle = `Data Type Scores: ${target.approvedSymbol} and lung carcinoma`;

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", padding: "16px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Basic tabs"
            className={style.tabs}
          >
            <Tab
              color="primary"
              className={style.tab}
              label="Bar chart"
              {...a11yProps(0)}
            />
            <Tab
              color="primary"
              className={style.tab}
              label="Radar chart"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <BarChart data={data} title={chartTitle} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <RadarChart data={data} title={chartTitle} />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `chart-tab-${index}`,
    "aria-controls": `chart-tabpanel-${index}`,
  };
}

export default RowTabs;
