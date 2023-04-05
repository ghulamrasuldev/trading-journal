import React from "react";
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

const tradeTableData = [
  {
    id: "1",
    OpenTime: "11:54:36",
    Put: "Buy",
    Ticker: "Dow",
    Volume: "13",
    NetPL: "$3,654.34",
    Setup: "LH Check",
    Notes: "./NotesIcon.png",
    NotesLoss: "./NotesIcon2.png",
    Tags: "RSI EMA",
  },
  {
    id: "2",
    OpenTime: "11:54:36",
    Put: "Buy",
    Ticker: "Dow",
    Volume: "2",
    NetPL: "$3,64.34",
    Setup: "LH Check",
    Notes: "./NotesIcon.png",
    NotesLoss: "./NotesIcon2.png",
    Tags: "RSI EMA",
  },
  {
    id: "3",
    OpenTime: "11:54:36",
    Put: "Buy",
    Ticker: "Dow",
    Volume: "19",
    NetPL: "$3,34.34",
    Setup: "LH Check",
    Notes: "./NotesIcon.png",
    NotesLoss: "./NotesIcon2.png",
    Tags: "RSI EMA",
  },
];

const DailyTradeTable = () => {
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
            {tradeTableData.map((row, index) => (
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
                  0{row.id}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.OpenTime}
                </TableCell>
                <TableCell align="center" style={tableData}>
                  <p
                    className={row.Volume < 10 ? "loss" : "profit"}
                    style={
                      row.Volume < 10
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
                    {row.Put}
                  </p>
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.Ticker}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.Volume}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.NetPL}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.Setup}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  {row.Volume < 10 ? (
                    <img src={row.NotesLoss} alt="noteIcon" height={20} />
                  ) : (
                    <img src={row.Notes} alt="noteIcon" height={20} />
                  )}
                </TableCell>
                <TableCell align="left" style={tableData}>
                  {row.Tags}
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
