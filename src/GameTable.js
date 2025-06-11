import React from 'react';

const thStyle = {
  padding: '8px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd'
};

const tdStyle = {
  padding: '8px',
  borderBottom: '1px solid #eee',
  fontSize: '14px'
};

function GameTable({ data }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Game Schedule</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={thStyle}>Match</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>From</th>
            <th style={thStyle}>To</th>
            <th style={thStyle}>Distance</th>
            <th style={thStyle}>Talent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} style={{ background: idx % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              <td style={tdStyle}>{row.match}</td>
              <td style={tdStyle}>{row.date}</td>
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
