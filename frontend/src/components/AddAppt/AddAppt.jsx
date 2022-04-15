import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const AddAppt = () => {
    const[user, token] = useAuth();
    const[isShown, setIsShown] = useState(false)
    const[date, setDate] = useState('')
    const[time, setTime] = useState('')
    const[description, setDescription] = useState('')
    const[name, setName] = useState('')
    const[vet, setVet] = useState('')
    const toggleShown = () => {
        setIsShown(!isShown)
    }

    async function createAppt(newAppt){
        let response = await axios.post(`http://127.0.0.1:8000/api/users/event/`, newAppt, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
        console.log(response.data)
    }
    function handleSubmit(event){
        event.preventDefault();
        let newAppt = {
            date: date,
            time: time,
            description: description,
            dog_id: name,
            vet_id: vet,
            user_id: user.id
        };
        createAppt(newAppt);
    };
    return ( 
        <>
        <button onClick={toggleShown}>Make an appointment!</button>
        {isShown &&
        <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Date:{" "}
            <input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <label>
            Time:{" "}
            <input
              type="time"
              name="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </label>
          <label>
            Description:{" "}
            <input
              type="text"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label>
            Dog ID:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Vet ID:{" "}
            <input
              type="text"
              name="vet"
              value={vet}
              onChange={(event) => setVet(event.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>}
    </>
);
}
 
export default AddAppt;