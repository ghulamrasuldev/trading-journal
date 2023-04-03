import React, { useState } from "react";
import { Box, Grid, Divider } from "@mui/material";
import NavBar from "../../../components/NavBar/NavBar";
// import { lightTheme } from "../../../Theme/theme";
import downArrow from "../../../assets/downArrow.png";
import { TotalProfitLossData } from "../Overview/ConstantData";
import { AverageTradeProfitLoss } from "../Overview/ConstantData";
import "./report.css";
import ModeChange from "../../../Theme/ChangeMode";

const Reports = () => {
  const lightTheme = ModeChange();
  const [TotalProfit, setTotalProfitLossData] = useState(TotalProfitLossData);
  const [AverageTradeProfit, setAverageTradeProfitLoss] = useState(
    AverageTradeProfitLoss
  );

  // styling
  const mainDiv = {
    padding: "30px 25px",
    backgroundColor: `${lightTheme.PageBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };
  const mainComDiv = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    padding: "15px 15px",
    borderRadius: "8px",
    marginTop: "20px",
  };

  const overViewMain = {
    display: " flex",
    alignItems: "center",
  };
  const insideOverViewMain = {
    display: "flex",
    alignItems: " center",
    cursor: " pointer",
    backgroundColor: `${lightTheme.PageBackgroundColor}`,
    padding: "10px 10px",
    borderRadius: "8px",
    marginLeft: "10px",
  };
  const start = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "20px",
    fontWeight: "600",
  };
  const allDate = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "15px",
    fontWeight: "500",
  };
  const month = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "20px",
    fontWeight: "500",
  };
  const monthVal = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "18px",
    fontWeight: "500",
  };
  const dateStyle = { color: `${lightTheme.dateColor}`, fontSize: "12px" };
  const profitLossMain = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
  };
  const name = {
    fontWeight: "500",
    fontSize: "16px",
    color: `${lightTheme.headingTextColor}`,
  };
  const nameVal = {
    fontWeight: "400",
    fontSize: "16px",
    color: `${lightTheme.textColor}`,
  };
  const mainGrid = {
    "& .gridData:nth-child(odd)": {
      backgroundColor: `${lightTheme.reportDataColor}`,
    },
    padding: "10px 0",
  };

  return (
    <div>
      <Box sx={mainDiv}>
        <NavBar name={"Reports"} />
        <div style={mainComDiv}>
          <div style={overViewMain}>
            <p style={{ color: `${lightTheme.profit}` }}>P&L Showing</p>
            <div style={insideOverViewMain}>
              <p
                style={{
                  color: `${lightTheme.textColor}`,
                  paddingRight: "10px",
                }}
              >
                NET P&L
              </p>
              <img src={downArrow} alt="downArrow" height={5} />
            </div>
          </div>
          <div style={{ padding: "10px 0" }}>
            <p style={start}>Your Starts</p>
            <p style={allDate}>(All Dates)</p>
            <Grid container my={3} rowGap={4}>
              <Grid item lg={3} md={6} sm={12}>
                <p style={month}>Best Month</p>
                <p style={monthVal}>$7,00.00</p>
                <p style={dateStyle}>In May 2022</p>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <p style={month}>Lowest Month</p>
                <p style={monthVal}>$7,00.00</p>
                <p style={dateStyle}>In May 2022</p>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <p style={month}>Average</p>
                <p style={monthVal}>$7,00.00</p>
                <p style={dateStyle}>In May 2022</p>
              </Grid>
            </Grid>
          </div>
          <Grid
            container
            columnGap={4}
            rowGap={4}
            style={{
              borderTop: `1px solid ${lightTheme.borderColor}`,
              borderBottom: `1px solid ${lightTheme.borderColor}`,
            }}
          >
            <Grid item lg={5.8} md={12} sm={12} sx={mainGrid}>
              <div
                style={{
                  //   border: `1px solid ${lightTheme.borderColor}`,
                  borderRadius: "8px",
                }}
              >
                {TotalProfit.map((data, index) => {
                  return (
                    <div className="gridData">
                      <div key={index} style={profitLossMain}>
                        <p style={name}>{data.name}</p>
                        <p style={nameVal}>{data.value}</p>
                      </div>
                      <Divider />
                    </div>
                  );
                })}
              </div>
            </Grid>
            <Grid item lg={5.8} md={12} sm={12} sx={mainGrid}>
              <div
                style={{
                  //   border: `1px solid ${lightTheme.borderColor}`,
                  borderRadius: "8px",
                }}
              >
                {AverageTradeProfit.map((data, index) => {
                  return (
                    <div className="gridData">
                      <div key={index} style={profitLossMain}>
                        <p style={name}>{data.name}</p>
                        <p style={nameVal}>{data.value}</p>
                      </div>
                      <Divider />
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default Reports;
