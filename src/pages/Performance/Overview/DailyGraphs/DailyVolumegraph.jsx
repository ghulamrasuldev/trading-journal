import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { lightTheme } from '../../../../Theme/theme';
import Chart from 'react-apexcharts';
import { useAtom } from 'jotai';

import { isOpenAtom } from '../../../../atom/atom.js';

const DailyVolumegraph = () => {
  const [isOpen] = useAtom(isOpenAtom);
  const spacing = isOpen ? 4.5 : 5;
  const [DailyVolumeChart, setDailyVolumeChart] = useState({
    series: [
      {
        data: [
          1.45, 5.42, 5.9, 0.42, 12.6, 18.1, 18.2, 14.16, 11.1, 6.09, 0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 55.75, 17.1,
          19.8, 27.03, 24.4, 47.2, 43.3, 18.6, 48.6, 41.1, 39.6, 61.4,
        ],
      },
    ],
    options: {
      colors: [`${lightTheme.blueGraphColor}`],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          // borderRadius: 2,
          border: 15,
          vertical: true,
          // distributed: true
        },
        //   fill: {
        //     colors: ['red', 'orange', 'green', 'orange', 'red'],
        //     type: 'solid',
        //     opacity: 1
        // },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
          '2022-03-01',
        ],
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          formatter: function (y) {
            return '$' + y.toFixed(0);
          },
        },
      },
    },
  });

  // styling
  const mainDiv = {
    // backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    marginTop: '25px',
  };
  const GridItem = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    padding: '20px 10px',
    // marginTop:'15px'
    borderRadius: '8px',
  };
  const graphTitle = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: '20px',
    fontWeight: '600',
  };
  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={spacing} rowGap={4}>
          <Grid item lg={5.8} md={12} sm={12} sx={GridItem}>
            <p style={graphTitle}>Daily Volume (Last 30 Trending Days)</p>
            <div>
              <Chart options={DailyVolumeChart.options} series={DailyVolumeChart.series} type="bar" height={350} />
            </div>
          </Grid>
          <Grid item lg={5.8} md={12} sm={12} sx={GridItem}>
            <p style={graphTitle}>Daily Volume (Last 30 Trending Days)</p>
            <div>
              <Chart options={DailyVolumeChart.options} series={DailyVolumeChart.series} type="bar" height={350} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DailyVolumegraph;
