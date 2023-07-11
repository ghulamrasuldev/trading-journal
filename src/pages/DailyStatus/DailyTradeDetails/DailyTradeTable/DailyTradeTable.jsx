import React, { useEffect,useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { lightTheme } from '../../../../Theme/theme';
import "./dailyTradeTable.css";
import ModeChange from "../../../../Theme/ChangeMode";
import { light } from "@mui/material/styles/createPalette";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import axios from 'axios'
import { base_Url } from "../../../../Config/Config";


const DailyTradeTable = ({data}) => {
  const lightTheme = ModeChange();

  const tableHead = {
    fontSize: "13px",
    fontWeight: "400",
    color: `${lightTheme.tableHeadColor}`,
    borderBottom:`1px solid ${lightTheme.tableBorderColor}`
  };
  const tableData = {
    fontSize: "12px",
    fontWeight: "400",
    color: `${lightTheme.headingTextColor}`,
  };
  const tableStyle = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
  };
  return (
    <div className="tradeTableMain">
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell align="left" style={tableHead}>
                #
              </TableCell>
              <TableCell align="left" style={tableHead}>
                OpenTime
              </TableCell>
              <TableCell align="left" style={tableHead}>
                Put
              </TableCell>
              <TableCell align="left" style={tableHead}>
                Ticker
              </TableCell>
              <TableCell align="left" style={tableHead}>
                Volume
              </TableCell>
              <TableCell align="left" style={tableHead}>
                Net P&L
              </TableCell>
              <TableCell align="left" style={tableHead}>
                Setup
              </TableCell>
              <TableCell align="left" style={tableHead}>
                Notes
              </TableCell>
              <TableCell align="left" style={tableHead}>
                Tags
              </TableCell>
              <TableCell align="left" style={tableHead}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.slice(0,-1).map((row, index) => (
              <TableRow
                key={index}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                sx={{
                  "& td": {
                    borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
                  },
                }}
              >
                <TableCell align="left" style={tableData}>
                  0{index+1}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.openTime}
                </TableCell>
                <TableCell align="center" style={tableData}>
                  <p
                    className={row.volume < 10 ? "loss" : "profit"}
                    style={
                      row.volume< 10
                        ? {
                            backgroundColor: `${lightTheme.loss}`,
                            color: `${lightTheme.whiteText}`,
                          }
                        : {
                            backgroundColor: `${lightTheme.profit}`,
                            color: `${lightTheme.whiteText}`,
                          }
                    }
                  >
                    Put
                  </p>
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.ticker}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.volume}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {Number(row.netpl).toFixed(3)}
                </TableCell>
                <TableCell align="left" style={tableData}>
                 setUp
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  {row.Volume < 10 ? (
                    <img src='NotesIcon.png' alt="noteIcon" height={20} />
                  ) : (
                    <img src='NotesIcon2.png' alt="noteIcon" height={20} />
                  )}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  Tags
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  <Tooltip title="add record">

                  <p
                    className="addBtn"
                    onClick={() => {
                      console.log("clicked");
                    }}
                    style={{
                      backgroundColor: `${lightTheme.lightDarkBlue}`,
                      color: `${lightTheme.whiteText}`,
                    }}
                    >
                    +
                  </p>
                    </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DailyTradeTable;
