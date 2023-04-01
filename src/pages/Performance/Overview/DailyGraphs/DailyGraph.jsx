import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
// import { lightTheme } from "../../../../Theme/theme";
import Chart from "react-apexcharts";
import ModeChange from "../../../../Theme/ChangeMode";

const DailyGraph = () => {
  const lightTheme = ModeChange();
  const [DailyPLGraph, setDailyPLGraph] = useState({
    series: [
      {
        name: "Cash Flow",
        data: [
          1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09,
          0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 55.75, 17.1, 19.8, -27.03,
          -24.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -61.4,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: 0,
                color: `${lightTheme.nagativeBar}`,
              },
            ],
          },
          columnWidth: "80%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        //   title: {
        //     text: 'Growth',
        //   },
        // max: '4000',
        // min:'2000',
        tickAmount: 5,
        labels: {
          formatter: function (y) {
            return "$" + y.toFixed(0);
          },
        },
      },
      xaxis: {
        //   type: 'datetime',
        categories: [
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
          "2022-03-01",
        ],
        //   labels: {
        //     rotate: -90
        //   }
      },
    },
  });

  // styling
  const mainDiv = {
    // backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    marginTop: "25px",
  };
  const GridItem = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    padding: "20px 10px",
    // marginTop:'15px'
    borderRadius: "8px",
  };
  const graphTitle={
    color: `${lightTheme.headingTextColor}`,
    fontSize: "20px",
    fontWeight: "600",
  }
  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={5} rowGap={4}>
          <Grid item lg={5.8} md={12} sm={12} sx={GridItem}>
            <p
              style={graphTitle}
            >
              Gross Daily P&L (Lasts 30 Trading Days)
            </p>
            <div>
              <Chart
                options={DailyPLGraph.options}
                series={DailyPLGraph.series}
                type="bar"
                height={350}
              />
            </div>
          </Grid>
          <Grid item lg={5.8} md={12} sm={12} sx={GridItem}>
            <p
              style={graphTitle}
            >
              Gross Daily P&L (Lasts 30 Trading Days)
            </p>
            <div>
              <Chart
                options={DailyPLGraph.options}
                series={DailyPLGraph.series}
                type="bar"
                height={350}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DailyGraph;
