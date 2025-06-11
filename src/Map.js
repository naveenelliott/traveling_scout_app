import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-arrowheads';
import Papa from 'papaparse';
import { useEffect, useRef, useState } from 'react';
import { scaleSequential } from 'd3-scale';
import { interpolateCool } from 'd3-scale-chromatic';
import GradientLegend from './Legend'; // Adjust the path if necessary
import GameTable from './GameTable';

function PolylineWithArrows({ positions, color, idx }) {
  const polylineRef = useRef(null);

  useEffect(() => {
    if (polylineRef.current) {
      polylineRef.current.arrowheads({
        size: '10px',
        frequency: 'endonly',
        fill: true,
        yawn: 60
      });
    }
  }, [color]);

  return (
    <Polyline
      ref={polylineRef}
      positions={positions}
      pathOptions={{ 
        color, 
        weight: 4 - idx * 0.05, 
        opacity: 0.7 }}
    />
  );
}

function GameMap({ data, selectedIndex, setSelectedIndex }) {

  // Set up a color scale from cool blue to pink/red
  const colorScale = scaleSequential(interpolateCool).domain([0, data.length - 1]);

  const pathSegments = data
    .map((row, idx) => {
      const fromLat = parseFloat(row.latitude_from);
      const fromLng = parseFloat(row.longitude_from);
      const toLat = parseFloat(row.latitude_next);
      const toLng = parseFloat(row.longitude_next);

      if (
        isNaN(fromLat) || isNaN(fromLng) ||
        isNaN(toLat) || isNaN(toLng)
      ) {
        return null;
      }

      return {
        from: [fromLat, fromLng],
        to: [toLat, toLng],
        color: colorScale(idx)
      };
    })
    .filter(Boolean);

  return (
  <>
    <MapContainer 
    center={[39.5, -98.35]} 
    zoom={4} 
    style={{ height: '90vh', width: '100%' }} 
    whenCreated={(map) => {
      // Create a custom pane with high z-index
      map.createPane('selectedLine');
      map.getPane('selectedLine').style.zIndex = 1000;
    }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {pathSegments.map((seg, idx) => (
        <PolylineWithArrows
          key={idx}
          idx={idx}
          positions={[seg.from, seg.to]}
          color={selectedIndex === idx ? 'red' : seg.color}
          pane={selectedIndex === idx ? 'selectedLine' : undefined}
        />
      ))}
    </MapContainer>

    {/* ✅ Legend component placed below the map */}
    <GradientLegend colorScale={colorScale} total={data.length} />
  </>
);
}

export default GameMap;
