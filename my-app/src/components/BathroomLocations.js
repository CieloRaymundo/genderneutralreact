import React, { useState, useEffect }from 'react';
import { Marker, InfoWindow } from "react-google-maps";

const UserMarker = (props) => {
  const [bathrooms, setBathrooms] = useState(null);
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  
  const getBathrooms = async () => {
    const url = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?per_page=30&unisex=true&lat=${props.lat}&lng=${props.long}`;
    const req = await fetch(url);
    const res = await req.json();
    const data = await res.map(bathroom => {
              return {
                    id: bathroom.id,
                    name: bathroom.name,
                    street: bathroom.street,
                    city: bathroom.city,
                    state: bathroom.state,
                    latitude: bathroom.latitude,
                    longitude: bathroom.longitude,
                    approved: bathroom.approved,
                    unisex: bathroom.unisex,
                    description: bathroom.directions,
                    comment: bathroom.comment
                  };
              });
    setBathrooms(data);
  };
  
    useEffect(() => {
      if(props.lat && props.long){
        getBathrooms();
      }
    }, [props.lat, props.long]);
    
  return (
    <div>
      {bathrooms && bathrooms.map(bathroom => (
        <Marker 
        key={bathroom.id} 
        position={{
            lat:bathroom.latitude, 
            lng:bathroom.longitude
          }} 
        onClick={() => setSelectedBathroom(bathroom)}
        />
      ))}
      
      {selectedBathroom && (
        <InfoWindow 
        position={{ 
          lat:selectedBathroom.latitude, 
          lng:selectedBathroom.longitude
        }} 
        onCloseClick={() => {
          setSelectedBathroom(null);
        }}>
          <div>
            <h2>{selectedBathroom.name}</h2>
            <h3>{selectedBathroom.street} {selectedBathroom.city}</h3>
            <p>{selectedBathroom.description}" "{selectedBathroom.comment}</p>
          </div>
        </InfoWindow>
      )}
    </div>
  );
  
};

export default UserMarker;

// https://tomchentw.github.io/react-google-maps/#directionsrenderer
// https://www.youtube.com/watch?v=Pf7g32CwX_s