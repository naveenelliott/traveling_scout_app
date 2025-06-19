import React, { useEffect, useState } from 'react';
import GameMap from '../Map';
import GameTable from '../GameTable';
import Papa from 'papaparse';

function Home() {
  const [league, setLeague] = useState('mls');
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [availableMonths, setAvailableMonths] = useState([]);

  const handleLeagueChange = (e) => setLeague(e.target.value);
  const handleMonthChange = (e) => setSelectedMonth(e.target.value);

  const leagueFileMap = {
    mls: `${process.env.PUBLIC_URL}/react_app_data_mls.csv`,
    uslc: `${process.env.PUBLIC_URL}/react_app_data_uslc.csv`,
    usl1: `${process.env.PUBLIC_URL}/react_app_data_usl1.csv`,
  };

  useEffect(() => {
    Papa.parse(leagueFileMap[league], {
      download: true,
      header: true,
      complete: (result) => {
        const parsedData = result.data.map((row) => {
          const date = new Date(row.date);
          const monthName = isNaN(date.getTime())
            ? ''
            : date.toLocaleString('default', { month: 'long' });
          return { ...row, month: monthName };
        });

        const uniqueMonths = [...new Set(parsedData.map((row) => row.month).filter(Boolean))];
        setAvailableMonths(uniqueMonths);
        setData(parsedData);
      },
    });
  }, [league]);

  const filteredData =
    selectedMonth && selectedMonth !== ''
      ? data.filter((row) => row.month === selectedMonth)
      : data;

  return (
    <div className="App" style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 className="page-title">Optimizing Scout Scheduling</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto 20px', fontSize: '16px' }}>
        This interactive map shows a scouting path, where the goal is to maximize team talent while minimizing the total distance travelled. 
        Use the dropdown below to select a league and month and load the optimal schedule. The color of each path indicates the game order. If you want to see a path on the map of a specific 
        game, simply click row that you are interested in on the table and it will highlight the route.
      </p>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <div>
          <label htmlFor="league-select" style={{ marginRight: '6px', fontWeight: 'bold' }}>
            League:
          </label>
          <select
            id="league-select"
            value={league}
            onChange={handleLeagueChange}
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

        <div>
          <label htmlFor="month-select" style={{ marginRight: '6px', fontWeight: 'bold' }}>
            Month:
          </label>
          <select
            id="month-select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            <option value="">All</option>
            {availableMonths.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', height: 'calc(100vh - 240px)' }}>
        <div style={{ flex: 1 }}>
          <GameMap data={filteredData} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
          <GameTable data={filteredData} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </div>
      </div>
    </div>
  );
}

export default Home;
