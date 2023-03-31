import React, { useState } from 'react';
import './Detail.css';
import { lightTheme } from '../../../Theme/theme';
import { Box } from '@mui/material';
import AggregatePL from './AggredatePL/AggregatePL';
import PerTradeAverage from './PerTradeAverage/PerTradeAverage';
import DaysAndTimes from './DaysAndTimes/DaysAndTimes';
import PriceVolume from './PriceVolume/PriceVolume';
import Liquidity from './Liquidity/Liquidity';
import Instrument from './Instrument/Instrument';
import MarketBehaviour from './Marketbehaviour/MarketBehaviour';
import WinLossExpectation from './WinLossExpectation/WinLossExpectation';
import { useAtom } from 'jotai';
import { isOpenAtom } from '../../../atom/atom.js';
const Detail = () => {
  const [isOpen] = useAtom(isOpenAtom);
  const spacing = isOpen ? 1 : 6;

  const [showComponent, setShowComponent] = useState('0');

  // styling
  const selected = {
    backgroundColor: `${lightTheme.headingTextColor}`,
    color: `${lightTheme.whiteText}`,
  };
  const notSelected = {
    background: 'none',
    color: `${lightTheme.textColor}`,
  };

  return (
    <div>
      <Box>
        <div className="detailMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
          <div className="detailBtns">
            <p>Details</p>
            <div
              style={{
                backgroundColor: `${lightTheme.performanceButtonsBackground}`,
              }}
              className="detailBTnDiv"
            >
              <button
                className="left-rounded"
                style={showComponent == '0' ? selected : notSelected}
                onClick={() => setShowComponent('0')}
              >
                Aggregate P&L
              </button>
              <button
                className="detailBtn"
                style={showComponent == '1' ? selected : notSelected}
                onClick={() => setShowComponent('1')}
              >
                Per-Trade Average
              </button>
              <button
                className="detailBtn"
                style={showComponent == '2' ? selected : notSelected}
                onClick={() => setShowComponent('2')}
              >
                Days/Times
              </button>
              <button
                className="detailBtn"
                style={showComponent == '3' ? selected : notSelected}
                onClick={() => setShowComponent('3')}
              >
                Price/Volume
              </button>
              <button
                className="detailBtn"
                style={showComponent == '4' ? selected : notSelected}
                onClick={() => setShowComponent('4')}
              >
                Instrument
              </button>
              <button
                className="detailBtn"
                style={showComponent == '5' ? selected : notSelected}
                onClick={() => setShowComponent('5')}
              >
                Market Behaviour
              </button>
              <button
                className="detailBtn"
                style={showComponent == '6' ? selected : notSelected}
                onClick={() => setShowComponent('6')}
              >
                Wins/Loss/Expectation
              </button>
              <button
                className="right-rounded"
                style={showComponent == '7' ? selected : notSelected}
                onClick={() => setShowComponent('7')}
              >
                Liquidity
              </button>
            </div>
          </div>
        </div>
        <div>
          {showComponent == '0' ? <AggregatePL /> : null}
          {showComponent == '1' ? <PerTradeAverage /> : null}
          {showComponent == '2' ? <DaysAndTimes /> : null}
          {showComponent == '3' ? <PriceVolume /> : null}
          {showComponent == '4' ? <Instrument /> : null}
          {showComponent == '5' ? <MarketBehaviour /> : null}
          {showComponent == '6' ? <WinLossExpectation /> : null}
          {showComponent == '7' ? <Liquidity /> : null}
        </div>
      </Box>
    </div>
  );
};

export default Detail;
