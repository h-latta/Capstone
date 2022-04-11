import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/users/dog/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if(user.id == response.owner_id){
        setDogs(response.data);}
      } 
      catch (error) {
        console.log(error.message);
      }
    };
    fetchDogs();
  }, [token]);
  return (
    <div className="container">
      <h1>Welcome back, {user.first_name}!</h1>
      {dogs &&
        dogs.map((dog) => (
          <p key={dog.id}>
            {dog.name} {dog.breed} {dog.birthday} {dog.last_checkup} {dog.conditions}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
