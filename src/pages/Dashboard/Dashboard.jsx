import React, { useState } from 'react';
import { Box, Divider, Grid } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
// import Chart from "react-apexcharts";
import TopGraphs from './TopGraph/TopGraphs';
import './Dashboard.css';
import SideGraphs from './SideGraphs/SideGraphs.jsx';
import MonthlyGraph from './MonthlyAndCalender/MonthlyGraph';
import CalendarComponent from './MonthlyAndCalender/Calendar';
import { lightTheme } from '../../Theme/theme';
import TradeBarGraph from './SideGraphs/TradeBarGraph/TradeBarGraph';
import UpcomingEvents from './upcomingEvents/upcomingEvents';
import { useAtom } from 'jotai';
import { isOpenAtom } from '../../atom/atom.js';

const Dashboard = () => {
  const [isOpen] = useAtom(isOpenAtom);
  const spacing = isOpen ? 1 : 6;

  // styling props
  const mainDivStyle = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.lightPageBackground}`,
  };

  const Graphs = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: '8px',
    minWidth: '397px',
    maxHeight: '310px',
  };
  const tradeAndUpcoming = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: '8px',
    minWidth: '397px',
    maxHeight: '386px',
    marginTop: '40px',
  };

  return (
    <div>
      <Box sx={mainDivStyle}>
        <NavBar name={'Dashboard'} />
        <TopGraphs />
        <Grid container columnGap={spacing} rowGap={4}>
          <Grid item lg={7.5} md={12} sm={12}>
            <MonthlyGraph />
          </Grid>
          <Grid item lg={4} md={12} sm={12} sx={Graphs}>
            <SideGraphs />
          </Grid>
        </Grid>
        <Grid container columnGap={spacing} rowGap={4}>
          <Grid item lg={7.5} md={12} sm={12} style={{ marginTop: '20px' }}>
            <TradeBarGraph />
          </Grid>
          <Grid item lg={4} md={12} sm={12} sx={tradeAndUpcoming}>
            <UpcomingEvents />
          </Grid>
        </Grid>
        <Grid>
          <CalendarComponent />
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
