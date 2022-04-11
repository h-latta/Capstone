import React, { useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const VetMap = () => {

    const containerStyle = {
        width: "40%",
        height: "25rem",
    }

    const center = {
        lat: 28.626137,
        lng: 79.821603,
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