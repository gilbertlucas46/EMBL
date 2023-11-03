import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import style from "@/app/components/Sheets/sheets.module.scss";

import { SheetProps } from "@/lib/types";
import Row from "../Row/Row";

const Sheet: React.FC<SheetProps> = ({ data }) => {
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
                {Rows.map((row, index) => (
                  <Row key={index} row={row} />
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
