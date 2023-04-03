import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
// import { lightTheme } from '../../../../Theme/theme';
import Chart from 'react-apexcharts';
import ModeChange from '../../../../Theme/ChangeMode';

const Liquidity = () => {

  const lightTheme = ModeChange();

  const [tradeDistributionAllSharesGraph, setTradeDistributionAllSharesGraph] = useState({
    series: [
      {
        data: [120, 30, , , , ,],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 100,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#689BE2', '#6CB9AD', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
      },
      dataLabels: {
        enabled: false,
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
      xaxis: {
        categories: ['0', '1-25%', '26-50%', '51-75%', '76-99%', '100%'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceAllSharesGraph, setPerformanceAllSharesGraph] = useState({
    series: [
      {
        data: [-20, 40, , , , ,],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 250,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#689BE2', '#6CB9AD', '#6CB9AD', '#FF696D', '#5D45DB', '#fff'],
      },
      dataLabels: {
        enabled: false,
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
          labels: {
            formatter: function (x) {
              return '$' + x.toFixed(0);
            },
          },
        },
      },
      xaxis: {
        categories: ['0', '1-25%', '26-50%', '51-75%', '76-99%', '100%'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [tradeDistributionEntrySharesGraph, setTradeDistributionEntrySharesGraph] = useState({
    series: [
      {
        data: [80, , , , , 20],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 100,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#5D45DB', '#6CB9AD', '#FF696D', '#6CB9AD', '#6CB9AD', '#6CB9AD'],
      },
      dataLabels: {
        enabled: false,
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
      xaxis: {
        categories: ['0', '1-25%', '26-50%', '51-75%', '76-99%', '100%'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceEntrySharesGraph, setPerformanceEntrySharesGraph] = useState({
    series: [
      {
        data: [80, , , , , -20],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 250,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#5D45DB', '#6CB9AD', '#6CB9AD', '#FF696D', '#6CB9AD', '#6CB9AD'],
      },
      dataLabels: {
        enabled: false,
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
      xaxis: {
        categories: ['0', '1-25%', '26-50%', '51-75%', '76-99%', '100%'],
        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [tradeDistributionExitSharesGraph, setTradeDistributionExitSharesGraph] = useState({
    series: [
      {
        data: [100, 30, 20, 12, 5, 10],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 100,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#6CB9AD', '#EDC161', '#6CB9AD', '#689BE2', '#FF696D', '#5D45DB', '#EDC161'],
      },
      dataLabels: {
        enabled: false,
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
      xaxis: {
        categories: ['0', '1-25%', '26-50%', '51-75%', '76-99%', '100%'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceExitSharesGraph, setPerformanceExitSharesGraph] = useState({
    series: [
      {
        data: [-60, 90, 50, 30, 5, 20],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 250,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#6CB9AD', '#EDC161', '#6CB9AD', '#689BE2', '#FF696D', '#5D45DB', '#EDC161'],
      },
      dataLabels: {
        enabled: false,
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
      xaxis: {
        categories: ['0', '1-25%', '26-50%', '51-75%', '76-99%', '100%'],
        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });


  // styling
  const mainDiv = {
    padding: '25px 15px',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  const gridItem = {
    border: `1px solid ${lightTheme.borderColor}`,
    borderRadius: '8px',
    padding: '10px 10px',
  };
  const graphTilte={
    color: `${lightTheme.headingTextColor}`,
    fontWeight: '500',
    fontSize: '16px',
    marginLeft: '20px',
    marginTop: '10px',
  }

  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Trade Distribution By All Shares Adding liquidity
            </p>
            <Chart
              options={tradeDistributionAllSharesGraph.options}
              series={tradeDistributionAllSharesGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Performance By All Shares Adding liquidity
            </p>
            <Chart
              options={performanceAllSharesGraph.options}
              series={performanceAllSharesGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          </Grid>
          <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Trade Distribution By Entry Shares Adding liquidity
            </p>
            <Chart
              options={tradeDistributionEntrySharesGraph.options}
              series={tradeDistributionEntrySharesGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Performance By Entry Shares Adding liquidity
            </p>
            <Chart
              options={performanceEntrySharesGraph.options}
              series={performanceEntrySharesGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          </Grid>
          <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Trade Distribution By Exit Shares Adding liquidity
            </p>
            <Chart
              options={tradeDistributionExitSharesGraph.options}
              series={tradeDistributionExitSharesGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Performance By Exit Shares Adding liquidity
            </p>
            <Chart
              options={performanceExitSharesGraph.options}
              series={performanceExitSharesGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          </Grid>
          
        
      </Box>
    </div>
  );
};

export default Liquidity;
