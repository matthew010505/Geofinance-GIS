import React, { useState } from "react";
import JsonData from "../data/data.json";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  TableSortLabel,
} from "@mui/material";
import Dashboardheader from "../Dashboard/dashboardheader";

function Tableview() {
  const itemsPerPage = 15;
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTokens, setSearchTokens] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    const tokens = value.toLowerCase().split(" ");
    setSearchTokens(tokens);
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedData = sortBy
    ? [...JsonData].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : JsonData;

  const filteredData = sortedData.filter((info) =>
    searchTokens.every((token) =>
      Object.values(info).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(token);
        } else if (
          typeof value === "number" &&
          (value.toString().includes(token) || token === value.toString())
        ) {
          return true;
        }
        return false;
      })
    )
  );

  function capitalizeText(text) {
    return text.toLowerCase().replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  const displayData = filteredData
    .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
    .map((info) => {
      return (
        <TableRow key={info.id}>
          <TableCell>{info["S No"]}</TableCell>
          <TableCell>{info["Name of BC"]}</TableCell>
          <TableCell>{info["Contact Number"]}</TableCell>
          <TableCell>{capitalizeText(info["Gender"])}</TableCell>
          <TableCell>{info["Bank Name"]}</TableCell>
          <TableCell>{info["State"]}</TableCell>
          <TableCell>{info["CROP NAME"]}</TableCell>
          <TableCell>{info["SEASON"]}</TableCell>
        </TableRow>
      );
    });

  return (
    <div>
      <Dashboardheader />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 20px 5px 20px",
        }}
      >
        <h1
          style={{ textAlign: "center", fontWeight: "100px", fontSize: "30px" }}
        >
          Table of Contents
        </h1>
        <div style={{ marginLeft: "auto" }}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ marginBottom: "10px" }}
          />
        </div>
      </div>

      <TableContainer
        component={Paper}
        style={{ marginTop: "20px", marginLeft: "15px", marginRight: "10px" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "black" }}>
                <TableSortLabel
                  active={sortBy === "S No"}
                  direction={sortBy === "S No" ? sortOrder : "asc"}
                  onClick={() => handleSort("S No")}
                  style={{ color: "white", paddingLeft: "0" }}
                >
                  S.NO
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ backgroundColor: "black" }}>
                <TableSortLabel
                  active={sortBy === "Name of BC"}
                  direction={sortBy === "Name of BC" ? sortOrder : "asc"}
                  onClick={() => handleSort("Name of BC")}
                  style={{ color: "white", paddingLeft: "0" }}
                >
                  Name of BC
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ backgroundColor: "black" }}>
                <TableSortLabel
                  active={sortBy === "Contact Number"}
                  direction={sortBy === "Contact Number" ? sortOrder : "asc"}
                  onClick={() => handleSort("Contact Number")}
                  style={{ color: "white" }}
                >
                  Contact No
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ backgroundColor: "black" }}>
                <TableSortLabel
                  active={sortBy === "Gender"}
                  direction={sortBy === "Gender" ? sortOrder : "asc"}
                  onClick={() => handleSort("Gender")}
                  style={{ color: "white" }}
                >
                  Gender
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ backgroundColor: "black" }}>
                <TableSortLabel
                  active={sortBy === "Bank Name"}
                  direction={sortBy === "Bank Name" ? sortOrder : "asc"}
                  onClick={() => handleSort("Bank Name")}
                  style={{ color: "white" }}
                >
                  Bank Name
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ backgroundColor: "black" }}>
                <TableSortLabel
                  active={sortBy === "State"}
                  direction={sortBy === "State" ? sortOrder : "asc"}
                  onClick={() => handleSort("State")}
                  style={{ color: "white" }}
                >
                  State
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ backgroundColor: "black" }}>
                <TableSortLabel
                  active={sortBy === "CROP NAME"}
                  direction={sortBy === "CROP NAME" ? sortOrder : "asc"}
                  onClick={() => handleSort("CROP NAME")}
                  style={{ color: "white" }}
                >
                  Crop Name
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ backgroundColor: "black" }}>
                <TableSortLabel
                  active={sortBy === "SEASON"}
                  direction={sortBy === "SEASON" ? sortOrder : "asc"}
                  onClick={() => handleSort("SEASON")}
                  style={{ color: "white" }}
                >
                  Season
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{displayData}</TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={JsonData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={itemsPerPage}
        rowsPerPageOptions={[]}
      />
    </div>
  );
}

export default Tableview;
