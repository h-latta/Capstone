import React, { useState, useEffect } from 'react';

const AddDog = () => {
    const[isShown, setIsShown] = useState(false)
    const toggleShown = () => {
        setIsShown(!isShown)
    }

    return ( 
        <>
        <button onClick={toggleShown}>Add a dog!</button>
        {isShown &&
        <div className='modal'>
            <div className='overlay'> </div>
            <div className="modal-content">
                <h1>Hello world!</h1>
                <button onClick={toggleShown}>Close</button>
            </div>
        </div>}
        </>
     );
}
 
export default AddDog;