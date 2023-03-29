import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { lightTheme } from "../../../../Theme/theme";
import Chart from "react-apexcharts";

const WinLossExpectation = () => {
  const [winLossRatio, setWinlossRatio] = useState({
    series: [34, 75],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      pie: {
        dataLabels: {
          show: true,
          offset: -50,
        },
        labels: {
          show: true,
        },
      },
      labels: ["Win", "Loss"],
      colors: [
        `${lightTheme.darkGreencolorGraph}`,
        `${lightTheme.darkRedcolorGraph}`,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  const [winLossComparision, setwinLossComparision] = useState({
    series: [
      {
        data: [44, -55],
      },
      {
        data: [-53, 32],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          // distributed: true,
          horizontal: true,
          barHeight: "40%",
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      fill: {
        colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Win", "Loss"],
        labels: {
          formatter: function (x) {
            return "$" + x.toFixed(0);
          },
        },
        // min:500
      },

      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [tradeExpectation, settradeExpectation] = useState({
    series: [
      {
        data: [-55],
      },
      {
        data: [32],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        // height: 150
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          // distributed: true,
          horizontal: true,
          barHeight: "30%",
        },
      },

      fill: {
        colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Expectation"],
        labels: {
          formatter: function (x) {
            return "$" + x.toFixed(0);
          },
        },
        // min:500
      },

      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [commulativePL, setCommulativePL] = useState({
    series: [
      {
        data: [120, 81, 75, 91, 49, 22],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        categories: [
          "2022-06-30",
          "2022-06-30",
          "2022-06-30",
          "2022-06-30",
          "2022-06-30",
          "2022-06-30",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (x) {
            return "$" + x.toFixed(0);
          },
        },
      },
    },
  });
  const [commulativeDrawdown, setCommulativeDrawdown] = useState({
    series: [
      {
        data: [120, 81, 75, 91, 49, 22],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        categories: [
          "2022-06-30",
          "2022-06-30",
          "2022-06-30",
          "2022-06-30",
          "2022-06-30",
          "2022-06-30",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (x) {
            return "$" + x.toFixed(0);
          },
        },
      },
    },
  });

  // styling
  const mainDiv = {
    padding: "25px 15px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };

  const gridItem = {
    border: `1px solid ${lightTheme.borderColor}`,
    borderRadius: "8px",
    padding: "10px 10px",
  };
  const goldUser = {
    fontSize: "18px",
    fontWeight: "500",
    color: `${lightTheme.textColor}`,
    padding: "5px 15px",
  };
  const graphTitle = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "16px",
    marginLeft: "20px",
    marginTop: "10px",
  };
  const winDiv = {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    marginTop: "5px",
    marginRight: "35px",
  };
  const winCircle = {
    backgroundColor: `${lightTheme.profit}`,
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  };
  const win = {
    color: `${lightTheme.profit}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: "0 5px",
  };
  const lossDiv = {
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
    textAlign: "left",
  };
  const lossCircle = {
    backgroundColor: `${lightTheme.loss}`,
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  };
  const loss = {
    color: `${lightTheme.loss}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: "0 5px",
  };
  const graphTitleB = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "16px",
    marginLeft: "20px",
    marginTop: "10px",
  };

  return (
    <div>
      <Box sx={mainDiv}>
        <p style={goldUser}>
          Win/Loss/Expectation reports are only available for gold users.
          <span style={{ color: `${lightTheme.headingTextColor}` }}>
            Upgrade now!
          </span>
        </p>
        {/* pie Charts */}
        <Grid container columnGap={4} rowGap={4}>
          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              padding: "15px 10px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={graphTitle}>Win/Loss Ratio (Losing Days)</p>
              <div>
                <div style={winDiv}>
                  <p style={winCircle}></p>
                  <p style={win}>Win</p>
                </div>
                <div style={lossDiv}>
                  <p style={lossCircle}></p>
                  <p style={loss}>Loss</p>
                </div>
              </div>
            </div>
            <Chart
              options={winLossRatio.options}
              series={winLossRatio.series}
              type="pie"
              width={350}
            />
          </Grid>
          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              padding: "15px 10px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={graphTitle}>Win/Loss Ratio (Winning Days)</p>
              <div>
                <div style={winDiv}>
                  <p style={winCircle}></p>
                  <p style={win}>Win</p>
                </div>
                <div style={lossDiv}>
                  <p style={lossCircle}></p>
                  <p style={loss}>Loss</p>
                </div>
              </div>
            </div>
            <Chart
              options={winLossRatio.options}
              series={winLossRatio.series}
              type="pie"
              width={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4}>
          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              padding: "15px 10px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          >
            <p style={graphTitleB}>Win/Loss P&L Comparison</p>
            <Chart
              options={winLossComparision.options}
              series={winLossComparision.series}
              type="bar"
              height={350}
            />
          </Grid>

          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              padding: "15px 10px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          >
            <p style={graphTitleB}>Trade Expectation</p>
            <Chart
              options={tradeExpectation.options}
              series={tradeExpectation.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4}>
          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              padding: "15px 10px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          >
            <p style={graphTitleB}>Cumulative P&L</p>
            <Chart
              options={commulativePL.options}
              series={commulativePL.series}
              type="line"
              height={350}
            />
          </Grid>

          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              padding: "15px 10px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          >
            <p style={graphTitleB}>Cumulative Drawdown</p>
            <Chart
              options={commulativeDrawdown.options}
              series={commulativeDrawdown.series}
              type="line"
              height={350}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WinLossExpectation;
