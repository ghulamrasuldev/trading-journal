import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
// import { lightTheme } from "../../../../Theme/theme";
import Chart from "react-apexcharts";
import ModeChange from "../../../../Theme/ChangeMode";
import axios from 'axios'
import {base_Url} from '../../../../Config/Config'
import { useEffect } from "react";
import apiService from "../../../../services/api/api";

const PriceVolume = () => {
  const lightTheme=ModeChange();
 
  const [performancePriceGraph, setPerformancePriceGraph] = useState({
    series:[],
    options:{}
  });
  const [performanceVolumeTradedGraph, setPerformanceVolumeTradedGraph] =
    useState({
      series: [],
      options:{}
    })
    const [tradeDistributionPriceGraph, setTradeDistributionPriceGraph] =
    useState({
      series:[],
      options:{},
    });
  const [distributionVolumeTradedGraph, setDistributionVolumeTradedGraph] =
    useState({
      series:[],
      options:{}
    });
  ;
  const [tradeDistributionInPriceRangeGraph, setTradeDistributionInPriceRange] =
    useState({
      series: [
        {
          data: [20, 90, 50, 30, , , , 5],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          type: "bar",
          height: 100,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            distributed: true,
            horizontal: true,
          },
        },

        fill: {
          colors: [
            "#FF696D",
            "#5D45DB",
            "#6CB9AD",
            "#5D45DB",
            "#5D45DB",
            "#5D45DB",
            "#5D45DB",
            "#EDC161",
          ],
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
          categories: [
            "$0-$0.99",
            "$0.10-$0.24",
            "$0.25-$0.49",
            "$0.50-$0.99",
            "$1-$4.00",
            "$5-$9.99",
            "$10-$24.99",
            "$25-and over",
          ],
        },

        yaxis: {
          tickAmount: 3,
        },
      },
    });
  const [
    tradePerformanceInPriceRangeGraph,
    setTradePerformanceInPriceRangeGraph,
  ] = useState({
    series: [
      {
        data: [10, 90, 50, 30, -5, , 20],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 250,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: [
          "#6CB9AD",
          "#EDC161",
          "#6CB9AD",
          "#689BE2",
          "#FF696D",
          "#5D45DB",
          "#EDC161",
        ],
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
          labels: {
            formatter: function (x) {
              return "$" + x.toFixed(0);
            },
          },
        },
      },
      xaxis: {
        categories: [
          "$0-$0.99",
          "$0.10-$0.24",
          "$0.25-$0.49",
          "$0.50-$0.99",
          "$1-$4.00",
          "$5-$9.99",
          "$10-$24.99",
          "$25-and over",
        ],
        labels: {
          formatter: function (x) {
            return "$" + x.toFixed(0);
          },
        },
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });


  const getPerformanceByPrice = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/performance/detail/pricevolume/performanceByPrice/${(0, 0)}`,
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
      setPerformancePriceGraph({
        series: [
        {
          data:seriesData
        },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 250,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },
    
          fill: {
            colors: [
              "#EDC161",
              "#6CB9AD",
              "#6CB9AD",
              "#FF696D",
              "#5D45DB",
              "#689BE2",
            ],
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
              labels: {
                formatter: function (x) {
                  return "$" + x.toFixed(0);
                },
              },
            },
          },
          xaxis: {
            categories:optionsData,
            labels: {
              formatter: function (x) {
                return "$" + x.toFixed(0);
              },
            },
          },
    
          yaxis: {
            tickAmount: 3,
          },
        },
      })
    } catch (error) {
      console.log("Error",error)
    }
  }
  const getPerformanceByVolume = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/performance/detail/pricevolume/performanceByVolume/${(0, 0)}`,
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
      setPerformanceVolumeTradedGraph({
        series: [
        {
          data:seriesData
        },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 250,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },
  
          fill: {
            colors: [
              "#FF696D",
              "#5D45DB",
              "#EDC161",
              "#6CB9AD",
              "#6CB9AD",
              "#689BE2",
            ],
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
            categories:optionsData,
            labels: {
              formatter: function (x) {
                return "$" + x.toFixed(0);
              },
            },
          },
  
          yaxis: {
            tickAmount: 3,
          },
        },
      })
    } catch (error) {
      console.log("Error",error)
    }
  }
  const getTradeDistributionByVolume = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/performance/detail/pricevolume/tradeDistributionByVolume/${(0, 0)}`,
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
      setDistributionVolumeTradedGraph({
        series: [
          {
            data:seriesData
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 100,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },
  
          fill: {
            colors: [
              "#FF696D",
              "#5D45DB",
              "#EDC161",
              "#6CB9AD",
              "#6CB9AD",
              "#689BE2",
            ],
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
            categories:optionsData,
          },
  
          yaxis: {
            tickAmount: 3,
          },
        },
      })
    } catch (error) {
      console.log("Error",error)
    }
  }
  const getTradeDistributionByPrice = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/performance/detail/pricevolume/tradeDistributionByPrice/${(0, 0)}`,
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
      setTradeDistributionPriceGraph({
        series: [
          {
            data:seriesData
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            height: 100,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              distributed: true,
              horizontal: true,
            },
          },
  
          fill: {
            colors: [
              "#EDC161",
              "#6CB9AD",
              "#6CB9AD",
              "#FF696D",
              "#5D45DB",
              "#689BE2",
            ],
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
            categories:optionsData,
          },
  
          yaxis: {
            tickAmount: 3,
          },
        },
      })
    } catch (error) {
     console.log("Error",error)
    }
  }


  useEffect(() => {
    getPerformanceByPrice();
    getPerformanceByVolume();
    getTradeDistributionByVolume();
    getTradeDistributionByPrice();
  },[])

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
    backgroundColor:`${lightTheme.performanceComponentColor}`
  };
  const graphTilte={
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "16px",
    marginLeft: "20px",
    marginTop: "10px",
  }

  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Trade Distribution by Price
            </p>
            <Chart
              options={tradeDistributionPriceGraph.options}
              series={tradeDistributionPriceGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Performance by Price
            </p>
            <Chart
              options={performancePriceGraph.options}
              series={performancePriceGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Distribution By Volume Traded
            </p>
            <Chart
              options={distributionVolumeTradedGraph.options}
              series={distributionVolumeTradedGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Performance By Volume Traded
            </p>
            <Chart
              options={performanceVolumeTradedGraph.options}
              series={performanceVolumeTradedGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Trade Distribution By In-Trade Price Range
            </p>
            <Chart
              options={tradeDistributionInPriceRangeGraph.options}
              series={tradeDistributionInPriceRangeGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p
              style={graphTilte}
            >
              Performance By In-Trade Price Range
            </p>
            <Chart
              options={tradePerformanceInPriceRangeGraph.options}
              series={tradePerformanceInPriceRangeGraph.series}
              type="bar"
              height={300}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PriceVolume;
