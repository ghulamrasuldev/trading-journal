import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import { lightTheme } from '../../../../Theme/theme'
import Chart from 'react-apexcharts'


const DaysAndTimes = () => {


  const [tradeDistributionGraph, setTradeDistributionGraph] = useState({
    series: [{
      data: [4,7,3,8,9]
    }],
    options: {
      
      chart: {
        toolbar: {
          show:false
        },
        type: 'bar',
        height: 350
      },
      plotOptions: {
        
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        }
      },
      
      fill: {
       colors:['#EDC161','#6CB9AD','#FF696D','#5D45DB','#689BE2'],
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: ['Mon','Tue','Wed','Thus','Fri'],
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
        tickAmount:3
      }
    },
  
  
  })
  const [performanceGraph, setPerformanceGraph] = useState({
    series: [{
      data: [4,7,3,8,9]
    }],
    options: {
      
      chart: {
        toolbar: {
          show:false
        },
        type: 'bar',
        height: 350
      },
      plotOptions: {
        
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        }
      },
      
      fill: {
       colors:['#EDC161','#6CB9AD','#FF696D','#5D45DB','#689BE2'],
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: true,
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri'],
        
          labels: {
            formatter: function (x) {
              return "$" + x.toFixed(0);
            },
          },
      },
    },
  
  
  })
  const [tradeDistributionHourGraph, setTradeDistributionHourGraph] = useState({
    series: [{
      data: [4,10, ,15, ,22,9, , , ,12, , , , , , , ,]
    }],
    options: {
      
      chart: {
        toolbar: {
          show:false
        },
        type: 'bar',
        height: 350
      },
      plotOptions: {
        
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        }
      },
      
      fill: {
       colors:['#EDC161','#6CB9AD','#FF696D','#5D45DB','#689BE2'],
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900],
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxix: {
        tickAmount:3
      }
    },
  
  
  })
  const [performanceHourGraph, setPerformanceHourGraph] = useState({
    series: [{
      data: [4,10, ,15, ,22,-9, ,3, ,12, , , , , , , ,]
    }],
    options: {
      
      chart: {
        toolbar: {
          show:false
        },
        type: 'bar',
        height: 350
      },
      plotOptions: {
        
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        }
      },
      
      fill: {
       colors:['#EDC161','#6CB9AD','#FF696D','#5D45DB','#689BE2'],
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900],
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
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        tickAmount: 3,
        
      },
     
    },
  
  
  })
  const [tradeDistributionByDurationGraph, setTradeDistributionByDurationGraph] = useState({
    series: [{
      data: [4,9,3, ,5, , ,7, ,4 , ,9]
    }],
    options: {
      
      chart: {
        toolbar: {
          show: false,
          stacked: true
        },
        type: 'bar',
        // height: 350
      },
      plotOptions: {
        
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
          // barHeight: '80%'
        }
      },
      
      fill: {
       colors:['#EDC161','#6CB9AD','#FF696D','#5D45DB','#689BE2'],
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        tickAmount:3
      }
    },
  
  
  })
  const [performanceMonthGraph, setPerformanceMonthGraph] = useState({
    series: [{
      data: [4,,,,,3,9,5,,,]
    }],
    options: {
      
      chart: {
        toolbar: {
          show:false
        },
        type: 'bar',
        height: 350
      },
      plotOptions: {
        
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        }
      },
      
      fill: {
       colors:['#EDC161','#6CB9AD','#FF696D','#5D45DB','#689BE2'],
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        // labels: {
        //   formatter: function (x) {
        //     return "$" + x.toFixed(0);
        //   },
        // },
        // min:500
      },

      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        tickAmount: 3,
        reversed: true,
        
      },
     
    },
  
  
  })
  const [tradeDistributionByDurationChangeGraph, setTradeDistributionByDurationChangeGraph] = useState({
    series: [{
      data: [4,9,3, ,5, , ,7, ,4 , ,9]
    }],
    options: {
      
      chart: {
        toolbar: {
          show: false,
          stacked: true
        },
        type: 'bar',
        // height: 350
      },
      plotOptions: {
        
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
          // barHeight: '80%'
        }
      },
      
      fill: {
       colors:['#EDC161','#6CB9AD','#FF696D','#5D45DB','#689BE2'],
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        tickAmount:3
      }
    },
  
  
  })





  // styling
  const mainDiv = {
    padding: "25px 15px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  }

  const gridItem = {
    border: `1px solid ${lightTheme.borderColor}`,
    borderRadius: '8px',
    padding:'10px 10px'
  }

  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{color:`${lightTheme.headingTextColor}`,fontWeight:'500',fontSize:'16px',marginLeft:'20px',marginTop:'10px'}}>Trade Distribution by day of week</p>
          <Chart options={tradeDistributionGraph.options} series={tradeDistributionGraph.series} type="bar" height={300} />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{color:`${lightTheme.headingTextColor}`,fontWeight:'500',fontSize:'16px',marginLeft:'20px',marginTop:'10px'}}>Performance by day of week</p>
          <Chart options={performanceGraph.options} series={performanceGraph.series} type="bar" height={300} />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{ color: `${lightTheme.headingTextColor}`, fontWeight: '500', fontSize: '16px', marginLeft: '20px', marginTop: '10px' }}>Trade Distribution by Hour of Day</p>
            <Chart options={tradeDistributionHourGraph.options} series={tradeDistributionHourGraph.series} type="bar" height={600} />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{ color: `${lightTheme.headingTextColor}`, fontWeight: '500', fontSize: '16px', marginLeft: '20px', marginTop: '10px' }}>Performance by Hour of Day</p>
            <Chart options={performanceHourGraph.options} series={performanceHourGraph.series} type="bar" height={600} />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
          <p style={{color:`${lightTheme.headingTextColor}`,fontWeight:'500',fontSize:'16px',marginLeft:'20px',marginTop:'10px'}}>Trade Distribution By Duration</p>
          <Chart options={tradeDistributionByDurationGraph.options} series={tradeDistributionByDurationGraph.series} type="bar" height={350} />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
          <p style={{color:`${lightTheme.headingTextColor}`,fontWeight:'500',fontSize:'16px',marginLeft:'20px',marginTop:'10px'}}>Performance by month of year</p>
          <Chart options={performanceMonthGraph.options} series={performanceMonthGraph.series} type="bar" height={350} />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
          <p style={{color:`${lightTheme.headingTextColor}`,fontWeight:'500',fontSize:'16px',marginLeft:'20px',marginTop:'10px'}}>Trade Distribution By Duration*</p>
          <Chart options={tradeDistributionByDurationChangeGraph.options} series={tradeDistributionByDurationChangeGraph.series} type="bar" height={350} />
          </Grid>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
          <p style={{color:`${lightTheme.headingTextColor}`,fontWeight:'500',fontSize:'16px',marginLeft:'20px',marginTop:'10px'}}>Performance by month of year</p>
          <Chart options={performanceMonthGraph.options} series={performanceMonthGraph.series} type="bar" height={350} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default DaysAndTimes