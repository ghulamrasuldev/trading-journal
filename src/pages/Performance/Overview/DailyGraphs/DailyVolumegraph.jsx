import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
// import { lightTheme } from '../../../../Theme/theme';
import Chart from 'react-apexcharts';
import axios from 'axios';
import ModeChange from '../../../../Theme/ChangeMode';
import { base_Url } from '../../../../Config/Config';
import apiService from '../../../../services/api/api';

const DailyVolumegraph = () => {
  const lightTheme = ModeChange();

  const [DailyVolumeChart, setDailyVolumeChart] = useState({
    series:[],
    options:{}
  });

  const getDailyVolumeData = async () => {
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', '/performance/overview/DailyVolumeGraph', { 'x-usertoken': authToken }, null)
      const data = res;
      const transformedData = Object.entries(data).map(([key, value]) => ({
        name: key,
        value: value.toFixed(2),
      }));
      const seriesData = [
        {
          data: transformedData.map((item) => item.value),
        },
      ]
      const optionsData = transformedData.map((item) => item.name);
        
      setDailyVolumeChart({
        series: seriesData,
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
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories:optionsData
          },
          yaxis: {
            tickAmount: 5,
            
          },
        },
      })
    } catch (error) {
      console.log("Error",error)
    }
  }

  useEffect(() => {
    getDailyVolumeData();
  },[])

 

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
        <Grid container >
          <Grid item lg={12} md={12} sm={12} sx={GridItem}>
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
