import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VetMap from "../../components/VetMap/VetMap";
import Calendar from "../../components/Calendar/Calendar";
import AddDog from "../../components/AddDog/AddDog";

const OwnerHome = () => {
  const [user, token] = useAuth();
  const [dogs, setDogs] = useState([]);

  async function fetchDogs(){
      let response = await axios.get(`http://127.0.0.1:8000/api/users/dog/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setDogs(response.data)
  }

  const filterDogs =()=>{
    if (dogs.length > 0){
      return dogs.filter(dog => dog.user.id === user.id).map(filteredDog => 
        <tr key={filteredDog.id}>
      <td>{filteredDog.name}</td>
      <td>{filteredDog.breed}</td>
      <td>{filteredDog.birthday}</td>
      <td>{filteredDog.last_checkup}</td>
      <td>{filteredDog.conditions}</td>
    </tr>
    );
    }
    else{
      return null
    }
  };
      
    useEffect(() => {
      fetchDogs();
    }, []);

  return (
    <div className="container">
      <h1>Welcome back, {user.first_name}!</h1>
      <h3>Your Dogs</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Birthday</th>
            <th>Last Checkup</th>
            <th>Conditions</th>
          </tr>
        </thead>
        <tbody>
          {filterDogs()}
        </tbody>
        </table>
      <AddDog />
     <Calendar />
    </div>
  );
};

export default OwnerHome;
