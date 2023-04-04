import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
// import { lightTheme } from '../../../../Theme/theme';
import Chart from 'react-apexcharts';
import ModeChange from '../../../../Theme/ChangeMode';

const DaysAndTimes = () => {
  const lightTheme = ModeChange();
  const [tradeDistributionGraph, setTradeDistributionGraph] = useState({
    series: [
      {
        data: [4, 7, 3, 8, 9],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
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
        colors: ['#EDC161', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
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
        categories: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri'],
      },
      // grid: {
      //   yaxis: {
      //     lines: {
      //       show: false
      //     }
      //   },
      //   xaxis: {
      //     lines: {
      //       show: true
      //     }
      //   }
      // },
      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceGraph, setPerformanceGraph] = useState({
    series: [
      {
        data: [-4, -7, -3, -8, -9],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
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
        colors: ['#EDC161', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
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
      yaxis: {
        // reversed: true,
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri'],

        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },
    },
  });
  const [tradeDistributionByMonthGraph, setTradeDistributionByMonthGraph] = useState({
    series: [
      {
        data: [4, 9, 3, , 5, , , 7, , 4, , 9],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
          stacked: true,
        },
        type: 'bar',
        // height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
          // barHeight: '80%'
        },
      },

      fill: {
        colors: ['#EDC161', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
  const [performanceMonthGraph, setPerformanceMonthGraph] = useState({
    series: [
      {
        data: [-4, , , , , -3, -9, -5, , ,],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
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
        colors: ['#EDC161', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
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
        // reversed: true,
      },
    },
  });
  const [tradeDistributionByIntrDayGraph, setTradeDistributionByIntraDayGraph] = useState({
    series: [
      {
        data: [4, 5, 9, 7, 5, 2, 6, 1, 5, ,],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
          stacked: true,
        },
        type: 'bar',
        // height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
          // barHeight: '100%'
        },
      },

      fill: {
        colors: ['#EDC161', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Under 1:00',
          '1:00-1:59',
          '2:00-4:59',
          '5:00-9:59',
          '10:00-19:59',
          '20:00-39:59',
          '40:00-59:59',
          '1:00:00-1:50:50',
          '2:00:00-3:59:59',
          '4:00:00-Send Over',
        ],
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
  const [performanceIntraDayGraph, setPerformanceIntraDayGraph] = useState({
    series: [
      {
        data: [-4, 5, -9, 7, 5, -2, -6, 1, 5, ,],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
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
        colors: ['#EDC161', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Under 1:00',
          '1:00-1:59',
          '2:00-4:59',
          '5:00-9:59',
          '10:00-19:59',
          '20:00-39:59',
          '40:00-59:59',
          '1:00:00-1:50:50',
          '2:00:00-3:59:59',
          '4:00:00-Send Over',
        ],
        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
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
    backgroundColor:`${lightTheme.performanceComponentColor}`
  };
  const graphTitle={
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
              style={graphTitle}
            >
              Trade Distribution by day of week
            </p>
            <Chart
              options={tradeDistributionGraph.options}
              series={tradeDistributionGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance by day of week
            </p>
            <Chart options={performanceGraph.options} series={performanceGraph.series} type="bar" height={300} />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution By Month Of Year
            </p>
            <Chart
              options={tradeDistributionByMonthGraph.options}
              series={tradeDistributionByMonthGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance By Month Of Year
            </p>
            <Chart
              options={performanceMonthGraph.options}
              series={performanceMonthGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution by intraday Duration
            </p>
            <Chart
              options={tradeDistributionByIntrDayGraph.options}
              series={tradeDistributionByIntrDayGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution by intraday Duration
            </p>
            <Chart
              options={performanceIntraDayGraph.options}
              series={performanceIntraDayGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DaysAndTimes;
