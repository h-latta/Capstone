import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
const Events = () => {
    const [user, token] = useAuth();
    const [events, setEvents] = useState([]);
    async function getEvents(){
        let response = await axios.get('http://127.0.0.1:8000/api/users/event/', {
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        setEvents(response.data)
    }
    useEffect(() => {
        getEvents()
    }, [])
    return ( 
        <>
        {events.date}
        {events.time}
        {events.description}
        </>
     );
}
 
export default Events;