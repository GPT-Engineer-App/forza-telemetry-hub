import React from 'react';

const AnalogGauge = ({ value, min, max, title, unit }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const rotation = (percentage / 100) * 180 - 90; // -90 to 90 degrees

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Gauge background */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
            strokeDasharray="236"
            strokeDashoffset="59"
          />
          
          {/* Gauge fill */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray="236"
            strokeDashoffset={236 - (236 * percentage) / 100 + 59}
            className="text-primary transition-all duration-300 ease-in-out"
          />
          
          {/* Needle */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            stroke="red"
            strokeWidth="2"
            className="origin-center transition-transform duration-300 ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          
          {/* Center point */}
          <circle cx="50" cy="50" r="3" fill="red" />
          
          {/* Min value */}
          <text x="10" y="75" fontSize="8" textAnchor="middle">{min}</text>
          
          {/* Max value */}
          <text x="90" y="75" fontSize="8" textAnchor="middle">{max}</text>
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm">{unit}</div>
        </div>
      </div>
      <div className="mt-2 text-sm font-medium">{title}</div>
    </div>
  );
};

export default AnalogGauge;