import React from 'react'
import './Trade.css'
import NavBar from '../../../components/NavBar/NavBar'
import { Box, Grid,Divider,Rating,Slider} from '@mui/material'
import EyeView from '../../../assets/EyeView.png'
import Select from 'react-select'
import { RxCross2 } from 'react-icons/rx'
// import { lightTheme } from '../../../Theme/theme'
import RuningPlAndImg from './RunningPLandImage/RuningPlAndImg'
import TradeTable from './TradeTable/TradeTable'
import TextEditor from './TextEditor/TextEditor'
import ModeChange from '../../../Theme/ChangeMode'
import TradingViewWidget from '../../TradingViewChart/tradingViewChart'

const Trade = () => {


  const lightTheme = ModeChange();

// styling
  const mainTradeDiv = {
    padding: "30px 25px",
    backgroundColor:`${lightTheme.PageBackgroundColor}`,
    
  }
  const mainTradeGrid = {
    backgroundColor:`${lightTheme.ComponentBackgroundColor}`,
    boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "10px",
    marginTop:'25px'
  }
  const sliderStyle = {
    width: "125px",
    // border:'1px solid black'
    color: `${lightTheme.sliderColor}`,
  }

  const setupTab=[1,2,3,4,5]

  return (
    <div>
      <Box sx={mainTradeDiv}>
        <NavBar name={"Trade"} />
        <Grid container justifyContent="space-between" rowGap={5} sx={mainTradeGrid}>
          <Grid item lg={3.5} md={3} sm={12}>
            <div className="tradeGraphOptions">
              <div className="optionDiv" style={{backgroundColor:`${lightTheme.hoverColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.headingTextColor}`}}>Net P&L</p>
                <div style={{display:'flex'}}>
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.headingTextColor}`}}>$1,642.36 </p>
                  <img src={EyeView} alt="eyeIcon" height={15} style={{color:`${lightTheme.headingTextColor}`}} />
                </div>
              
                </div>
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500" ,color:`${lightTheme.textColor}`}}>Option Traded</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.textColor}`}}>10 </p>
                </div>
              </div>
          {/* <Divider /> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Commissions & Fees</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.textColor}`}}>$6.5</p>    
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}} >Net ROI</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.profit}`}}>9.3%</p>
                  
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Gross P&L</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.profit}`}}>$1,642.36 </p>
                  
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Adjusted cost</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',border:`1px solid ${lightTheme.tradeBorderColor}`,padding:'10px 15px',borderRadius:'8px',color:`${lightTheme.textColor}`}}>$1,64</p> 
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Profit Target</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',border:`1px solid ${lightTheme.tradeBorderColor}`,padding:'10px 15px',borderRadius:'8px',color:`${lightTheme.textColor}`}}>$1,64</p>                
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Stop Loss</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.loss}`}}>-$1,64</p>
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Initial Target</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.loss}`}}>-$1,642</p>
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Traid Risk</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.textColor}`}}>-$0.46R</p>
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Planned R-Multiple</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.textColor}`}}>$132R</p>
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Relized R-Multiple</p>
                <div >
                <p style={{fontWeight:"500",marginRight:'5px',color:`${lightTheme.textColor}`}}>$1,642</p>
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Setups</p>
                <div style={{ border:`1px solid ${lightTheme.tradeBorderColor}`, padding: '5px',display:'flex',alignItems:'center',borderRadius:'8px',color:`${lightTheme.textColor}`}}>
                  {
                    setupTab.slice(0,2).map((tab, index) => {
                      return (
                        <p className='setupTabs' style={{backgroundColor:`${lightTheme.lightDarkBlue}`,color:`${lightTheme.whiteText}`}}>Setup <RxCross2 /></p>
                      )
                    })
                  }
                  <p style={{color:`${lightTheme.textColor}`}}>+{setupTab.length-2}</p>
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Mistake</p>
                <div >
                    <Select placeholder="Add Tags"/>
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Custom</p>
                <div >
                <Select placeholder="Add Tags"/>
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Trade Scale</p>
                <div >
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={sliderStyle} />
                </div>
              </div>
          {/* <Divider/> */}
              <div className="option" style={{borderBottom:`1px solid ${lightTheme.tradeBorderColor}`}}>
                <p style={{fontWeight:"500",color:`${lightTheme.textColor}`}}>Trade Rating</p>
                <div >
                  <Rating name="read-only" value={3} readOnly color={`${lightTheme.headingTextColor}`} />
                </div>
              </div>
          {/* <Divider/> */}
          </div>
          </Grid>
          <Grid item lg={8} md={8} sm={12} >
              <TradingViewWidget/>
          </Grid>
        </Grid>
        <RuningPlAndImg />
        <TradeTable />
        <TextEditor/>
      </Box>
    </div>
  )
}

export default Trade