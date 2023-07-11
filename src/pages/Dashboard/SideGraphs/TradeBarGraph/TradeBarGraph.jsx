import React,{useEffect, useState} from 'react'
import './tradeBarGraph.css'
import Chart from "react-apexcharts";
import { Divider } from '@mui/material';
import ModeChange from '../../../../Theme/ChangeMode';
import axios from 'axios'
import apiService from '../../../../services/api/api';



const TradeBarGraph = () => {
  const lightTheme = ModeChange();
 
    const [toggle, setToggle] = useState('0');

  const [endPoint, setEndPoint] = useState('daily');
  
  const [tradesData, setTradesData] = useState();
  const [tradeChart, setTradeChart] = useState({
    series: [],
    options:{}
  })

  const getTradeData = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/dashboard/trade/totalTrades/${endPoint}`,
        { "x-usertoken": authToken },
        null
      );
      const data  = res;
      if (endPoint === 'daily') {
        const seriesData = [];
        const xaxisCategories = [];
        Object.keys(data).forEach((item) => {
          setTradesData(item);
          const trades = data[item].trades;
          const totalTrades=trades.map((trade)=>trade.totalTrade)
          const tradeTime = trades.map((trade) => trade.time)
          
          seriesData.push({
            data: totalTrades,
          });
  
          xaxisCategories.push(...tradeTime);
        })
        const maxVal = Math.max(...seriesData[0].data)
        setTradeChart({
          series: seriesData,
               options: {
          colors:[`${lightTheme.blueGraphColor}`],
          chart: {
            type: "bar",
            height: 350,
            toolbar: {
              show:false
            },
          },
          plotOptions: {
            bar: {
              border:15,
              vertical: true,
            },
          
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories:xaxisCategories
                 },
                 yaxis: { // Display 5 steps on the y-axis
                   max: maxVal + 1, // Maximum value on the y-axis
                  //  labels: {
                  //    formatter: (value) => Math.floor(value), // Customize label format if needed
                  //  },
          }
        },
        })
      }
      if (endPoint === 'weekly' || endPoint === 'monthly') {
        
        const dates = Object.keys(data);
        const totalTrade = Object.values(data).map((trade) => trade.totalTrade);
       

        setTradeChart({
          series: [
            {
            data:totalTrade
            },
          ],
          options: {
            colors:[`${lightTheme.blueGraphColor}`],
            chart: {
              type: "bar",
              height: 200,
              toolbar: {
                show:false
              },
            },
            plotOptions: {
              bar: {
                border:15,
                vertical: true,
              },
            
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories:dates
            },
          },
        })


      }
    } catch (error) {
      console.log('Error',error)
    }
  }
  

  useEffect(()=> {
    getTradeData();
  }, [endPoint])
  
  
    const graphTitle = {
      color: `${lightTheme.lightDarkBlue}`,
      fontWeight: "500",
      fontSize: "16px",
      padding: '0 10px',
      cursor:'pointer'
    };
    const graphTitleB = {
      color: `${lightTheme.textColor}`,
      fontWeight: "500",
      fontSize: "16px",
      padding: '0 10px',
      cursor:'pointer'
  };
  
  const filtersAndDate = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap:'wrap'
  }
  
  
  return (
    <div
      className="tradeBarGraphMain"
      style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}`, marginTop: '30px' }}
    >
      <div style={filtersAndDate}>

     
      <div className="tradeDiv">
        <p style={(toggle==='0')?graphTitle:graphTitleB} onClick={() => {
          setEndPoint('daily')
          setToggle('0')
        }}>
          Daily
        </p>
        <Divider orientation="vertical" flexItem />
        <p  style={(toggle==='1')?graphTitle:graphTitleB} onClick={() => {
          setEndPoint('weekly')
          setToggle('1')
        }}>
          Weekly
        </p>
        <Divider orientation="vertical" flexItem />
        <p  style={(toggle==='2')?graphTitle:graphTitleB} onClick={() => {
          setEndPoint('monthly')
          setToggle('2')
        }}>
          Monthly
        </p>
      </div>
      <div style={{padding:'0 10px'}}>{(endPoint === 'daily') && tradesData && <p>{tradesData}</p>}</div>
      </div>
    <div className="tradeChart">
      <Chart
        options={tradeChart.options}
        series={tradeChart.series}
        type="bar"
        height={310}
      />
        </div>
        </div>
  );
};

export default TradeBarGraph;
