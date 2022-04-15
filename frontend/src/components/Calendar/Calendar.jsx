import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './Calendar.css'

class Calendar extends React.Component {
  
    render() {
      return (
        <div className="calendar">
        <h1>Appointment Tracker</h1>
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          weekends={false}
          events={this.props.data.map(event => {
            return {id: event.id,
                    title: event.description,
                    date: event.date,
                    extendedProps: {
                    dog: event.dog,
                    owner: event.user,
                    vet: event.vet
                    }}
          })}
          editable={true}
          selectable={true}
          eventClick={this.handleEventClick}
          />
    </div>
  );
}
  handleEventClick = (events) => {
    renderEventContent(events)
  }


  handleDateClick = (date) => {

  }
  
}
function renderEventContent(events) {
  return (
    alert(events.extendedProps)
  )
}

export default Calendar;