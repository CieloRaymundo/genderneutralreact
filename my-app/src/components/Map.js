import React, { useState }from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"
import UserMarker from './BathroomLocations'

const Map = withScriptjs(withGoogleMap((props) => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  
  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
		  console.log(position);
			setLong(position.coords.longitude);
			setLat(position.coords.latitude);
    });
  }else{
    alert("Please turn on location!");
  }
  
  return (
    <div>
      {lat&&long && 
      <GoogleMap
        defaultZoom={15}
        defaultCenter={	{ lat:lat, lng:long }}
      >
      {props.isMarkerShown && <Marker position={{ lat:lat, lng:long }} style={{color: 'blue'}}/>}
      </GoogleMap>}
      <UserMarker lat={lat} long={long}/>
    </div>
  );
}));

export default Map;