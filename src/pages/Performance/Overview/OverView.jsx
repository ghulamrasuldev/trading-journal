import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import "./Overview.css";
import downArrow from "../../../assets/downArrow.png";
import { lightTheme } from "../../../Theme/theme";
import DailyGraph from "./DailyGraphs/DailyGraph";
import DailyVolumegraph from "./DailyGraphs/DailyVolumegraph";

const OverView = () => {
  // profit loss Data array of objects
  const TotalProfitLossData = [
    {
      name: "Total P&L",
      value: "$390,411.90",
    },
    {
      name: "Average Daily Volume",
      value: "326.91",
    },
    {
      name: "Average Winning Trade",
      value: "$6,936.90",
    },
    {
      name: "Average Losing Trade",
      value: "$3,411.90",
    },
    {
      name: "Total Number Of Trades",
      value: "123",
    },
    {
      name: "Number Of Winning Trades",
      value: "82",
    },
    {
      name: "Number Of Losing Trades",
      value: "45",
    },
    {
      name: "Number Of Break Even Trades",
      value: "0",
    },
    {
      name: "Max Consecutive Wins",
      value: "10",
    },
    {
      name: "Max Consecutive Losses",
      value: "8",
    },
    {
      name: "Total Commissions",
      value: "$2,606.84",
    },
    {
      name: "Total Fees",
      value: "$451.77",
    },
    {
      name: "Largest Profit",
      value: "$89,591.62",
    },
    {
      name: "Largest Loss",
      value: "-$21,071.87",
    },
    {
      name: "Average Hold Time (All Trades)",
      value: "18 minutes",
    },
    {
      name: "Average Hold Time (Winning Trades)",
      value: "19 minutes",
    },
    {
      name: "Average Hold Time (Losing Trades)",
      value: "14 minutes",
    },
    {
      name: "Average Hold Time (Losing Trades)",
      value: "N/A",
    },
  ];

  // average trade profit loss array of object
  const AverageTradeProfitLoss = [
    {
      name: "Average Trade P&L",
      value: "$3,073.11",
    },
    {
      name: "Profit Factor",
      value: "3.19",
    },
    {
      name: "Open Trades",
      value: "0",
    },
    {
      name: "Total Trading Days",
      value: "58",
    },
    {
      name: "Winning Days",
      value: "15",
    },
    {
      name: "Breakeven Days",
      value: "1",
    },
    {
      name: "Logged Days",
      value: "0",
    },
    {
      name: "Max Consecutive Winning Days",
      value: "11",
    },
    {
      name: "Max Consecutive Losing Days",
      value: "3",
    },
    {
      name: "Average Daily P&L",
      value: "$6,731.24 ",
    },
    {
      name: "Average Winning Day P&L",
      value: "$11,302.76",
    },
    {
      name: "Average Losing Day P&L",
      value: "-$5,620.27",
    },
    {
      name: "Largest Profitable Day (Profits)",
      value: "$106,324.52",
    },
    {
      name: "Largest Profitable Day (Losses)",
      value: "-$24,324.52",
    },
    {
      name: "Average Planned R-Multiple",
      value: "2.35R",
    },
    {
      name: "Average Realized R-Multiple",
      value: "0.77R",
    },
    {
      name: "Trade Expectancy",
      value: "$3,074.11",
    },
    {
      name: " ",
      value: " ",
    },
  ];

  // styling
  const mainDiv = {
    padding: "15px 20px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
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
  const profitLossMain={
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 15px",
  }
  const name={
    fontWeight: "500",
    fontSize: "16px",
    color: `${lightTheme.headingTextColor}`,
  }
  const nameVal={
    fontWeight: "400",
    fontSize: "16px",
    color: `${lightTheme.textColor}`,
  }
  return (
    <div>
      <Box sx={mainDiv}>
        <div className="overViewMain">
          <p style={{ color: `${lightTheme.profit}` }}>P&L Showing</p>
          <div className="insideOverViewMain">
            <p
              style={{ color: `${lightTheme.textColor}`, paddingRight: "10px" }}
            >
              NET P&L
            </p>
            <img src={downArrow} alt="downArrow" height={5} />
          </div>
        </div>
        <div style={{ padding: "10px 0" }}>
          <p
            style={{
              color: `${lightTheme.headingTextColor}`,
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Your Starts
          </p>
          <p style={dateStyle}>(FROM MAY 10,2022 TO MAY 11, 2022)</p>
          <Grid container my={3} rowGap={4}>
            <Grid item lg={3} md={6} sm={12}>
              <p style={month}>Best Month</p>
              <p style={monthVal}>$7,00.00</p>
              <p style={dateStyle}>In May 2022</p>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <p
                style={month}
              >
                Lowest Month
              </p>
              <p
                style={monthVal}
              >
                $7,00.00
              </p>
              <p style={dateStyle}>
                In May 2022
              </p>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <p
                style={month}
              >
                Average
              </p>
              <p
                style={monthVal}
              >
                $7,00.00
              </p>
              <p style={dateStyle}>
                In May 2022
              </p>
            </Grid>
          </Grid>
        </div>
        <Grid container columnGap={4} rowGap={4}>
          <Grid item lg={5.5} md={12} sm={12}>
            <div
              style={{
                border: `1px solid ${lightTheme.borderColor}`,
                borderRadius: "8px",
              }}
            >
              {TotalProfitLossData.map((data, index) => {
                return (
                  <>
                    <div
                      key={index}
                      style={profitLossMain}
                    >
                      <p
                        style={name}
                      >
                        {data.name}
                      </p>
                      <p
                        style={nameVal}
                      >
                        {data.value}
                      </p>
                    </div>
                    <Divider />
                  </>
                );
              })}
            </div>
          </Grid>
          <Grid item lg={5.5} md={12} sm={12}>
            <div
              style={{
                border: `1px solid ${lightTheme.borderColor}`,
                borderRadius: "8px",
              }}
            >
              {AverageTradeProfitLoss.map((data, index) => {
                return (
                  <>
                    <div
                      key={index}
                      style={profitLossMain}
                    >
                      <p
                        style={name}
                      >
                        {data.name}
                      </p>
                      <p
                        style={nameVal}
                      >
                        {data.value}
                      </p>
                    </div>
                    <Divider />
                  </>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Box>
      <DailyGraph />
      <DailyVolumegraph />
    </div>
  );
};

export default OverView;
