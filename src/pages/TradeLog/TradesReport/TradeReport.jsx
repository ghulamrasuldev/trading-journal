import React, { useState } from "react";
import "./TradeReport.css";
import { Box, Divider, Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "react-select";
import menuDotIcon from "../../../assets/menuDotIcon.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { lightTheme } from "../../../Theme/theme";
import {TradeReportData} from '../TradeTableData.js'



const TradeReport = () => {
  const [toggle, setToggle] = useState(true);
  const [checkBoxValue, setCheckBoxValue] = useState([]);
  const [filteredTradeReportData, setFilteredTradeReportData] =
    useState(TradeReportData);
  const [allChecked, setAllChecked] = useState(false);




  // dataLabels for checkbox
  const CheckboxData = [
    "Account Name",
    "Adjusted Cost",
    "Adjusted Proceeds",
    "Average Entry",
    "Close Date",
    "Close Time",
    "Commissions",
    "Custom Tags",
    "Entry Price",
    "Executions",
    "Duration",
    "Average Exit",
  ];

  // filter table on selected checkbox
  // const filterTable = () => {
  //   const filterValues = localStorage.getItem('checkboxValue')
  //   setFilteredTradeReportData(prev => {
  //     return [...prev.filter(val=>val!==filterValues)]
  //   })
  //   console.log('filterValues',filteredTradeReportData)
  // }

  // handle CheckBox
  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckBoxValue((prev) => [...prev, value]);
    } else {
      setCheckBoxValue((prev) => {
        return [...prev.filter((val) => val !== value)];
      });
    }
    // setCheckBoxValue([...checkBoxValue, data])
    // console.log(e.target.checked)
    localStorage.setItem("checkboxValue", checkBoxValue);
    // console.log(localStorage.getItem('checkboxValue'));

    // console.log('label',data)
  };

  // styling
  const TradeReportMain = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.02)",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    // border: '1px solid black',
    borderRadius: "8px",
  };

  const selectText = {
    fontWeight: "500",
    fontSize: "20px",
    padding: "5px 20px",
    paddingTop: "10px",
    color: `${lightTheme.headingTextColor}`,
  };
  const noneDefault={
    padding: "0 10px",
    color: "#022658",
    fontWeight: "700",
    cursor: "pointer",
  }
  const cancleBtn ={
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    color: `${lightTheme.textColor}`,
    cursor:'pointer'
  }
  const saveBtn ={
    backgroundColor: `${lightTheme.headingTextColor}`,
    color: `${lightTheme.saveButton}`,
    cursor:'pointer'
  }
  return (
    <div>
      <Box sx={TradeReportMain}>
        <div className="topDivTradeReprot">
          <div>
            <p
              style={{
                fontWeight: "700",
                fontSize: "15px",
                color: `${lightTheme.headingTextColor}`,
              }}
            >
              Your Trades Report
            </p>
          </div>
          <div className="tradeReportSelectDiv">
            <Select
              className="tradeReportSelect"
              placeholder="Bulk Action"
              isSearchable={false}
            />
            <img
              src={menuDotIcon}
              alt="menuIcon"
              height={30}
              onClick={() => setToggle(!toggle)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <Divider />
        {toggle ? (
          <div className="tradeReportTable">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Ticker
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Setups
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Net P%L
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      OpenTime
                      <br />
                      <span>(US/Eastern)</span>
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Average_Entry
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Average_Exit
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      CloseTime
                      <br />
                      (US/Eastern)
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Duration
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Adjusted_Cost
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Side
                    </TableCell>
                    <TableCell align="right">Gross P&L</TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Volume
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      R_Multiple
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Initial_Target
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: `${lightTheme.headingTextColor}` }}
                    >
                      Instrument_Type
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredTradeReportData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.ticker}
                      </TableCell>
                      <TableCell align="right">
                        <p
                          className="TradeReportSetup"
                          style={{
                            color: `${lightTheme.whiteText}`,
                            backgroundColor: `${lightTheme.headingTextColor}`,
                          }}
                        >
                          {row.setups}
                        </p>
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.NetPL}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.openTime}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.avgEntry}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.avgExit}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.closeTime}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.duration}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.adjCost}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.side}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.grossPL}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.volume}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.rMultiple}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.initialTarget}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: `${lightTheme.textColor}` }}
                      >
                        {row.instrumentType}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <div className="tradeReportCheckBox">
            <p style={selectText}>Select Columns</p>
            <p
              style={{
                fontWeight: "500",
                color: `${lightTheme.textColor}`,
                padding: "0 20px",
              }}
            >
              Choose the columns you want to display in the table
            </p>
            <div className="selectCheckBox">
              <p
                style={{
                  padding: "0 5px",
                  color: `${lightTheme.textColor}`,
                  fontWeight: "700",
                }}
              >
                Select
              </p>
              {/* <Divider flexItem orientation="vertical"/> */}
              <p
                style={noneDefault}
                onClick={() => setAllChecked(true)}
              >
                All
              </p>
              <Divider flexItem orientation="vertical" />
              <p style={noneDefault} onClick={() => setAllChecked(false)}>
                None
              </p>
              <Divider flexItem orientation="vertical" />
              <p style={noneDefault}>Default</p>
            </div>
            <div>
                <Grid container>
                  {
                    [1, 2, 3].map((item, index) => {
                      return (
                        <Grid item lg={3} pl={5} pb={5} pt={5} key={item}>
                  <FormGroup>
                    {CheckboxData.map((data, index) => {
                      return (
                        <div key={index}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                /*checked={allChecked? true: false}*/ value={
                                  data
                                }
                                size="medium"
                                onChange={(e) => handleCheck(e)}
                              />
                            }
                            label={data}
                            color={`${lightTheme.textColor}`}
                          />
                        </div>
                      );
                    })}
                  </FormGroup>
                </Grid>
                      )
                    })
                  }
                <Grid item lg={3} pl={5} pb={5} pt={5}>
                  <FormGroup>
                    {CheckboxData.slice(0, 5).map((data, index) => {
                      return (
                        <div key={index}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={data}
                                size="medium"
                                onChange={(e) => handleCheck(e)}
                              />
                            }
                            label={data}
                          />
                        </div>
                      );
                    })}
                  </FormGroup>
                </Grid>
              </Grid>
              <div className="checkBoxBtns">
                <button
                  className="checkBoxCancelBtn"
                  style={cancleBtn}
                >
                  Cancel
                </button>
                <button
                  className="checkBoxSaveBtn"
                  onClick={() => {
                    filterTable();
                    setToggle(true);
                  }}
                  style={saveBtn}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default TradeReport;
