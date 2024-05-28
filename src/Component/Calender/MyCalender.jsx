import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2024, 4, 25),
      end: new Date(2024, 4, 27),
    },
    {
      title: 'Event 2',
      start: new Date(2024, 4, 28),
      end: new Date(2024, 4, 30),
    },
    // Add more events as needed
  ];

  return (
    <div style={{height:900 }} className='h-full p-6'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: 'auto', maxWidth: 1800 }}
      />
    </div>
  );
};

export default MyCalendar;

