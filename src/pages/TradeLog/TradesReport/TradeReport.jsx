import React, { useEffect, useState } from "react";
import "./TradeReport.css";
import {  Divider, Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import menuDotIcon from "../../../assets/menuDotIcon.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeChange from "../../../Theme/ChangeMode";
import PrimaryButton from "../../../components/common/PrimaryButton";
import SecondaryButton from "../../../components/common/SecondaryButton";
import CustomSelect from "../../../components/common/CustomSelect";
import { base_Url } from "../../../Config/Config";
import axios from "axios";
import Loading from "../../../components/common/Loading";
import apiService from "../../../services/api/api";

const TradeReport = () => {
  const lightTheme = ModeChange();
  const [toggle, setToggle] = useState(true);
  const [reportData, setReportData] = useState();
  const [loading, setLoading] = useState(false);

  const tableColumns = [
    { label: "Ticker", key: "ticker" },
    { label: "Setups", key: "setups" },
    { label: "Net P%L", key: "netpl" },
    { label: "OpenTime (US/Eastern)", key: "openTime" },
    { label: "Average_Entry", key: "avgEntry" },
    { label: "Average_Exit", key: "avgExit" },
    { label: "CloseTime (US/Eastern)", key: "closeTime" },
    { label: "Duration", key: "dateDifference" },
    { label: "Adjusted_Cost", key: "adjCost" },
    { label: "Side", key: "side" },
    { label: "Gross P&L", key: "grossPL" },
    { label: "Volume", key: "volume" },
    { label: "R_Multiple", key: "rMultiple" },
    { label: "Initial_Target", key: "initialTarget" },
    { label: "Instrument_Type", key: "instrumentType" },
  ];

  const [selectedCheckboxes, setSelectedCheckboxes] = useState(
    tableColumns.map((column) => column.label)
  );

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((checkbox) => checkbox !== value)
      );
    }
  };

  const handleSelectAll = () => {
    const allCheckboxLabels = tableColumns.map((column) => column.label);
    setSelectedCheckboxes(allCheckboxLabels);
  };
  const handleUnselectAll = () => {
    setSelectedCheckboxes([]);
  };

  const columnsPerGridItem = 5; // Number of columns per grid item
  const totalColumns = tableColumns.length; // Total number of columns

  // Calculate the number of grid items required
  const gridItemsCount = Math.ceil(totalColumns / columnsPerGridItem);

  const getReport = async () => {
    setLoading(true);
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', '/trade/report', { 'x-usertoken': authToken }, null)
      const data  = res;
      setReportData(data);
      setLoading(false);
    } catch (error) {
      console.log("Error",error)
    }
  };

  useEffect(() => {
    getReport();
  }, []);

  // styling
  const TradeReportMain = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.02)",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: "8px",
    width: "90vw",
  };

  const selectText = {
    fontWeight: "500",
    fontSize: "20px",
    padding: "5px 20px",
    paddingTop: "10px",
    color: `${lightTheme.lightDarkBlue}`,
  };
  const noneDefault = {
    padding: "0 10px",
    color: "#022658",
    fontWeight: "700",
    cursor: "pointer",
    color: `${lightTheme.lightDarkBlue}`,
    // color:'red'
  };
  const tableHead = {
    color: `${lightTheme.headingTextColor}`,
    borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
  };
  const tableData = {
    color: `${lightTheme.textColor}`,
    borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
    textAlign: "center",
  };
  const checkBoxLabel = {
    color: `${lightTheme.textColor}`,
    fontSize: "15px",
    fontWeight: "500",
  };
  const options = [
    {
      label: "option1",
      value: "value1",
    },
    {
      label: "option2",
      value: "value2",
    },
  ];

  return (
    <div style={TradeReportMain}>
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
          <CustomSelect
            placeholder="Bulk Action"
            isSearchable={false}
            options={options}
          />
          <img
            src={menuDotIcon}
            alt="menuIcon"
            height={30}
            onClick={() => setToggle(!toggle)}
            style={{ cursor: "pointer", margin: "0 10px" }}
          />
        </div>
      </div>
      <Divider />
      <div>
        {toggle ? (
          <div className="tradeReportTable">
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
                height: "500px",
              }}
            >
              {loading ? (
                <Loading />
              ) : (
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {selectedCheckboxes.length > 0 && (
                        <TableCell align="center" style={tableHead}>
                          Count
                        </TableCell>
                      )}
                      {tableColumns.map((column) =>
                        selectedCheckboxes.includes(column.label) ? (
                          <TableCell
                            align="center"
                            style={tableHead}
                            key={column.label}
                          >
                            {column.label}
                          </TableCell>
                        ) : null
                      )}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {selectedCheckboxes.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={tableColumns.length} align="center">
                          Please select the columns
                        </TableCell>
                      </TableRow>
                    ) : (
                      reportData &&
                      reportData.map((row, index) => (
                        <TableRow
                          key={index}
                          style={{
                            borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
                          }}
                        >
                          {selectedCheckboxes.length > 0 && (
                            <TableCell align="center" style={tableData}>
                              {index + 1}
                            </TableCell>
                          )}
                          {tableColumns.map((column) => {
                            if (selectedCheckboxes.includes(column.label)) {
                              let cellValue = row[column.key];
                              if (column.key === "ticker") {
                                cellValue = cellValue.split(" ")[0];
                              } else if (column.key === "netpl") {
                                cellValue = Number(cellValue).toFixed(3);
                              }
                              return (
                                <TableCell
                                  component="th"
                                  scope="row"
                                  style={tableData}
                                  key={`${index}-${column.key}`}
                                >
                                  {cellValue}
                                </TableCell>
                              );
                            }
                            return null;
                          })}
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              )}
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

              <p style={noneDefault} onClick={handleSelectAll}>
                All
              </p>
              <Divider flexItem orientation="vertical" />
              <p style={noneDefault} onClick={handleUnselectAll}>
                None
              </p>
              <Divider flexItem orientation="vertical" />
              <p style={noneDefault}>Default</p>
            </div>
            <div>
              <Grid container>
                {[...Array(gridItemsCount)].map((_, gridIndex) => {
                  const startIndex = gridIndex * columnsPerGridItem;
                  const endIndex = startIndex + columnsPerGridItem;

                  return (
                    <Grid item lg={3} pl={5} pb={5} pt={5} key={gridIndex}>
                      <FormGroup>
                        {tableColumns
                          .slice(startIndex, endIndex)
                          .map((column, columnIndex) => (
                            <div key={`checkbox-${startIndex + columnIndex}`}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={selectedCheckboxes.includes(
                                      column.label
                                    )}
                                    value={column.label}
                                    size="medium"
                                    onChange={(e) => handleCheck(e)}
                                  />
                                }
                                label={
                                  <p style={checkBoxLabel}>{column.label}</p>
                                }
                              />
                            </div>
                          ))}
                      </FormGroup>
                    </Grid>
                  );
                })}
              </Grid>
              <div
                className="checkBoxBtns"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  columnGap: "10px",
                }}
              >
                <SecondaryButton buttonTitle={"Cancel"} />
                <PrimaryButton
                  buttonTitle={"Save"}
                  onClick={() => {
                    setToggle(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeReport;
