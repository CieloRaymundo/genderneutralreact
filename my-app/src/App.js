import React from 'react';
import Map from './components/Map.js'
import Info from './components/Info.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Info />
      <div style={{width:'100vw', height:'90vh'}}>
        <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBDVcxzw2n2ojZWHtVMHeks9liftvvzRl4`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default App;
