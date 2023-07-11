import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Chart from "react-apexcharts";
import "./TopGraph.css";
import ModeChange from "../../../Theme/ChangeMode";
import { base_Url } from "../../../Config/Config";
import { useEffect } from "react";
import axios from "axios";
import Loading from "../../../components/common/Loading";
import apiService from "../../../services/api/api";

const TopGraphs = () => {
  const lightTheme = ModeChange();

  const [isloading, setIsLoading] = useState(false);
  const [accumulativeGraph, setAccumulativeGraph] = useState();
  const [winingGraph, setWiningGraph] = useState();
  const [losingGraph, setLosingGraph] = useState();
  const [GraphData1, setGraphData1] = useState({
    seriesSpark1: [],
    optionsSpark1: {},
  });
  const [GraphData2, setGraphData2] = useState({
    seriesSpark2: [],
    optionsSpark2: {},
  });
  const [GraphData3, setGraphData3] = useState({
    seriesSpark3: [],
    optionsSpark3: {},
  });
  const getAccumulativePerformanceGraph = async () => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("AuthToken");
      const response = await apiService(
        "get",
        "/dashboard/trade/accumulativePerformance/netpl/weekly",
        { "x-usertoken": authToken },
        null
      );
      const data = response;
      setAccumulativeGraph(data);

      const dates = Object.keys(data).filter((key) =>
        /\d{2}\/\d{2}\/\d{4}/.test(key)
      );
      const netplValues = dates.map((date) =>
        data[date].updatedNetpl.toFixed(4)
      );

      setGraphData1({
        seriesSpark1: [
          {
            data: netplValues && netplValues,
          },
        ],
        optionsSpark1: {
          tooltip: {
            enabled: true,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
            },

            y: {
              show: true,
              title: {
                formatter: (seriesName) => "Netpl",
              },
              formatter: (value) => `${value}`, // customize the tooltip value format
            },
            fixed: {
              enabled: true,
              position: "top", // Position the tooltip above the graph line
              offsetY: -10, // Adjust the vertical offset to position it precisely
            },
          },
          chart: {
            type: "area",
            height: 160,
            sparkline: {
              enabled: true,
            },
            toolbar: {
              show: false,
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
            // min: 1,
            // labels: false,
            // min: Math.min(...netplValues) - 5,
            labels: {
              show: false,
            },
          },
          grid: {
            // position: 'back',

            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: [`${lightTheme.purpleAreaGraph}`],
          dataLabels: {
            enabled: false,
          },
        },
      });

      setIsLoading(false);
    } catch (error) {
      console.log("error from dashboard top graph", error);
    }
  };
  const getAvgWiningTrade = async () => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("AuthToken");
      const response = await apiService(
        "get",
        "/dashboard/trade/averageWining/netpl/weekly",
        { "x-usertoken": authToken },
        null
      );
      const data = response;
      setWiningGraph(data);
      const dates = Object.keys(data).filter((key) =>
        /\d{2}\/\d{2}\/\d{4}/.test(key)
      );
      const netplValues = dates.map((date) =>
        data[date].updatedNetpl.toFixed(4)
      );
      setGraphData2({
        seriesSpark2: [
          {
            data: netplValues && netplValues,
          },
        ],
        optionsSpark2: {
          tooltip: {
            enabled: true,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
            },

            y: {
              show: true,
              title: {
                formatter: (seriesName) => "Netpl",
              },
              formatter: (value) => `${value}`, // customize the tooltip value format
            },
            fixed: {
              enabled: true,
              position: "top", // Position the tooltip above the graph line
              offsetY: -10, // Adjust the vertical offset to position it precisely
            },
          },
          chart: {
            type: "area",
            height: 160,
            sparkline: {
              enabled: true,
            },
            toolbar: {
              show: false,
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
            // min: 1,
            // labels: false,
            // min: Math.min(...netplValues) - 5,
            labels: {
              show: false,
            },
          },
          grid: {
            // position: 'back',

            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: [`${lightTheme.greenAreaGraph}`],
          dataLabels: {
            enabled: false,
          },
        },
      });

      setIsLoading(false);
    } catch (error) {
      console.log("error from dashboard top graph", error);
    }
  };
  const getAvgLosingTrade = async () => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("AuthToken");
      const response = await apiService(
        "get",
        "/dashboard/trade/averageLosing/netpl/weekly",
        { "x-usertoken": authToken },
        null
      );
      const data = response;
      setLosingGraph(data);
      const dates = Object.keys(data).filter((key) =>
        /\d{2}\/\d{2}\/\d{4}/.test(key)
      );
      const netplValues = dates.map((date) =>
        data[date].updatedNetpl.toFixed(4)
      );

      setGraphData3({
        seriesSpark3: [
          {
            data: netplValues && netplValues,
          },
        ],
        optionsSpark3: {
          tooltip: {
            enabled: true,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
            },

            y: {
              show: true,
              title: {
                formatter: (seriesName) => "Netpl",
              },
              formatter: (value) => `${value}`, // customize the tooltip value format
            },
            fixed: {
              enabled: true,
              position: "top", // Position the tooltip above the graph line
              offsetY: -10, // Adjust the vertical offset to position it precisely
            },
          },
          chart: {
            type: "area",
            height: 160,
            sparkline: {
              enabled: true,
            },
            toolbar: {
              show: false,
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
            // min: 1,
            // labels: false,
            // min: Math.min(...netplValues) - 5,
            labels: {
              show: false,
            },
          },
          grid: {
            // position: 'back',

            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: [`${lightTheme.redAreaGraph}`],
          dataLabels: {
            enabled: false,
          },
        },
      });
      setIsLoading(false);
    } catch (error) {
      console.log("error from dashboard top graph", error);
    }
  };

  let check = "false";
  useEffect(() => {
    if (check === "false") {
      getAccumulativePerformanceGraph();
      getAvgWiningTrade();
      getAvgLosingTrade();
      check = "true";
    }
  }, []);

  // styling Props
  const topGraphStyle = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.02)",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: "6px",
    // maxHeight: "137px",
    overflow: "hidden",
  };
  return (
    <Box>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        rowGap={4}
        mt={5}
        mb={5}
      >
        <Grid item lg={3.1} md={12} sm={12} sx={topGraphStyle}>
          <div className="graphTopSection">
            <div>
              <p
                className="graphTitle"
                style={{ color: `${lightTheme.headingTextColor}` }}
              >
                Accumulative Performance
              </p>
              <p
                className="graphSubTitle"
                style={{ color: `${lightTheme.headingColor}` }}
              >
                Total Trades:
                <span
                  style={{
                    fontWeight: "500",
                    paddingLeft: "5px",
                    color: `${lightTheme.lightDarkBlue}`,
                  }}
                >
                  {accumulativeGraph && accumulativeGraph.weeklyTrades}
                </span>
              </p>
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <p
                className="profitTopGraph"
                style={{ color: `${lightTheme.profit}` }}
              >
                {accumulativeGraph &&
                  `$${accumulativeGraph.weeklyNetpl.toFixed(4)}`}
              </p>
              <p
                className="lossTopGraph"
                style={{ color: `${lightTheme.loss}` }}
              >
                {accumulativeGraph &&
                  `$${accumulativeGraph.comparedNetpl.toFixed(4)}`}
              </p>
            </div>
          </div>

          <div>
            {isloading ? (
              <Loading />
            ) : (
              <Chart
                options={GraphData1.optionsSpark1}
                series={GraphData1.seriesSpark1}
                type="area"
                height={60}
              />
            )}
          </div>
        </Grid>
        <Grid item lg={3.1} md={12} sm={12} sx={topGraphStyle}>
          <div className="graphTopSectionb">
            <div>
              <p
                className="graphTitle"
                style={{ color: `${lightTheme.headingTextColor}` }}
              >
                Average Winning Trade
              </p>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <p
                className="profitTopGraph"
                style={{ color: `${lightTheme.profit}` }}
              >
                {winingGraph && `$${winingGraph.avgWiningNetpl.toFixed(4)}`}
              </p>
              <p
                className="lossTopGraph"
                style={{ color: `${lightTheme.loss}` }}
              >
                {winingGraph && `$${winingGraph.comparedNetpl.toFixed(4)}`}
              </p>
            </div>
          </div>
          <div>
            {isloading ? (
              <Loading />
            ) : (
              <Chart
                options={GraphData2.optionsSpark2}
                series={GraphData2.seriesSpark2}
                type="area"
                height={74}
              />
            )}
          </div>
        </Grid>
        <Grid item lg={3.1} md={12} sm={12} sx={topGraphStyle}>
          <div className="graphTopSectionb">
            <div>
              <p
                className="graphTitle"
                style={{ color: `${lightTheme.headingTextColor}` }}
              >
                Average Losing Trade
              </p>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <p
                className="profitTopGraph"
                style={{ color: `${lightTheme.profit}` }}
              >
                {losingGraph && `$${losingGraph.comparedNetpl.toFixed(4)}`}
              </p>
              <p
                className="lossTopGraph"
                style={{ color: `${lightTheme.loss}` }}
              >
                {losingGraph && `$${losingGraph.comparedNetpl.toFixed(4)}`}
              </p>
            </div>
          </div>
          <div>
            {isloading ? (
              <Loading />
            ) : (
              <Chart
                options={GraphData3.optionsSpark3}
                series={GraphData3.seriesSpark3}
                type="area"
                height={74}
              />
            )}
          </div>
        </Grid>
        <Grid
          item
          lg={2.5}
          md={12}
          sm={12}
          rowGap={1}
          className="rMultipleAndOpen"
        >
          <div
            className="rMultipleMain"
            style={{
              backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
            }}
          >
            <p
              className="rMultiple"
              style={{ color: `${lightTheme.headingTextColor}` }}
            >
              R. Multiple
            </p>
            <div>
              <p
                className="profitTopGraph"
                style={{ color: `${lightTheme.profit}` }}
              >
                $35,520.80
              </p>
              <p
                className="lossTopGraph"
                style={{ color: `${lightTheme.loss}` }}
              >
                -5.65%
              </p>
            </div>
          </div>
          <div
            className="openMain"
            style={{
              backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
            }}
          >
            <p
              className="open"
              style={{ color: `${lightTheme.headingTextColor}` }}
            >
              Open
            </p>
            <div>
              <p
                className="profitTopGraph"
                style={{ color: `${lightTheme.profit}` }}
              >
                $35,520.80
              </p>
              <p
                className="lossTopGraph"
                style={{ color: `${lightTheme.loss}` }}
              >
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
