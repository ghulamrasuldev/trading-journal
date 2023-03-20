import React,{useState} from "react";
import "./MonthlyGraph.css";
import { Divider } from "@mui/material";
import Chart from "react-apexcharts";
import {lightTheme} from '../../../Theme/theme'


const MonthlyGraph = () => {

    const [monthlyGraph, setMonthlyGraph] = useState({
        series: [{
            data: [1100, 1500, 700,30, 1003, 2000,1110,900,1700]
          }
        ],
        options: {
            colors: [`${lightTheme.greenAreaGraph}`],
            chart: {
                height: 380,
                type: 'area',
                stacked: false,
                toolbar: {
                    show:false
                },
               
              },
              stroke: {
                curve: 'straight'
              },
              xaxis: {
                  categories: ['5 Nov','10 Nov','15 Nov','20 Nov','25 Nov','30 Nov','5 Dec','10 Dec','15 Dec'], 
            },
            yaxis: {
                min: 0,
                max: 2500,
                tickAmount:5
              },
            grid: {
                position: 'front',
                xaxis: {
                    lines: {
                      show: true
                    }
                  },
                yaxis: {
                    lines: {
                      show: true,
                    }
                  },
              },
              tooltip: {
                followCursor: false
            },
            dataLabels: {
                enabled: false  
              },
              fill: {
                opacity: 1,
            },
          
        }
      
    })


  return (
    <div className="monthlyGrpahMain" style={{backgroundColor:`${lightTheme.ComponentBackgroundColor}`}}>
      <div className="dailyAndMonthlyDiv">
        <p className="dailyM" style={{color:`${lightTheme.headingTextColor}`}}>Daily</p>
        <Divider orientation="vertical" flexItem/>
        <p className="monthlyM" style={{color:`${lightTheme.textColor}`}}>Monthly</p>
          </div>
          <div className="monthlyGraphDiv">
              <Chart options={monthlyGraph.options} series={monthlyGraph.series}  type="area" height={400} />
          </div>
        
    </div>
  );
};

export default MonthlyGraph;
