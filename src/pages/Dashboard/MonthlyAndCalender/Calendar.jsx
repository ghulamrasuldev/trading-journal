import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import "./calendar.css";
import ModeChange from "../../../Theme/ChangeMode";
import { useSelector } from "react-redux";
import apiService from "../../../services/api/api";

const CalendarComponent = () => {
  const lightTheme = ModeChange();
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([]);

  const getData = async () => {
    const authToken = localStorage.getItem("AuthToken");
    const response = await apiService(
      "get",
      "/dashboard/trade/calendar",
      { "x-usertoken": authToken },
      null
    );
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);


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


  const dateDiv = {
    backgroundColor: `${lightTheme.currentDateDiv}`,
    border: `1px solid ${lightTheme.dateBorderColor}`,
    width: "18%",
    marginBottom: "-10px",
    marginTop: "10px",
  };

  const mode = useSelector((state) => state.mode);

  
  return (
    <div
      className="calendarMain"
      style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
    >
      <div
        className="calendarDiv"
        style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
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
  onChange={getDate}
  value={date}
  prev2Label={null}
  next2Label={null}
  onClickDay={() => checkTradeFunc(1)}
  tileContent={({ date, view }) => {
    if (view === "month") {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      const dataForDate = data.find(
        (item) => item.closeDate === formattedDate
      );

      if (dataForDate) {
        return (
          <div className="tileContent">
            <p>${dataForDate&&dataForDate.netpl.toFixed(1)}</p>
            <p>{dataForDate&&dataForDate.volume}</p>
          </div>
        );
      }
    }

    return null;
  }}
  tileClassName={({ date, view }) => {
    if (view === "month") {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      const dataForDate = data.find((item) => item.closeDate === formattedDate);

      if (dataForDate) {
        return dataForDate.netpl >= 0 ? "tileContentProfit" : "tileContentLoss";
      }
    }

    return null;
  }}
  className={mode ? "react-calendarDashboard" : "calendarDashboard"}
/>



      
      </div>
    </div>
  );
};

export default CalendarComponent;
