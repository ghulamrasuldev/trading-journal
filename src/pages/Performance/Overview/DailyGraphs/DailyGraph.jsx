import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
// import { lightTheme } from '../../../../Theme/theme';
import Chart from 'react-apexcharts';
import axios from 'axios'
import { base_Url } from '../../../../Config/Config';
import ModeChange from '../../../../Theme/ChangeMode';
import DailyVolumegraph from './DailyVolumegraph';
import apiService from '../../../../services/api/api';

const DailyGraph = () => {
  const lightTheme = ModeChange();

  const [DailyPLGraph, setDailyPLGraph] = useState({
    series: [],
    options:{},
  });

  const getDailyPL = async () => {
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', '/performance/overview/DailyPAndL', { 'x-usertoken': authToken }, null)
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
        
      setDailyPLGraph({
        series: seriesData,
        options: {
          chart: {
            type: 'bar',
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
              columnWidth: '80%',
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
                return '$' + y.toFixed(0);
              },
            },
          },
          xaxis: {
            //   type: 'datetime',
            categories:optionsData
            
          },
        },
       
      })
    } catch (error) {
      console.log("Error",error)
    }
  }

  useEffect(() => {
    getDailyPL();
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
        <Grid container justifyContent={"space-between"}>
          <Grid item lg={5.7} md={12} sm={12} sx={GridItem}>
            <p style={graphTitle}>Gross Daily P&L (Lasts 30 Trading Days)</p>
            <div>
              <Chart options={DailyPLGraph.options} series={DailyPLGraph.series} type="bar" height={350} />
            </div>
          </Grid>
          <Grid item lg={5.9} md={12} sm={12} sx={GridItem}>
            <DailyVolumegraph/>
          </Grid>
       
        </Grid>
      </Box>
    </div>
  );
};

export default DailyGraph;
