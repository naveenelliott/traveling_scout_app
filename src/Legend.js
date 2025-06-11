import React from 'react';

const GradientLegend = ({ colorScale, total }) => {
  const steps = 10;
  const gradientSteps = Array.from({ length: steps }, (_, i) => {
    const t = (i / (steps - 1)) * (total - 1);
    return colorScale(t);
  });

  return (
    <div style={{
      position: 'absolute',
      bottom: '30px',
      left: '30px',
      backgroundColor: 'white',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
      zIndex: 1000
    }}>
      <div style={{ marginBottom: '4px' }}>Game Order</div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '200px',
        height: '15px'
      }}>
        {gradientSteps.map((color, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              backgroundColor: color
            }}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
        <span>First</span>
        <span>Last</span>
      </div>
    </div>
  );
};

export default GradientLegend;
