import React from 'react';
import './DailyStatus.css';
import NavBar from '../../components/NavBar/NavBar';
import { Box, Grid } from '@mui/material';
import TopGraphs from '../Dashboard/TopGraph/TopGraphs';
import DailyTradeGraph from './DailyTradeGraph/DailyTradeGraph';
import DailyTradeDetails from './DailyTradeDetails/DailyTradeDetails';
import DailyCalendar from '../../components/common/DailyCalendar/DailyCalendar';
import TradeBarGraph from '../Dashboard/SideGraphs/TradeBarGraph/TradeBarGraph';
import ModeChange from '../../Theme/ChangeMode';
// import { lightTheme } from '../../Theme/theme';

import { useAtom } from 'jotai';
import { isOpenAtom } from '../../atom/atom.js';

const DailyStatus = () => {
  const lightTheme = ModeChange();
  const [isOpen] = useAtom(isOpenAtom);
  const spacing = isOpen ? 10 : 12;

  const mainDivStyle = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.lightPageBackground}`,
  };

  return (
    <div>
      <Box sx={mainDivStyle}>
        <NavBar name={'Daily Status'} />
        <TopGraphs />
        <Grid container justifyContent="space-between" rowGap={6}>
          <Grid item lg={8} md={12} sm={12}>
            <DailyTradeGraph />
            <DailyTradeDetails />
          </Grid>
          <Grid item lg={3} md={12} sm={12}>
            <DailyCalendar />
            <TradeBarGraph />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DailyStatus;
