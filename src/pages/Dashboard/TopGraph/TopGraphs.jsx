import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Chart from 'react-apexcharts';
import './TopGraph.css';
import ModeChange from '../../../Theme/ChangeMode';
// import { lightTheme } from '../../../Theme/theme';
import { useAtom } from 'jotai';
import { isOpenAtom } from '../../../atom/atom.js';

const TopGraphs = () => {
  const [isOpen] = useAtom(isOpenAtom);

  const lightTheme = ModeChange();

  // const spacing = isOpen ? 1.6 : 2;
  const spacing = isOpen ? 1 : 3;

  const [graphData, setGraphData] = useState({
    seriesSpark1: [
      {
        data: [33, 32, 40, 44, 22, 43],
      },
    ],
    optionsSpark1: {
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        opacity: 0.3,
      },
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      yaxis: {
        min: 0,
        // labels: false,
      },
      colors: [`${lightTheme.purpleAreaGraph}`],
    },
    seriesSpark2: [
      {
        data: [23, 34, 28, 24, 52, 63],
      },
    ],
    optionsSpark2: {
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        opacity: 0.3,
      },
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      yaxis: {
        min: 0,
      },
      colors: [`${lightTheme.greenAreaGraph}`],
    },
    seriesSpark3: [
      {
        data: [26, 34, 29, 34, 29, 53],
      },
    ],
    optionsSpark3: {
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        opacity: 0.3,
      },
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      yaxis: {
        min: 0,
      },
      colors: [`${lightTheme.redAreaGraph}`],
    },
  });

  // styling Props
  const topGraphStyle = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: '6px',
    maxHeight: '137px',
    overflow: 'hidden',
  };
  return (
    <Box>
      <Grid container justifyContent="space-between" alignItems="center" mt={5} mb={5}>
        {/* <Grid container columnGap={spacing} rowGap={4} mt={5} mb={5}> */}
        <Grid item lg={3.1} md={12} sm={12} sx={topGraphStyle}>
          <div className="graphTopSection">
            <div>
              <p className="graphTitle" style={{ color: `${lightTheme.headingTextColor}` }}>
                Accumulative Performance
              </p>
              <p className="graphSubTitle" style={{ color: `${lightTheme.headingColor}` }}>
                Total Trades:
                <span style={{ fontWeight: '500', paddingLeft: '5px' }}>83</span>
              </p>
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <p className="profitTopGraph" style={{ color: `${lightTheme.profit}` }}>
                $35,520.80
              </p>
              <p className="lossTopGraph" style={{ color: `${lightTheme.loss}` }}>
                -5.65%
              </p>
            </div>
          </div>
          <div>
            <Chart options={graphData.optionsSpark1} series={graphData.seriesSpark1} type="area" height={60} />
          </div>
        </Grid>
        <Grid item lg={3.1} md={12} sm={12} sx={topGraphStyle}>
          <div className="graphTopSectionb">
            <div>
              <p className="graphTitle" style={{ color: `${lightTheme.headingTextColor}` }}>
                Average Winning Trade
              </p>
            </div>
            <div style={{ paddingTop: '10px' }}>
              <p className="profitTopGraph" style={{ color: `${lightTheme.profit}` }}>
                $7320.80
              </p>
              <p className="lossTopGraph" style={{ color: `${lightTheme.loss}` }}>
                -5.65%
              </p>
            </div>
          </div>
          <div>
            <Chart options={graphData.optionsSpark2} series={graphData.seriesSpark2} type="area" height={74} />
          </div>
        </Grid>
        <Grid item lg={3.1} md={12} sm={12} sx={topGraphStyle}>
          <div className="graphTopSectionb">
            <div>
              <p className="graphTitle" style={{ color: `${lightTheme.headingTextColor}` }}>
                Average Losing Trade
              </p>
            </div>
            <div style={{ paddingTop: '10px' }}>
              <p className="profitTopGraph" style={{ color: `${lightTheme.profit}` }}>
                $7320.80
              </p>
              <p className="lossTopGraph" style={{ color: `${lightTheme.loss}` }}>
                -5.65%
              </p>
            </div>
          </div>
          <div>
            <Chart options={graphData.optionsSpark3} series={graphData.seriesSpark3} type="area" height={74} />
          </div>
        </Grid>
        <Grid item lg={2.5} md={12} sm={12} rowGap={1} className="rMultipleAndOpen">
          <div className="rMultipleMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
            <p className="rMultiple" style={{ color: `${lightTheme.headingTextColor}` }}>
              R. Multiple
            </p>
            <div>
              <p className="profitTopGraph" style={{ color: `${lightTheme.profit}` }}>
                $35,520.80
              </p>
              <p className="lossTopGraph" style={{ color: `${lightTheme.loss}` }}>
                -5.65%
              </p>
            </div>
          </div>
          <div className="openMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
            <p className="open" style={{ color: `${lightTheme.headingTextColor}` }}>
              Open
            </p>
            <div>
              <p className="profitTopGraph" style={{ color: `${lightTheme.profit}` }}>
                $35,520.80
              </p>
              <p className="lossTopGraph" style={{ color: `${lightTheme.loss}` }}>
                -5.65%
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopGraphs;
