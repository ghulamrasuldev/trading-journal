import React, { useState } from 'react';
import { Box, Divider, Grid } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
// import Chart from "react-apexcharts";
import TopGraphs from './TopGraph/TopGraphs';
import './Dashboard.css';
import SideGraphs from './SideGraphs/SideGraphs.jsx';
import MonthlyGraph from './MonthlyAndCalender/MonthlyGraph';
import CalendarComponent from './MonthlyAndCalender/Calendar';
import ModeChange from '../../Theme/ChangeMode';
// import { lightTheme } from '../../Theme/theme';

const Dashboard = () => {

  const lightTheme = ModeChange();
  // styling props
  const mainDivStyle = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.lightPageBackground}`,
  };

  const Graphs = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    // border: '1px solid black',
    borderRadius: '8px',
  };

  return (
    <div>
      <Box sx={mainDivStyle}>
        <NavBar name={'Dashboard'} />
        <TopGraphs />
        <Box>
          <Grid container columnGap={6} rowGap={4}>
            <Grid item lg={4} md={12} sm={12} sx={Graphs}>
              <SideGraphs />
            </Grid>
            <Grid item lg={7.5} md={12} sm={12} >
              <MonthlyGraph />
              <CalendarComponent />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
