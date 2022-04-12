import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VetMap from "../../components/VetMap/VetMap";
import Calendar from "../../components/Calendar/Calendar";
import AddDog from "../../components/AddDog/AddDog";

const OwnerHome = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [Dogs, SetDogs] = useState([]);

  async function fetchDogs(){
      let response = await axios.get('http://127.0.0.1:8000/api/users/dog/', {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      SetDogs(Dogs => ([...Dogs, ...response.data]))
  };


  useEffect(() => {
    fetchDogs();
  }, [token]);

  return (
    <div className="container">
      <h1>Welcome back , {user.first_name}!</h1>
      <table>
        <thead>
          <tr>
            <th>Your Dogs</th>
          </tr>
        </thead>
        <tbody>
          {Dogs && Dogs.map((dog) => {
              <tr key={dog.id}>
                <td>{dog.name}</td> 
                <td>{dog.breed}</td>
                <td>{dog.birthday}</td>
                <td>{dog.last_checkup}</td>
                <td>{dog.conditions}</td>
              </tr>
              })};
            </tbody>
        </table>
      <AddDog />
      <Calendar />
    </div>
  );
};

export default OwnerHome;
