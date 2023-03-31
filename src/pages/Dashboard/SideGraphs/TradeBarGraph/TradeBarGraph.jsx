import React, { useState } from 'react';
import './tradeBarGraph.css';
import Chart from 'react-apexcharts';
import { lightTheme } from '../../../../Theme/theme';
import { light } from '@mui/material/styles/createPalette';

const TradeBarGraph = () => {
  const [tradeChart, setTradeChart] = useState({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690],
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
        categories: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'],
      },
    },
  });
  return (
    <div
      className="tradeBarGraphMain"
      style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}`, marginTop: '30px' }}
    >
      <div className="tradeDiv">
        <p className="totalTrade" style={{ color: `${lightTheme.headingTextColor}` }}>
          Total number of trades:
          <span style={{ fontWeight: '300', paddingLeft: '5px', color: `${lightTheme.textColor}` }}>8</span>
        </p>
        <div className="tradeChart">
          <Chart options={tradeChart.options} series={tradeChart.series} type="bar" height={310} />
        </div>
      </div>
    </div>
  );
};

export default TradeBarGraph;
