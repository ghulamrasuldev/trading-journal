import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import { lightTheme } from '../../../../Theme/theme';
import Chart from 'react-apexcharts';

const Instrument = () => {
  //Trade Distribution By instrument  Volume
  const [distributionInstrumentVolumeGraph, setDistributionInstrumentVolumeGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: ['500k-999k', '1M-2.49M', '2.5M-4.49M', '5.5M-9.9M', '10M-24.9M', '25M-over'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceGraph, setPerformanceGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [-53, -32, -33, -52, -13],
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
          // distributed: true,
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
        categories: ['500k-999k', '1M-2.49M', '2.5M-4.49M', '5.5M-9.9M', '10M-24.9M', '25M-over'],

        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },
    },
  });
  //Trade Distribution By instrument Relative Volume 1st
  const [distributionRelativeGraph, setDistributionRelativeGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22, 44, 64, 22, 55, 41, 64, 22],
      },
      {
        data: [44, 55, 41, 34, 22, 44, 14, 22, 55, 41, 64, 22],
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
          // distributed: true,
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
        categories: ['0%-49%', '0%-74%', '0%-99%', '1-99%', '1-49%', '1-100%', '1-299%', '1-499%', 'and over'],
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
  const [performanceRelativeGraph, setPerformanceRelativeGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22, 53, 32, 33, 52, 13, 52, 13],
      },
      {
        data: [-53, -32, -33, -52, -13, -44, -55, -41, -64, -22, -64, -22],
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
          // distributed: true,
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
          '0%-49%',
          '50%-74%',
          '75%-99%',
          '100-124%',
          '125-149%',
          '150-199%',
          '200-299%',
          '300-499%',
          '500% and over',
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
        // reversed: true,
      },
    },
  });
  //Trade Distribution By instrument Relative Volume 2nd
  const [distributionRelativeVGraph, setDistributionRelativeVGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22, 44, 64, 22, 55, 41],
      },
      {
        data: [44, 55, 41, 34, 22, 44, 14, 22, 55, 41],
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
          // distributed: true,
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
          '0%-24%',
          '25%-49%',
          '50%-74%',
          '75%-99%',
          '100-124%',
          '125-149%',
          '150-199%',
          '200-299%',
          '300-499%',
          '500% and over',
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
  const [performanceRelativeVGraph, setPerformanceRelativeVGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22, 53, 32, 33, 52, 13],
      },
      {
        data: [-53, -32, -33, -52, -13, -44, -55, -41, -64, -22],
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
          // distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#EDC161', '#6CB9AD', '#EDC161', '#6CB9AD', '#FF696D', '#5D45DB', '#FF696D', '#5D45DB', '#689BE2'],

        // colors: [
        //   ['#EDC161', '#6CB9AD', '#EDC161', '#6CB9AD', '#FF696D', '#5D45DB', '#FF696D', '#5D45DB', '#689BE2'],
        //   ['#6CB9AD', '#5D45DB', '#5D45DB', '#FF696D', '#EDC161', '#EDC161', '#689BE2', '#FF696D', '#5D45DB'],
        // ],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          '0%-24%',
          '25%-49%',
          '50%-74%',
          '75%-99%',
          '100-124%',
          '125-149%',
          '150-199%',
          '200-299%',
          '300-499%',
          '500% and over',
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
  //Trade Distribution By instrument Movement
  const [distributionInstrumentMovementGraph, setDistributionInstrumentMovementGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: [
          'see user-10%',
          '-2% to -10%',
          '-1% to -25%',
          '0% to -1%',
          '0% to -1%',
          '15% to -25%',
          '25% to -10%',
          '25% to -10%',
        ],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceMovementGraph, setPerformanceMovementGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [-53, -32, -33, -52, -13],
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
          // distributed: true,
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
        categories: [
          'see user-10%',
          '-2% to -10%',
          '-1% to -25%',
          '0% to -1%',
          '0% to -1%',
          '15% to -25%',
          '25% to -10%',
          '25% to -10%',
        ],

        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },
    },
  });
  //Trade Distribution By instrument Opening Gap
  const [distributionInstrumentOpeningGraph, setDistributionInstrumentOpeningGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: ['less than -2%', '1% to 2%', '0% to 1%', '0% to +1%', '+1% to +2%', 'over +2%'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceOpeningGraph, setPerformanceOpeningGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [-53, -32, -33, -52, -13],
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
          // distributed: true,
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
        categories: ['to -2%', 'to -2%', ' to +1%', 'to +2%', ' to +2%'],

        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },
    },
  });
  //Trade Distribution By instrument DAY type
  const [distributionInstrumentDayTypeGraph, setDistributionInstrumentDayTypeGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: ['Inside Range', 'Outside Range', 'Trend Up', 'Trend Down'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceDayTypeGraph, setPerformanceDayTypeGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [-53, -32, -33, -52, -13],
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
          // distributed: true,
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
        categories: ['Inside Range', 'Outside Range', 'Trend Up', 'Trend Down'],
        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },
    },
  });
  //Trade Distribution By instrument AVG true range
  const [distributionInstrumentAverageGraph, setDistributionInstrumentAverageGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: [
          '$0.10-$0.24',
          '$0.25-$0.49',
          '$0.49-$0.99',
          '$1-$1.99',
          '$2-$4.99',
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
  const [performanceAverageGraph, setPerformanceAverageGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [-53, -32, -33, -52, -13],
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
          // distributed: true,
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
        categories: [
          '$0.10-$0.24',
          '$0.25-$0.49',
          '$0.49-$0.99',
          '$1-$1.99',
          '$2-$4.99',
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
    },
  });
  //Trade Distribution by entry % of ATR 1st
  const [distributionInstrumentATRGraph, setDistributionInstrumentATRGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: [
          '200% or more',
          '55%-100%',
          '-88% to -50%',
          '46 to 25%',
          '-24 to +25%',
          '50 to 49%',
          '50 to 49%',
          '50 to 49%',
          '50 to 49%',
        ],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  //Trade Distribution by Relative volatility
  const [distributionInstrumentRelativeVolatilityGraph, setDistributionInstrumentRelativeVolatilityGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: [
          '0%-24%',
          '25%-49%',
          '50%-74%',
          '75%-99%',
          '100-124%',
          '125-149%',
          '150-199%',
          '200-299%',
          '300-499%',
          '500% and over',
        ],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceRelativeVolatilityGraph, setPerformanceRelativeVolatilityGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [-53, -32, -33, -52, -13],
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
          // distributed: true,
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
        categories: [
          '0%-24%',
          '25%-49%',
          '50%-74%',
          '75%-99%',
          '100-124%',
          '125-149%',
          '150-199%',
          '200-299%',
          '300-499%',
          '500% and over',
        ],

        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },
    },
  });
  //Trade Distribution by entry % of ATR 2nd
  const [distributionInstrumentATRVGraph, setDistributionInstrumentATRVGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: [
          '-200% or more',
          '199% to 100%',
          '-99% to -50%',
          '-88% to -50%',
          '-49 to -25%',
          '-49 to -25%',
          '-25 to +74%',
          '+50 to 99%',
          '+100 to +199%',
          '200% or more',
        ],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });

  //Trade Distribution by entry price vs 50-day
  const [distributionInstrumentEntryPriceGraph, setDistributionInstrumentEntryPriceGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
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
          // distributed: true,
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
        categories: ['less than -59%', '1 to -59%', '1 to -59%', '1 to -59%', '1 to -59%', '1 to -59%'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceEntryPriceGraph, setPerformanceEntryPriceGraph] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [-53, -32, -33, -52, -13],
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
          // distributed: true,
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
        categories: ['less than -59%', '1 to -59%', '1 to -59%', '1 to -59%', '1 to -59%', '1 to -59%'],

        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
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
        <p
          style={{
            fontSize: '18px',
            fontWeight: '500',
            color: `${lightTheme.textColor}`,
            // textAlign: 'center',
            padding: '5px 0',
          }}
        >
          Instrument reports are only available for gold users.
          <span style={{ color: `${lightTheme.headingTextColor}` }}>Upgrade now!</span>
        </p>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Distribution by Instrument Volume
            </p>
            <Chart
              options={distributionInstrumentVolumeGraph.options}
              series={distributionInstrumentVolumeGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance by Instrument Volume
            </p>
            <Chart options={performanceGraph.options} series={performanceGraph.series} type="bar" height={300} />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Distribution By Instrument Relative Volume (% Of 50ma)
            </p>
            <Chart
              options={distributionRelativeGraph.options}
              series={distributionRelativeGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance By Instrument Relative Volume (% Of 50ma)
            </p>
            <Chart
              options={performanceRelativeGraph.options}
              series={performanceRelativeGraph.series}
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
              Distribution By Instrument Relative Volume (% Of 50ma)
            </p>
            <Chart
              options={distributionRelativeVGraph.options}
              series={distributionRelativeVGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance By Instrument Relative Volume (% Of 50ma)
            </p>
            <Chart
              options={performanceRelativeVGraph.options}
              series={performanceRelativeVGraph.series}
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
              Trade Distribution by Instrument Movement
            </p>
            <Chart
              options={distributionInstrumentMovementGraph.options}
              series={distributionInstrumentMovementGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution by Instrument Movement
            </p>
            <Chart
              options={performanceMovementGraph.options}
              series={performanceMovementGraph.series}
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
              Trade Distribution by Instrument Opening Gap
            </p>
            <Chart
              options={distributionInstrumentOpeningGraph.options}
              series={distributionInstrumentOpeningGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution by Instrument Day Type
            </p>
            <Chart
              options={distributionInstrumentDayTypeGraph.options}
              series={distributionInstrumentDayTypeGraph.series}
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
              Performance by Instrument Opening Gap
            </p>
            <Chart
              options={performanceOpeningGraph.options}
              series={performanceOpeningGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution by Instrument Avg True Range
            </p>
            <Chart
              options={distributionInstrumentAverageGraph.options}
              series={distributionInstrumentAverageGraph.series}
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
              Performance by Instrument Day Type
            </p>
            <Chart
              options={performanceDayTypeGraph.options}
              series={performanceDayTypeGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution by Entry % OF ATR
            </p>
            <Chart
              options={distributionInstrumentATRGraph.options}
              series={distributionInstrumentATRGraph.series}
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
              Performance by Instrument Avg True Range
            </p>
            <Chart
              options={performanceAverageGraph.options}
              series={performanceAverageGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Trade Distribution by Relative Volatility (TR ATR)
            </p>
            <Chart
              options={distributionInstrumentRelativeVolatilityGraph.options}
              series={distributionInstrumentRelativeVolatilityGraph.series}
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
              Trade Distribution By Entry % OF ATR
            </p>
            <Chart
              options={distributionInstrumentATRVGraph.options}
              series={distributionInstrumentATRVGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance by Relative Volatility (TR ATR)
            </p>
            <Chart
              options={performanceRelativeVolatilityGraph.options}
              series={performanceRelativeVolatilityGraph.series}
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
              Trade Distribution By Entry Price VS 50-Day SMA
            </p>
            <Chart
              options={distributionInstrumentEntryPriceGraph.options}
              series={distributionInstrumentEntryPriceGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTitle}
            >
              Performance By Entry Price VS 50-Day SMA
            </p>
            <Chart
              options={performanceEntryPriceGraph.options}
              series={performanceEntryPriceGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Instrument;
