import React, { useState } from "react";
import "./dailyCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ModeChange from "../../../Theme/ChangeMode";
import { useSelector } from "react-redux";
// import {lightTheme} from '../../../Theme/theme'

const DailyCalendar = ({ arrow }) => {
  const lightTheme = ModeChange();
  const mode=useSelector(state=>state.mode)

  // console.log('arrow value',arrow)
  const [date, setDate] = useState(new Date());

  const getDate = (date) => {
    setDate(date);
    console.log(date);
  };
  return (
    <div
      className="dailyCalendarMain"
      style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
    >
      <Calendar
        style={{backgroundColor:`${lightTheme.ComponentBackgroundColor}`}}
        onChange={getDate}
        value={date}
        prev2Label={null}
        next2Label={null}
        // prevLabel={null}
        // nextLabel={null}
        selectRange={true}
        className={mode? "react-calendarDaily":"dailyCalendar"}
        tileClassName={"second"}

      />
    </div>
  );
};

export default DailyCalendar;
