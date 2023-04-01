import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
// import { lightTheme } from "../../../../Theme/theme";
import Chart from "react-apexcharts";
import ModeChange from "../../../../Theme/ChangeMode";

const Instrument = () => {
  const lightTheme = ModeChange();
  const [performanceBySymbolTopGraph, setPerformanceBySymbolTopGraph] =
    useState({
      series: [
        {
          data: [4, -5, -9, -7, -5, -2],
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
          },
        },

        fill: {
          colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["RTY-", "NQ-", "YM", "CL-", "ES-", "FDAX-"],
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
  const [performanceBySymbolBottomGraph, setPerformanceBySymbolBottomGraph] =
    useState({
      series: [
        {
          data: [4, 5, 9, 7, 5, -2],
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
          },
        },

        fill: {
          colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["FDAX-", "ES-", "CL-", "YM-", "NQ-", "RTY-"],
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
  const [
    distributionByInstrumentVolumeGraph,
    setdistributionByInstrumentVolumeGraph,
  ] = useState({
    series: [
      {
        data: [6, 3, 9, 7, 5],
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
        },
      },

      fill: {
        colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "50k-90k",
          "100k-299k",
          "250k-499k",
          "500k-1M",
          "1M-2.49M",
        ],
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
  const [
    performanceByInstrumentVolumeGraph,
    setperformanceByInstrumentVolumeGraph,
  ] = useState({
    series: [
      {
        data: [-6, -3, -9, -7, -5],
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
        },
      },

      fill: {
        colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "50k-90k",
          "100k-299k",
          "250k-499k",
          "500k-1M",
          "1M-2.49M",
        ],
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
        // reversed:true
      },
    },
  });
  const [distributionByEntryPriceGraph, setdistributionByEntryPriceGraph] =
    useState({
      series: [
        {
          data: [2, 3, 9, , 4, 5],
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
          },
        },

        fill: {
          colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "less then -5%",
            "-1% to -5%",
            "0% to -1%",
            "0% to +1%",
            "+1% to -5%",
            "over +5%",
          ],
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
  const [performanceByEntryPriceGraph, setperformanceByEntryPriceGraph] =
    useState({
      series: [
        {
          data: [-2, -3, -9, , -4, -5],
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
          },
        },

        fill: {
          colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "less then -5%",
            "-1% to -5%",
            "0% to -1%",
            "0% to +1%",
            "+1% to -5%",
            "Cover +5%",
          ],
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
          // reversed:true
        },
      },
    });
  const [
    distributionByRelativeVolumeGraph,
    setdistributionByRelativeVolumeGraph,
  ] = useState({
    series: [
      {
        data: [2, 3, 9, 7, 4, 5, 9, 2, 5],
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
        },
      },

      fill: {
        colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "25% - 49%",
          "50% - 74%",
          "75% - 99%",
          "100% - 124%",
          "125% to 149%",
          "150% to 199%",
          "200% to 299%",
          "399% to 499%",
          "500% - and over",
        ],
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
  const [
    performanceByRelativeVolumeGraph,
    setperformanceByRelativeVolumeGraph,
  ] = useState({
    series: [
      {
        data: [0, -3, -5, 5, 2, 9, 4, 7, 5],
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
        },
      },

      fill: {
        colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "25% - 49%",
          "50% - 74%",
          "75% - 99%",
          "100% - 124%",
          "125% to 149%",
          "150% to 199%",
          "200% to 299%",
          "399% to 499%",
          "500% - and over",
        ],
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
        reversed: true,
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
  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Performance By Symbol - Top 20</p>
            <Chart
              options={performanceBySymbolTopGraph.options}
              series={performanceBySymbolTopGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Performance By Symbol - Bottom 20</p>
            <Chart
              options={performanceBySymbolBottomGraph.options}
              series={performanceBySymbolBottomGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Distribution By Instrument Volume</p>
            <Chart
              options={distributionByInstrumentVolumeGraph.options}
              series={distributionByInstrumentVolumeGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Performance By Instrument Volume</p>
            <Chart
              options={performanceByInstrumentVolumeGraph.options}
              series={performanceByInstrumentVolumeGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>
              Trade Distribution By Entry Price vs 50-Day SMA
            </p>
            <Chart
              options={distributionByEntryPriceGraph.options}
              series={distributionByEntryPriceGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Performance By Entry Price vs 50-Day SMA</p>
            <Chart
              options={performanceByEntryPriceGraph.options}
              series={performanceByEntryPriceGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>
              Distribution By Instrument Relative Volume (% 0f 50ma)
            </p>
            <Chart
              options={distributionByRelativeVolumeGraph.options}
              series={distributionByRelativeVolumeGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>
              Performance By Instrument Relative Volume (% 0f 50ma)
            </p>
            <Chart
              options={performanceByRelativeVolumeGraph.options}
              series={performanceByRelativeVolumeGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Instrument;
