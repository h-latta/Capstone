import React, { useState } from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const VetMap = () => {

    const containerStyle = {
        width: "40%",
        height: "25rem",
    }

    const center = {
        lat: 29.4187,
        lng: -98.6882,
    }

    const mapClicked = (event) => { 
        console.log(event.latLng.lat(), event.latLng.lng()) 
    }


    return (
        <LoadScript googleMapsApiKey='AIzaSyDLSqelJc1QOGlSS1jQq6bOha5JFU2IgjE'>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={15}
                onClick={mapClicked}
            >   
            </GoogleMap>
        </LoadScript>
    );
};
export default VetMap;