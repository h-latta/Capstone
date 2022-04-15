import axios from 'axios';
import React, { useState } from 'react';
import './AddDog.css'
import useAuth from '../../hooks/useAuth';

const AddDog = () => {
    const[user, token] = useAuth();
    const[isShown, setIsShown] = useState(false)
    const[name, setName] = useState('')
    const[breed, setBreed] = useState('')
    const[birthday, setBirthday] = useState('')
    const[last_checkup, setLastCheckup] = useState('')
    const[conditions, setConditions] = useState('')
    const toggleShown = () => {
        setIsShown(!isShown)
    }

    const owner = user
    async function createDog(newDog){
        let response = await axios.post(`http://127.0.0.1:8000/api/users/dog/`, newDog, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
        console.log(response.data)
    }
    function handleSubmit(event){
        event.preventDefault();
        let newDog = {
            name: name,
            breed: breed,
            birthday: birthday,
            last_checkup: last_checkup,
            conditions: conditions,
            owner_id: owner.id
        };
        createDog(newDog);
    };
    return ( 
        <>
        <button className='button' onClick={toggleShown}>Add your dog!</button>
        {isShown &&
        <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="username"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Breed:{" "}
            <input
              type="text"
              name="breed"
              value={breed}
              onChange={(event) => setBreed(event.target.value)}
            />
          </label>
          <label>
            Birthday:{" "}
            <input
              type="date"
              name="birthday"
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
            />
          </label>
          <label>
            Last Checkup:{" "}
            <input
              type="date"
              name="last_checkup"
              value={last_checkup}
              onChange={(event) => setLastCheckup(event.target.value)}
            />
          </label>
          <label>
            Conditions:{" "}
            <input
              type="text"
              name="conditions"
              value={conditions}
              onChange={(event) => setConditions(event.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>}
    </>
);
}
 
export default AddDog;