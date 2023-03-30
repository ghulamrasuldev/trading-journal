import React from 'react';
import './upcomingEvents.css';
import { Divider } from '@mui/material';
import { lightTheme } from '../../../Theme/theme';

const UpcomingEvents = () => {
  const Events = [
    {
      event: 'Market analysis with Zak',
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
    {
      event: "Webinar with Mark O'brin",
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
    {
      event: 'BTC / USD',
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
    {
      event: 'BTC / USD',
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
  ];

  return (
    <div className="mainEventsDiv">
      <p className="upcomingEvent" style={{ color: `${lightTheme.headingTextColor}` }}>
        Upcoming Events
      </p>
      {Events.map((event, index) => {
        return (
          <>
            <div className="eventDiv" key={index}>
              <ul>
                <li className="event" style={{ color: `${lightTheme.headingTextColor}` }}>
                  {event.event}
                </li>
              </ul>
              <p className="eventDate" style={{ color: `${lightTheme.textColor}` }}>
                {event.date}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UpcomingEvents;
