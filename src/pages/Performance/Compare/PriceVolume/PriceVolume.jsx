import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
// import { lightTheme } from '../../../../Theme/theme';
import Chart from 'react-apexcharts';
import ModeChange from '../../../../Theme/ChangeMode';

const PriceVolume = () => {
  const lightTheme = ModeChange();
  const [tradeDistributionPriceGraph, setTradeDistributionPriceGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22, 32, 33, 52],
      },
      {
        data: [53, 32, 33, 52, 13, 41, 64, 22],
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
          // distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#EDC161', '#6CB9AD', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
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
        categories: [
          '$0-$9.99',
          '$10-$19.99',
          '$20-$49.99',
          '$50-$99.99',
          '$100-$199.99',
          '$200-$499.99',
          '$500-$999.99',
          '$1000-send over',
        ],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performancePriceGraph, setPerformancePriceGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22, 32, 33, 52],
      },
      {
        data: [-53, -32, -33, -52, -13, -41, -64, -22],
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
          // distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#EDC161', '#6CB9AD', '#6CB9AD', '#FF696D', '#5D45DB', '#689BE2'],
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
        categories: [
          '$0-$9.99',
          '$10-$19.99',
          '$20-$49.99',
          '$50-$99.99',
          '$100-$199.99',
          '$200-$499.99',
          '$500-$999.99',
          '$1000-send over',
        ],
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
  const [distributionVolumeTradedGraph, setDistributionVolumeTradedGraph] = useState({
    series: [
      {
        data: [0, 0, 0, 64, 22, 32],
      },
      {
        data: [0, 0, 0, 13, 41, 64],
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
          // distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#FF696D', '#5D45DB', '#EDC161', '#6CB9AD', '#5D45DB', '#FF696D'],
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
        categories: ['500k-999k', '1M-2.49M', '2.5M-4.49M', '5.5M-9.9M', '10M-24.9M', '24.5M-over'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceVolumeTradedGraph, setPerformanceVolumeTradedGraph] = useState({
    series: [
      {
        data: [0, 0, 0, 64, 22, 32],
      },
      {
        data: [0, 0, 0, -13, -41, -64],
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
          // distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#FF696D', '#5D45DB', '#EDC161', '#6CB9AD', '#FF696D', '#689BE2'],
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
        categories: ['500k-999k', '1M-2.49M', '2.5M-4.49M', '5.5M-9.9M', '10M-24.9M', '24.5M-over'],
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
  const [tradeDistributionInPriceRangeGraph, setTradeDistributionInPriceRange] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22, 32, 33],
      },
      {
        data: [53, 32, 33, 52, 13, 41, 64],
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
          // distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#FF696D', '#5D45DB', '#6CB9AD', '#5D45DB', '#EDC161', '#FF696D', '#5D45DB'],
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
        categories: [
          '$0-$0.99',
          '$0.10-$0.24',
          '$1.25-$0.49',
          '$0.60-$0.99',
          '$1-$4.00',
          '$5-$9.99',
          '$10-$24.99',
          '$25-and over',
        ],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [tradePerformanceInPriceRangeGraph, setTradePerformanceInPriceRangeGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22, 32, 33],
      },
      {
        data: [-53, -32, -33, -52, -13, -41, -64],
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
          // distributed: true,
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
          labels: {
            formatter: function (x) {
              return '$' + x.toFixed(0);
            },
          },
        },
      },
      xaxis: {
        categories: [
          '$0-$0.99',
          '$0.10-$0.24',
          '$1.25-$0.49',
          '$0.60-$0.99',
          '$1-$4.00',
          '$5-$9.99',
          '$10-$24.99',
          '$25-and over',
        ],
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
              Trade Distribution by Price
            </p>
            <Chart
              options={tradeDistributionPriceGraph.options}
              series={tradeDistributionPriceGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance by Price
            </p>
            <Chart
              options={performancePriceGraph.options}
              series={performancePriceGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Distribution By Instrument Volume
            </p>
            <Chart
              options={distributionVolumeTradedGraph.options}
              series={distributionVolumeTradedGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance By Instrument Volume
            </p>
            <Chart
              options={performanceVolumeTradedGraph.options}
              series={performanceVolumeTradedGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution By In-Trade Price Range
            </p>
            <Chart
              options={tradeDistributionInPriceRangeGraph.options}
              series={tradeDistributionInPriceRangeGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance By In-Trade Price Range
            </p>
            <Chart
              options={tradePerformanceInPriceRangeGraph.options}
              series={tradePerformanceInPriceRangeGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PriceVolume;
