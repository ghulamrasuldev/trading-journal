import React,{useState} from 'react'
import './dailyCalendar.css'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {lightTheme} from '../../../Theme/theme'

const DailyCalendar = ({ arrow }) => {
  console.log('arrow value',arrow)
    const [date, setDate] = useState(new Date());

    const getDate = (date) => {
      setDate(date);
      console.log(date)
    };
  return (
      <div className='dailyCalendarMain' style={{backgroundColor:`${lightTheme.ComponentBackgroundColor}`}}>
                  <Calendar
          onChange={getDate}
        value={date}
        
          prev2Label={null}
          next2Label={null}
        // prevLabel={null}
        // nextLabel={null}
        selectRange={true}
              className="dailyCalendar"
              tileClassName={"second"}
        />
    </div>
  )
}

export default DailyCalendar