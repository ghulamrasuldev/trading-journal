import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
// import { lightTheme } from "../../../../Theme/theme";
import Chart from "react-apexcharts";
import ModeChange from "../../../../Theme/ChangeMode";

const WinLossExpectation = () => {
  const lightTheme = ModeChange();
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
        data: [6, -16],
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
          distributed: true,
          horizontal: true,
          barHeight: "40%",
        },
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
        data: [-7],
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
          distributed: true,
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

  const graphTilte = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "16px",
    marginLeft: "20px",
    marginTop: "10px",
  };
  const resultDiv={
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    marginTop: "5px",
  }
  const profitCircle={
    backgroundColor: `${lightTheme.profit}`,
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  }
 const winning={
  color: `${lightTheme.profit}`,
  fontWeight: "500",
  fontSize: "16px",
  padding: "0 5px",
  }
  const lossCircle={
    backgroundColor: `${lightTheme.loss}`,
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  }
  const lossing={
    color: `${lightTheme.loss}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: "0 5px",
  }
  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={graphTilte}>Win/Loss Ratio</p>
              <div>
                <div
                  style={resultDiv}
                >
                  <p
                    style={profitCircle}
                  ></p>
                  <p
                    style={winning}
                  >
                    Winning Days
                  </p>
                </div>
                <div
                  style={resultDiv}
                >
                  <p
                    style={lossCircle}
                  ></p>
                  <p
                    style={lossing}
                  >
                    Losing Days
                  </p>
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
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Win/Loss P&L Comparison</p>
            <Chart
              options={winLossComparision.options}
              series={winLossComparision.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Trade Expectation</p>
            <Chart
              options={tradeExpectation.options}
              series={tradeExpectation.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Cumulative P&L</p>
            <Chart
              options={commulativePL.options}
              series={commulativePL.series}
              type="line"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Cumulative Drawdown</p>
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
