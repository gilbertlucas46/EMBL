"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import style from "@/app/components/Sheets/sheets.module.scss";
import { ImPlus, ImMinus } from "react-icons/im";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row({ row }) {
  const { target, score } = row;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

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
        <TableCell align="left">{score}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              suscipit vero iste officia, necessitatibus aut ullam aspernatur
              nisi fuga non eos tempora iure voluptas, consequatur porro
              perferendis sint blanditiis impedit.
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
const Sheet = ({ data }) => {
  const { rows: Rows } = data.associatedTargets;
  return (
    <div className={style.sheet}>
      <div className="container">
        <h1>Genes associated with lung carcinoma</h1>
        <div className={style.sheetWrapper}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell align="left">Approved Symbol</TableCell>
                  <TableCell align="left">Gene Name</TableCell>
                  <TableCell align="left">Overall Association Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Rows.map((row) => (
                  <Row key={row.id} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
