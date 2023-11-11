import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useMemo, useState } from "react";
import countryData from "../../public/countryData.json";

interface Country {
  id: string;
  code: string;
  name: string;
  nameUn: string;
  continent: string;
  hasStates: boolean;
}

const DataTable = () => {
  const [create, setCreate] = useState<Country[]>(countryData.countries);
  console.log("create ", create);

  const [filter, setFilter] = useState({ continent: "", hasStates: undefined });
  const [order, setOrder] = useState<"ASC" | "DESC" | undefined>();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const orderedData = useMemo(() => {
    if (!order) return create;
    return create.sort(({nameUn: a}, {nameUn: b}) => {
      if (order === "ASC") {
        return a > b ? 1 : a < b ? -1 : 0;
      } else {
        return a > b ? -1 : a < b ? 1 : 0;
      }
    });
  }, [create, order]);

  const filteredResult = useMemo(()=>{
    if(!filter.continent && !filter.hasStates) return orderedData;
    return orderedData.filter((row) => {
      return (
        (filter.continent ? row.continent === filter.continent : true) &&
        (filter.hasStates ? row.hasStates === filter.hasStates : true)
      );
    });
  }, [orderedData, filter]);

  return (
    <TableContainer component={Paper}>    

      <div>
        <label htmlFor="continent">Continent</label>
        <select
          name="continent"
          id="continent"
          onChange={handleFilterChange}
          value={filter.continent}
        >
          <option value="">All</option>
          <option value="AF">Africa</option>
          <option value="AS">Asia</option>
          <option value="EU">Europe</option>
          <option value="NA">North America</option>
          <option value="OC">Oceania</option>
          <option value="SA">South America</option>
        </select>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>            
            <TableCell>id</TableCell>
            <TableCell align="right">code</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">
              nameUn
              <button onClick={() => setOrder("ASC")}>ASC</button>
            </TableCell>
            <TableCell align="right">continent</TableCell>
            <TableCell align="right">hasStates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredResult.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
