import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export async function INITIAL_EVENTS() {
    const [user, token] = useAuth();
    const [events, setEvents] = useState([])

    let response = await axios.get('http://127.0.0.1:8000/api/users/event/', {
        headers: {
            Authorization: "Bearer " + token,
        },
        });
        setEvents(response.data)
  {
    let id = createEventId();
    let title = events.description;
    let date = todayStr(events.date);
    let time = events.time
  };

function createEventId() {
  return String(eventGuid++)
}}