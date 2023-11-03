import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import countryData from "../public/countryData.json";


const DataTable = () => {
  const [create, setCreate] = useState(countryData);
  console.log("create ", create);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">code</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">nameUn</TableCell>
            <TableCell align="right">continent</TableCell>
            <TableCell align="right">hasStates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {create?.countries?.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.nameUn}</TableCell>
              <TableCell align="right">{row.continent}</TableCell>
              <TableCell align="right">{row.hasStates}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
