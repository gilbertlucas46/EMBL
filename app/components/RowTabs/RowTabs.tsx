"use client";

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DatatypeScores } from "@/lib/types";
import BarChart from "../Charts/Bar/BarChart";
import RadarChart from "../Charts/Radar/RadarChart";
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function RowTabs({ datatypeScores }: { datatypeScores: DatatypeScores }) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Bar chart" {...a11yProps(0)} />
            <Tab label="Radar chart" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <BarChart />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <RadarChart />
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
