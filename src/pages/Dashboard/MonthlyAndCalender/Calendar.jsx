import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import "./calendar.css";
import ModeChange from "../../../Theme/ChangeMode";
import { useSelector } from "react-redux";
// import {lightTheme} from '../../../Theme/theme'

const CalendarComponent = () => {
  const lightTheme = ModeChange();
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
      profit: "true",
      value: "$212",
      trades: "2 Trades",
    },
    {
      profit: "true",
      value: "$312",
      trades: "3 Trades",
    },
    {
      profit: "false",
      value: "$-212",
      trades: "2 Trades",
    },
    {
      profit: "false",
      value: "$-12",
      trades: "1 Trades",
    },
    {
      profit: "true",
      value: "$512",
      trades: "5 Trades",
    },
  ];

  const dateDiv = {
    backgroundColor: `${lightTheme.currentDateDiv}`,
    border: `1px solid ${lightTheme.dateBorderColor}`,
    width: '18%',
    marginBottom: '-10px',
    marginTop:'10px'
  };

  const mode = useSelector((state) => state.mode);

  // const tileClassName = ({ date, view }) => {
  //   // Add class to tiles in month view only
  //   if (view === 'month') {
  //     // Add custom class for styling
  //     return date.getDay() === 0 ? 'yellow' : 'purple';
  //   }
  // };
  // const monthHeader="monthView"
  return (
    <div
      className="calendarMain"
      style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
    >
      <div
        className="calendarDiv"
        style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}`,border:'1px solid red' }}
      >
        <div className="dateDiv" style={dateDiv}>
          <CalendarMonthSharpIcon
            color={`${lightTheme.textColor}`}
            fontSize="small"
          />
          <p
            className="currentDate"
            style={{ color: `${lightTheme.textColor}` }}
          >
            {" "}
            {date.toDateString()}
          </p>
        </div>

        <Calendar
          // tileClassName={tileClassName}
          // monthHeaderClassName={monthHeader}
          onChange={getDate}
          value={date}
          prev2Label={null}
          next2Label={null}
          onClickDay={() => checkTradeFunc(1)}
          tileContent={({ activeStartDate, date, view }) => {
            return view === "month" ? (
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
          //   tileContent={({ date, view }) => view === 'day' &&
          //       mark.find(x=>x===4)? "profit": "loss"
          //   }
          //   tileClassName={({ date, view }) => view === 'month' &&
          //       mark? "tileContentProfit":"tileContentLoss"
          //   }

          className={mode ? "react-calendarDashboard" : "calendarDashboard"}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
