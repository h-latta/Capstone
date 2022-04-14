import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Calendar from "../../components/Calendar/Calendar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication

  const [user, token] = useAuth();
  const [events, setEvents] = useState([]);
  async function getEvents() {
    let response = await axios.get('http://127.0.0.1:8000/api/users/event/', {
      headers: {
        Authorization: "Bearer " + token,
      }
    });
    setEvents(response.data)
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="container">
      <h1>Welcome back, {user.first_name}!</h1>
      <h2>Appointment Tracker</h2>
      <Calendar data={events}/>
    </div>
  )};

export default HomePage;
