"use client";

import React, { useState } from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import { RowProps } from "@/lib/types";
import { makeStyles } from "@mui/styles";
import { Box, Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import RowTabs from "@/app/components/RowTabs/RowTabs";
import style from "@/app/components/Sheets/sheets.module.scss";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const Row = ({ row }: RowProps) => {
  const { target, score, datatypeScores } = row;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const formattedScore = score.toFixed(3);

  // 3. In the Approved Symbol column, construct a link to the relevant t
  // target profile page in Open Targets Platform using the following link construct:
  // https://platform.opentargets.org/target/ + `target.approvedName`

  // NOTE: 💁 https://platform.opentargets.org/target/ + `target.approvedName` gives a 404 error
  // so I just used the target.id instead
  const linkTo = `https://platform.opentargets.org/target/${target.id}`;

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell className={style["tableToggleButton"]}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ImMinus /> : <ImPlus />}
            {/* {
              Add functionality so that when a user clicks a ‘+’ button in
              the first column, the table row is expanded. When the row is expanded,
              show a tab bar that toggles between a bar chart and a radar/polar chart
              with the individual data type association scores found in the

              NOTE: 💁 as additional user feedback, when the row is expanded I changed the icon to '-'
            } */}
          </IconButton>
        </TableCell>
        <TableCell className={style["tableCell"]} component="th" scope="row">
          <a href={linkTo} target="_blank">
            {target.approvedSymbol}
          </a>
        </TableCell>
        <TableCell className={style["tableCell"]} align="left">
          {target.approvedName}
        </TableCell>
        <TableCell className={style["tableCell"]} align="left">
          {formattedScore}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <RowTabs datatypeScores={datatypeScores} target={target} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
