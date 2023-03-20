import React from 'react'
import './DailyStatus.css'
import NavBar from '../../components/NavBar/NavBar'
import { Box,Grid } from '@mui/material'
import TopGraphs from '../Dashboard/TopGraph/TopGraphs'
import DailyTradeGraph from './DailyTradeGraph/DailyTradeGraph'
import DailyTradeDetails from './DailyTradeDetails/DailyTradeDetails'
import DailyCalendar from './DailyCalendar/DailyCalendar'
import TradeBarGraph from '../Dashboard/SideGraphs/TradeBarGraph/TradeBarGraph'

const DailyStatus = () => {
  const mainDivStyle = {
    padding: "30px 25px",
    backgroundColor: "rgba(215, 215, 218, 0.327)",
  };

  return (
    <div>
      <Box sx={mainDivStyle}>
        <NavBar name={"Daily Status"} />
        <TopGraphs />
        <Grid container columnGap={6} rowGap={6}>
          <Grid item lg={7} md={12} sm={12}>
            <DailyTradeGraph />
            <DailyTradeDetails/>
            </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <DailyCalendar />
            <TradeBarGraph/>
            </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default DailyStatus