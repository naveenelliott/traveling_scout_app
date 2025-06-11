import React from 'react';
import './App.css'; // your app styles if any
import 'leaflet/dist/leaflet.css'; // required for Leaflet map rendering
import GameMap from './Map'; // adjust path if your file is elsewhere\

function App() {
  return (
    <div className="App">
      <h1>Game Travel Map</h1>
      <GameMap />
    </div>
  );
}

export default App;
