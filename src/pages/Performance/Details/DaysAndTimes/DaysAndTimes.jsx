import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { lightTheme } from "../../../../Theme/theme";
import Chart from "react-apexcharts";
import ModeChange from "../../../../Theme/ChangeMode";
import apiService from "../../../../services/api/api";
const DaysAndTimes = () => {
  const lightTheme = ModeChange();

  const [performanceGraph, setPerformanceGraph] = useState({
    series: [],
    options: {},
  });
  const [performanceHourGraph, setPerformanceHourGraph] = useState({
    series: [],
    options: {},
  });
  const [performanceMonthGraph, setPerformanceMonthGraph] = useState({
    series: [],
    options: {},
  });
  const [tradeDistributionGraph, setTradeDistributionGraph] = useState({
    series: [],
    options: {},
  });
  const [tradeDistributionHourGraph, setTradeDistributionHourGraph] = useState({
    series: [],
    options: {},
  });

  const [tradeDistributionByMonthGraph, setTradeDistributionByMonthGraph] =
    useState({
      series: [],
      options: {},
    });

  const [
    tradeDistributionByDurationGraph,
    setTradeDistributionByDurationGraph,
  ] = useState({
    series: [],
    options: {},
  });
  const [performanceDurationGraph, setPerformanceDurationGraph] = useState({
    series: [],
    options: {},
  });
  const [tradeDistributionByIntrDayGraph, setTradeDistributionByIntraDayGraph] =
    useState({
      series: [],
      options: {},
    });
  const [performanceIntraDayGraph, setPerformanceIntraDayGraph] = useState({
    series: [],
    options: {},
  });

  const getPerformanceByDayOfWeek = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        "/performance/detail/daytime/PerformanceDayOfWeek",
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      let seriesData = [];
      let optionData = [];
      const dayNames = {
        Sunday: "Sun",
        Monday: "Mon",
        Tuesday: "Tue",
        Wednesday: "Wed",
        Thursday: "Thu",
        Friday: "Fri",
        Saturday: "Sat",
      };

      for (const date in data.weekData) {
        const day = date.split("/")[0];
        const abbrivatedDay = dayNames[day];
        optionData.push(abbrivatedDay);
        seriesData.push(data.weekData[date].netpl.toFixed(4));
      }
      setPerformanceGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxis: {
            // reversed: true,
          },
          xaxis: {
            categories: optionData,

            labels: {
              formatter: function (x) {
                return "$" + x.toFixed(0);
              },
            },
          },
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getPerformanceByHourOfDay = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        "/performance/detail/daytime/PerformanceHourOfDay",
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      const optionsData = [];
      const seriesData = [];

      const date = Object.keys(data)[0];

      data[date].trades.forEach((trade) => {
        optionsData.push(trade.hour);
        seriesData.push(trade.netpl.toFixed(4));
      });
      setPerformanceHourGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: optionsData,
            labels: {
              formatter: function (x) {
                return "$" + x.toFixed(0);
              },
            },
            // min:500
          },

          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxis: {
            tickAmount: 3,
          },
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getPerformanceByMonthOfYear = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        "/performance/detail/daytime/PerformanceByMonthOfYear",
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      const optionsData = [];
      const seriesData = [];

      data.forEach((item) => {
        optionsData.push(item.month);
        seriesData.push(item.totalNetpl.toFixed(4));
      });
      setPerformanceMonthGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: optionsData,
            labels: {
              formatter: function (x) {
                return "$" + x.toFixed(0);
              },
            },
            // min:500
          },

          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxis: {
            tickAmount: 3,
            // reversed: true,
          },
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getPerformanceByDuration = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/performance/detail/daytime/performanceByDuration/${(0, 0)}`,
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      let seriesData = [];
      seriesData.push(data.intraDayPerformance.toFixed(4));
      seriesData.push(data.multiDayPerformance.toFixed(4));
      setPerformanceDurationGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ["IntraDay", "MultiDay"],
            labels: {
              formatter: function (x) {
                return "$" + x.toFixed(0);
              },
            },
            // min:500
          },

          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxis: {
            tickAmount: 3,
            // reversed: true,
          },
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getPerformanceByIntraDayDuration = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/performance/detail/daytime/performanceByIntrdayDuration/${(0, 0)}`,
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      let seriesData = [];
      let optionsData = [];
      for (const key in data) {
        seriesData.push(data[key].toFixed(4));
        optionsData.push(key);
      }
      setPerformanceIntraDayGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: optionsData,
            labels: {
              formatter: function (x) {
                return "$" + x.toFixed(0);
              },
            },
            // min:500
          },

          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxis: {
            tickAmount: 3,
          },
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getTradeDistributionByDayOfWeek = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/performance/detail/daytime/tradeDistributionByDayOfWeek`,
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      let seriesData = [];
      let optionData = [];
      const dayNames = {
        Sunday: "Sun",
        Monday: "Mon",
        Tuesday: "Tue",
        Wednesday: "Wed",
        Thursday: "Thu",
        Friday: "Fri",
        Saturday: "Sat",
      };

      for (const date in data.weekData) {
        const day = date.split("/")[0];
        const abbrivatedDay = dayNames[day];
        optionData.push(abbrivatedDay);
        seriesData.push(data.weekData[date].totalTrade);
      }

      setTradeDistributionGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          xaxis: {
            categories: optionData,
          },
          // grid: {
          //   yaxis: {
          //     lines: {
          //       show: false
          //     }
          //   },
          //   xaxis: {
          //     lines: {
          //       show: true
          //     }
          //   }
          // },
          yaxis: {
            tickAmount: 3,
          },
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getTradeDistributionByHourOfDay = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/performance/detail/daytime/tradeDistributionByHourOfDay`,
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      const optionsData = [];
      const seriesData = [];

      const date = Object.keys(data)[0];

      data[date].trades.forEach((trade) => {
        optionsData.push(trade.hour);
        seriesData.push(trade.totalTrade);
      });
      setTradeDistributionHourGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 350,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
              barWidth: "10%",
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: optionsData,
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxix: {
            tickAmount: 3,
          },
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getTradeDistributionByMonthOfYear = async () => {
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', `/performance/detail/daytime/tradeDistributionByMonthOfYear`, { 'x-usertoken': authToken }, null)
      const data = res;
      const optionsData = [];
      const seriesData = [];
      data.forEach((item) => {
        optionsData.push(item.month);
        seriesData.push(item.totalTrades.toFixed(4));
      });
      setTradeDistributionByMonthGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
              stacked: true,
            },
            type: "bar",
            // height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
              // barHeight: '80%'
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: optionsData,
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxis: {
            tickAmount: 3,
          },
        },
      });
    } catch (error) {
      console.log("Error",error)
    }
  };
  const getTradeDistributionByDuration = async () => {
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', `/performance/detail/daytime/tradeDistributionByDuration/${
        (0, 0)
      }`, { 'x-usertoken': authToken }, null)
      const data = res;
      let seriesData = [];
      seriesData.push(data.intraDay);
      seriesData.push(data.multiDay);
      console.log(">>>>>>>>>>>", data);
      setTradeDistributionByDurationGraph({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
              stacked: true,
            },
            type: "bar",
            // height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
              // barHeight: '100%'
            },
          },

          fill: {
            colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ["IntraDay", "MultiDay"],
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxis: {
            tickAmount: 3,
          },
        },
      });
    } catch (error) {
      console.log("Error",error)
    }
  };
  const getTradeDistributionByIntraDayDuration = async () => {
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', `/performance/detail/daytime/tradeDistributionByIntradayDuration/${
        (0, 0)
      }`, { 'x-usertoken': authToken }, null)
      const data = res;
      let seriesData = [];
        let optionsData = [];
        for (const key in data) {
          seriesData.push(data[key]);
          optionsData.push(key);
        }
        setTradeDistributionByIntraDayGraph({
          series: [
            {
              data: seriesData,
            },
          ],
          options: {
            chart: {
              toolbar: {
                show: false,
                stacked: true,
              },
              type: "bar",
              // height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                distributed: true,
                horizontal: true,
                // barHeight: '100%'
              },
            },

            fill: {
              colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: optionsData,
            },
            grid: {
              yaxis: {
                lines: {
                  show: false,
                },
              },
              xaxis: {
                lines: {
                  show: true,
                },
              },
            },
            yaxis: {
              tickAmount: 3,
            },
          },
        });
    } catch (error) {
      console.log("Error",error)
    }
  };

  useEffect(() => {
    getPerformanceByDayOfWeek();
    getPerformanceByHourOfDay();
    getPerformanceByMonthOfYear();
    getPerformanceByDuration();
    getPerformanceByIntraDayDuration();
    getTradeDistributionByDayOfWeek();
    getTradeDistributionByHourOfDay();
    getTradeDistributionByMonthOfYear();
    getTradeDistributionByDuration();
    getTradeDistributionByIntraDayDuration();
  }, []);

  // styling
  const mainDiv = {
    padding: "25px 15px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };

  const gridItem = {
    border: `1px solid ${lightTheme.borderColor}`,
    borderRadius: "8px",
    padding: "10px 10px",
    backgroundColor: `${lightTheme.performanceComponentColor}`,
  };
  const graphTilte = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "16px",
    marginLeft: "20px",
    marginTop: "10px",
  };

  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Trade Distribution by day of week</p>
            <Chart
              options={tradeDistributionGraph.options}
              series={tradeDistributionGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Performance by day of week</p>
            <Chart
              options={performanceGraph.options}
              series={performanceGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={{
                color: `${lightTheme.headingTextColor}`,
                fontWeight: "500",
                fontSize: "16px",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              Trade Distribution by Hour of Day
            </p>
            <Chart
              options={tradeDistributionHourGraph.options}
              series={tradeDistributionHourGraph.series}
              type="bar"
              height={600}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={{
                color: `${lightTheme.headingTextColor}`,
                fontWeight: "500",
                fontSize: "16px",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              Performance by Hour of Day
            </p>
            <Chart
              options={performanceHourGraph.options}
              series={performanceHourGraph.series}
              type="bar"
              height={600}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Trade Distribution By Month Of Year</p>
            <Chart
              options={tradeDistributionByMonthGraph.options}
              series={tradeDistributionByMonthGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Performance By Month Of Year</p>
            <Chart
              options={performanceMonthGraph.options}
              series={performanceMonthGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Trade Distribution By Duration</p>
            <Chart
              options={tradeDistributionByDurationGraph.options}
              series={tradeDistributionByDurationGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Performance By Duration</p>
            <Chart
              options={performanceDurationGraph.options}
              series={performanceDurationGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Trade Distribution By Intraday Duration</p>
            <Chart
              options={tradeDistributionByIntrDayGraph.options}
              series={tradeDistributionByIntrDayGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={graphTilte}>Performance By Intraday Duration</p>
            <Chart
              options={performanceIntraDayGraph.options}
              series={performanceIntraDayGraph.series}
              type="bar"
              height={350}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DaysAndTimes;
