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
    <div style={{ padding: '20px', maxWidth: '95%', margin: '0 auto' }}>
      {/* ✅ Centered Title */}
      <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Game Schedule</h2>
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
              <td style={tdStyle}>{row.match_id}</td>
              <td style={tdStyle}>{row.date}</td>
              <td style={tdStyle}>{row.match_home_team}</td>
              <td style={tdStyle}>{row.next_team}</td>
              <td style={tdStyle}>{parseFloat(row.distance_km).toFixed(2)}</td>
              <td style={tdStyle}>{parseFloat(row.avg_talent).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameTable;
