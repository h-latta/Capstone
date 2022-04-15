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
  handleEventClick = (info) => {
    alert('Dog: ' + info.event.extendedProps.dog.name + ', ' + 'a ' 
    + info.event.extendedProps.dog.breed + '. Birthday is ' +
     info.event.extendedProps.dog.birthday + '. Last checkup was on ' +
      info.event.extendedProps.dog.last_checkup + '. Special conditions or notes: ' 
      + info.event.extendedProps.dog.conditions)
    alert('Owner: ' + info.event.extendedProps.owner.first_name + ' ' + 
    info.event.extendedProps.owner.last_name + ', their email is '
     + info.event.extendedProps.owner.email + '.')
  }


  handleDateClick = (date) => {

  }
  
}


export default Calendar;