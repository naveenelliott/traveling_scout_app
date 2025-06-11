import React, { useEffect, useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import GameMap from './Map';
import GameTable from './GameTable';
import Papa from 'papaparse';

function App() {
  const [league, setLeague] = useState('mls');
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleChange = (e) => {
    setLeague(e.target.value);
  };

  const leagueFileMap = {
    mls: '/react_app_data_mls.csv',
    uslc: '/react_app_data_uslc.csv',
    usl1: '/react_app_data_usl1.csv',
  };

  useEffect(() => {
    Papa.parse(leagueFileMap[league], {
      download: true,
      header: true,
      complete: (result) => {
        setSelectedIndex(null);
        setData(result.data);
      },
    });
  }, [league]);

  return (
    <div className="App" style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginTop: '1rem' }}>Game Travel Map</h1>

      <p style={{ maxWidth: '600px', margin: '0 auto 20px', fontSize: '16px' }}>
        This interactive map shows a scouting path based on total talent, where the goal is to maximize team talent while minimizing the total distance travelled
        over the course of a season. Use the dropdown below to select a league and load the optimal schedule. The color of each path indicates the game order.
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="league-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Select League:
        </label>
        <select
          id="league-select"
          value={league}
          onChange={handleChange}
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            cursor: 'pointer',
          }}
        >
          <option value="mls">Major League Soccer</option>
          <option value="uslc">USL Championship</option>
          <option value="usl1">USL League One</option>
        </select>
      </div>

      {/* Horizontal Layout */}
      <div style={{ display: 'flex', height: 'calc(100vh - 240px)' }}>
        <div style={{ flex: 1 }}>
          <GameMap
            data={data}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
          <GameTable
            data={data}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
