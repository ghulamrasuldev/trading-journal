import React,{useState} from 'react'
import { Box, Grid } from "@mui/material";
import Chart from "react-apexcharts";
import './TopGraph.css'
import {lightTheme} from '../../../Theme/theme'

const TopGraphs = () => {
    const [graphData, setGraphData] = useState({
        seriesSpark1: [
          {
            data: [23, 34, 12, 34, 22, 43],
          },
        ],
        optionsSpark1: {
          chart: {
            type: "area",
            height: 160,
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            curve: "straight",
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
          colors:[`${lightTheme.purpleAreaGraph}`],
        },
        seriesSpark2: [
          {
            data: [13, 34, 12, 14, 52, 63],
          },
        ],
        optionsSpark2: {
          chart: {
            type: "area",
            height: 160,
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            curve: "straight",
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
            data: [13, 34, 22, 34, 12, 53],
          },
        ],
        optionsSpark3: {
          chart: {
            type: "area",
            height: 160,
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            curve: "straight",
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
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.02)",
        backgroundColor:`${lightTheme.ComponentBackgroundColor}`,
        // border: '1px solid black',
        borderRadius: "8px",
      };
  return (
      <Box>
          <Grid container columnGap={2}  rowGap={4} mt={5} mb={5} >
            <Grid item lg={3} md={12} sm={12} sx={topGraphStyle}>
              <div className="graphTopSection">
                <div>
                  <p className="graphTitle" style={{color:`${lightTheme.headingTextColor}`}}>Accumulative Performance</p>
                  <p className="graphSubTitle" style={{color:`${lightTheme.headingColor}`}}>
                    Total Trades:
                    <span style={{ fontWeight: "500", paddingLeft: "5px" }}>
                      83
                    </span>
                  </p>
                </div>
                <div>
                  <p className="profitTopGraph" style={{color:`${lightTheme.profit}`}}>$35,520.80</p>
                  <p className="lossTopGraph" style={{color:`${lightTheme.loss}`}}>-5.65%</p>
                </div>
              </div>
              <div>
                <Chart
                  options={graphData.optionsSpark1}
                  series={graphData.seriesSpark1}
                  type="area"
                  height={160}
                />
              </div>
            </Grid>
            <Grid item lg={3} md={12} sm={12} sx={topGraphStyle}>
            <div className="graphTopSectionb">
              <div >
              <p className="graphTitle" style={{color:`${lightTheme.headingTextColor}`}}>Average Winning Trade</p>
              </div>
              <div>
                <p className="profitTopGraph" style={{color:`${lightTheme.profit}`}}>$7320.80</p>
                <p className="lossTopGraph" style={{color:`${lightTheme.loss}`}}>-5.65%</p>
              </div>
              </div>
              <div>
                <Chart options={graphData.optionsSpark2} series={graphData.seriesSpark2} type="area" height={160} />
                </div>
            </Grid>
            <Grid item lg={3} md={12} sm={12} sx={topGraphStyle}>
              <div className="graphTopSectionb">
                <div>
                  <p className="graphTitle" style={{color:`${lightTheme.headingTextColor}`}}>Average Losing Trade</p>
                </div>
                <div>
                  <p className="profitTopGraph" style={{color:`${lightTheme.profit}`}}>$7320.80</p>
                  <p className="lossTopGraph" style={{color:`${lightTheme.loss}`}}>-5.65%</p>
                </div>
              </div>
              <div>
                <Chart
                  options={graphData.optionsSpark3}
                  series={graphData.seriesSpark3}
                  type="area"
                  height={160}
                />
              </div>
            </Grid>
            <Grid item lg={2.5} md={12} sm={12} rowGap={4} className="rMultipleAndOpen">
              <div className="rMultipleMain">
                <p className="rMultiple" style={{color:`${lightTheme.headingTextColor}`}}>R. Multiple</p>
                <div>
                  <p className="profitTopGraph" style={{color:`${lightTheme.profit}`}}>$35,520.80</p>
                  <p className="lossTopGraph" style={{color:`${lightTheme.loss}`}}>-5.65%</p>
                </div>
              </div>
              <div className="openMain">
                <p className="open" style={{color:`${lightTheme.headingTextColor}`}}>Open</p>
                <div>
                  <p className="profitTopGraph" style={{color:`${lightTheme.profit}`}}>$35,520.80</p>
                  <p className="lossTopGraph" style={{color:`${lightTheme.loss}`}}>-5.65%</p>
                </div>
              </div>
            </Grid>
          </Grid>
    </Box>
  )
}

export default TopGraphs