"use client";

import React, { useState } from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import { RowProps } from "@/lib/types";
import { makeStyles } from "@mui/styles";
import { Box, Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import RowTabs from "@/app/components/RowTabs/RowTabs";

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
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ImMinus /> : <ImPlus />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {target.approvedSymbol}
        </TableCell>
        <TableCell align="left">{target.approvedName}</TableCell>
        <TableCell align="left">{formattedScore}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <RowTabs datatypeScores={datatypeScores} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
