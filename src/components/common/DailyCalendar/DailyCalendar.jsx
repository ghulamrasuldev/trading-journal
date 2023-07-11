import React, { useState } from "react";
import "./dailyCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import ModeChange from "../../../Theme/ChangeMode";
import { actionCreator } from "../../../Redux/AllAccess";

const DailyCalendar = () => {
  const lightTheme = ModeChange();
  const mode = useSelector((state) => state.mode);

  const dispatch = useDispatch();
  const { setFormattedDate } = bindActionCreators(actionCreator, dispatch);

  const getDate = (date) => {
    const regex = /^(\w{3}) (\w{3}) (\d{2}) (\d{4}).*$/;
    const monthMap = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    const dateString = date.toString();
    const formattedDate = dateString.replace(regex, (match, p1, p2, p3, p4) => {
      return `${p3}-${monthMap[p2]}-${p4}`;
    });
    setFormattedDate(formattedDate);
  };
  return (
    <div
      className="dailyCalendarMain"
      style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
    >
      <Calendar
        style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
        onChange={getDate}
        // value={date}
        value={new Date()}
        prev2Label={null}
        next2Label={null}
        // prevLabel={null}
        // nextLabel={null}
        selectRange={true}
        className={mode ? "react-calendarDaily" : "dailyCalendar"}
        tileClassName={"second"}
      />
    </div>
  );
};

export default DailyCalendar;
