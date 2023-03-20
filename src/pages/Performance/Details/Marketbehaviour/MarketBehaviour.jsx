import { Box, Grid } from '@mui/material'
import React,{useState} from 'react'
import { lightTheme } from '../../../../Theme/theme'
import Chart from 'react-apexcharts'

const MarketBehaviour = () => {


  const [tradeDistributionSYPMovement, settradeDistributionSYPMovement] = useState({
    series: [{
      data: [4,5,9,7, ,5]
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
        categories: ['less then -2%','-1% to -2%','0% to -1%','0% to +1%','+1% to +2%','Cover +2%'],
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
  const [performanceBySYPMovement, setPerformanceBySYPMovement] = useState({
    series: [{
      data: [-456,-512,-1229,-1722, ,2509]
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
        categories: ['less then -2%','-1% to -2%','0% to -1%','0% to +1%','+1% to +2%','Cover +2%'],
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
  const [tradeDistributionSYPOpeningGap, settradeDistributionSYPOpeningGap] = useState({
    series: [{
      data: [0,3,9,5,,,]
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
        categories: ['less then -2%','-1% to -2%','0% to -1%','0% to +1%','+1% to +2%','Cover +2%'],
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
  const [performanceBySYPOpeningGap, setPerformanceBySYPOpeningGap] = useState({
    series: [{
      data: [0,-512,-429,1722, , ,]
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
        categories: ['less then -2%','-1% to -2%','0% to -1%','0% to +1%','+1% to +2%','Cover +2%'],
        labels: {
          formatter: function (x) {
            return "$" + x.toFixed(0);
          },
        },
        // min:500
        // tickAmount: 3, 
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
      // yaxis: {
      //   tickAmount: 3,
        
      // },
     
    },
  
  
  })
  const [tradeDistributionSYPDay, settradeDistributionSYPDay] = useState({
    series: [{
      data: [0,9,5,,]
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
        categories: ['inside Range','Outside Range','Trend Up','Trend Down'],
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
  const [performanceBySYPDay, setperformanceBySYPDay] = useState({
    series: [{
      data: [0,-9,-5,,]
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
        categories: ['inside Range','Outside Range','Trend Up','Trend Down'],
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
            <p style={{ color: `${lightTheme.headingTextColor}`, fontWeight: '500', fontSize: '16px', marginLeft: '20px', marginTop: '10px' }}>Trade Distribution By SPY Movement</p>
            <Chart options={tradeDistributionSYPMovement.options} series={tradeDistributionSYPMovement.series} type="bar" height={350} />
          </Grid>
        <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{ color: `${lightTheme.headingTextColor}`, fontWeight: '500', fontSize: '16px', marginLeft: '20px', marginTop: '10px' }}>Performance By SPY Movement</p>
            <Chart options={performanceBySYPMovement.options} series={performanceBySYPMovement.series} type="bar" height={350} />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
        <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{ color: `${lightTheme.headingTextColor}`, fontWeight: '500', fontSize: '16px', marginLeft: '20px', marginTop: '10px' }}>Trade Distribution By SPY Opening Gap</p>
            <Chart options={tradeDistributionSYPOpeningGap.options} series={tradeDistributionSYPOpeningGap.series} type="bar" height={350} />
          </Grid>
        <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{ color: `${lightTheme.headingTextColor}`, fontWeight: '500', fontSize: '16px', marginLeft: '20px', marginTop: '10px' }}>Performance By SPY Opening Gap</p>
            <Chart options={performanceBySYPOpeningGap.options} series={performanceBySYPOpeningGap.series} type="bar" height={350} />
          </Grid>
        </Grid>
        <Grid container columnGap={4} rowGap={4} my={3}>
        <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{ color: `${lightTheme.headingTextColor}`, fontWeight: '500', fontSize: '16px', marginLeft: '20px', marginTop: '10px' }}>Trade Distribution By SPY Day Type</p>
            <Chart options={tradeDistributionSYPDay.options} series={tradeDistributionSYPDay.series} type="bar" height={350} />
          </Grid>
        <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <p style={{ color: `${lightTheme.headingTextColor}`, fontWeight: '500', fontSize: '16px', marginLeft: '20px', marginTop: '10px' }}>Performance By SPY Day Type</p>
            <Chart options={performanceBySYPDay.options} series={performanceBySYPDay.series} type="bar" height={350} />
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default MarketBehaviour