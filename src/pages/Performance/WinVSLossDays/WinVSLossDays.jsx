import React, { useState } from 'react'
import './WinVSLossDays.css'
import { lightTheme } from '../../../Theme/theme'
import {Box} from '@mui/material'
import WinLossAggregatePL from './AggregatePL/WinLossAggregatePL'
import DaysAndTimes from './DaysAndTimes/DaysAndTimes'
import PriceVolume from './PriceVolume/PriceVolume'
import Instrument from './Instrument/Instrument'
import MarketBehaviour from './Marketbehaviour/MarketBehaviour'
import WinLossExpectation from './WinLossExpectation/WinLossExpectation'
import Liquidity from './Liquidity/Liquidity'
  
  
  
  

const WinVSLossDays = () => {

    const[showComponent,setShowComponent]=useState('0')








  return (
      <div>
          <Box>
          <div
          className="winlossMain"
          style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
        >
          <div className="winlossBtns">
            <p style={{fontSize:'18px',fontWeight:'500',color:`${lightTheme.textColor}`,textAlign:'center',padding:'5px 0'}}>These reports are only available for silver and gold users.<span style={{color:`${lightTheme.headingTextColor}`}}>Upgrade now!</span></p>
            <div
              style={{
                backgroundColor: `${lightTheme.performanceButtonsBackground}`,
              }}
              className="winlossBTnDiv"
            >
              <button
                className="left-rounded"
                style={
                  showComponent == "0"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("0")}
              >
                Aggregate P&L
              </button>
              <button
                className="winlossBtn"
                style={
                  showComponent == "1"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("1")}
              >
                Per-Trade Average
              </button>
              <button
                className="winlossBtn"
                style={
                  showComponent == "2"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("2")}
              >
                Days/Times
              </button>
              <button
                className="winlossBtn"
                style={
                  showComponent == "3"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("3")}
              >
                Price/Volume
              </button>
              <button
                className="winlossBtn"
                style={
                  showComponent == "4"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("4")}
              >
                Instrument
              </button>
              <button
                className="winlossBtn"
                style={
                  showComponent == "5"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("5")}
              >
                Market Behaviour
              </button>
              <button
                className="winlossBtn"
                style={
                  showComponent == "6"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("6")}
              >
                Wins/Loss/Expectation
              </button>
              <button
                className="right-rounded"
                style={
                  showComponent == "7"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("7")}
              >
                Liquidity
              </button>
            </div>
          </div>
              </div>
              <div>
                  {
                      (showComponent=='0')? <WinLossAggregatePL/> : null
                  }
                  {
                      (showComponent=='2')? <DaysAndTimes/> : null
                  }
                  {
                      (showComponent=='3')? <PriceVolume/> : null
                  }
                  {
                      (showComponent=='4')? <Instrument/> : null
                  }
                  {
                      (showComponent=='5')? <MarketBehaviour/> : null
                  }
                  {
                      (showComponent=='6')? <WinLossExpectation/> : null
                  }
                  {
                      (showComponent=='7')? <Liquidity/> : null
                  }
              </div>
          </Box>
          
    </div>
  )
}

export default WinVSLossDays