import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Events from './Events';

export default class Calendar extends React.Component { 
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        height={650}
        selectable={true}
        editable={true}
        events={[
          { title: 'event 1', date: '2022-04-14'}
        ]}
      />
    )
  }
}