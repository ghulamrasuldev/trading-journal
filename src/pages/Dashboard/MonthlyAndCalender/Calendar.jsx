import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import './calendar.css';
import { lightTheme } from '../../../Theme/theme';

const CalendarComponent = () => {
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState(new Date());

  const getDate = (date) => {
    setDate(date);
  };
  var mark = false;

  const checkTradeFunc = (val) => {
    let checkDate = date;
    {
      val === 1 ? setCheck(!check) : null;
    }
    mark = true;
  };

  const profitLossData = [
    {
      profit: 'true',
      value: '$212',
      trades: '2 Trades',
    },
    {
      profit: 'true',
      value: '$312',
      trades: '3 Trades',
    },
    {
      profit: 'false',
      value: '$-212',
      trades: '2 Trades',
    },
    {
      profit: 'false',
      value: '$-12',
      trades: '1 Trades',
    },
    {
      profit: 'true',
      value: '$512',
      trades: '5 Trades',
    },
  ];

  return (
    <div className="calendarMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
      <div className="calendarDiv">
        <div className="dateDiv">
          <CalendarMonthSharpIcon color={`${lightTheme.textColor}`} fontSize="small" />
          <p className="currentDate" style={{ color: `${lightTheme.textColor}` }}>
            {date.toDateString()}
          </p>
        </div>

        <Calendar
          onChange={getDate}
          value={date}
          prev2Label={null}
          next2Label={null}
          onClickDay={() => checkTradeFunc(1)}
          tileContent={({ activeStartDate, date, view }) => {
            return view === 'month' ? (
              <div className="tileContent">
                <p>
                  {/* {profitLossData.map((val, index) => {
                    return <p>{val.value}</p>;
                  })} */}
                </p>
                <p>{profitLossData.trades}</p>
              </div>
            ) : null;
          }}
          className="calendar"
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
