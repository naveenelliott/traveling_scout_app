import React from 'react';

const thStyle = {
  padding: '8px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
  color: 'white',
};

const tdStyle = {
  padding: '8px',
  borderBottom: '1px solid #eee',
  fontSize: '14px'
};

function GameTable({ data, selectedIndex, setSelectedIndex }) {
  return (
    <div style={{ padding: '20px', maxWidth: '95%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Game Schedule</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ background: '#2c3e50' }}>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Match</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Original Home Team</th>
            <th style={thStyle}>Next Home Team</th>
            <th style={thStyle}>Distance (Miles)</th>
            <th style={thStyle}>Talent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              style={{
                background:
                  idx === selectedIndex
                    ? '#f39c12'
                    : idx % 2 === 0
                    ? '#fff'
                    : '#f9f9f9',
                cursor: 'pointer',
              }}
            >
              <td style={tdStyle}>{idx + 1}</td>
              <td style={tdStyle}>{row.match}</td>
              <td style={tdStyle}>{new Date(row.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</td>
              <td style={tdStyle}>{row.from_team}</td>
              <td style={tdStyle}>{row.next_home}</td>
              <td style={tdStyle}>{parseFloat(row.distance).toFixed(2)}</td>
              <td style={tdStyle}>{parseFloat(row.talent).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default GameTable;