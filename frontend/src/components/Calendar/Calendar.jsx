import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

class Calendar extends React.Component {
    render() {
      return (
        <div className="calendar">
        <h1>Appointment Tracker</h1>
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          weekends={false}
          events = {[this.props.data]}
          />
    </div>
  );
  
}
}
export default Calendar;