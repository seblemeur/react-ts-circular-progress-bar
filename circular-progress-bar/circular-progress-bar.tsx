import * as React from 'react';
import { useState, useEffect } from 'react';

const CircularProgressBar = ({ percentage }) => {
  const [loadingPercent, setLoadingPercent] = useState(0);
  useEffect(() => {
    let intervalId;
    if (loadingPercent !== percentage) {
      intervalId = setInterval(() => {
        setLoadingPercent((prevState) => {
          if (prevState >= percentage) {
            return prevState - 1;
          }
          return prevState + 1;
        });
      }, 20);
    }
    return () => clearInterval(intervalId);
  }, [loadingPercent, percentage]);

  const size = Math.min(window.innerWidth, window.innerHeight) * 0.9;
  const center = size / 2;
  const radius = size * 0.4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (loadingPercent / 100) * circumference;

  return (
    <svg viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth={size * 0.05}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
        stroke="cyan"
        strokeWidth={size * 0.05}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${center} ${center})`}
      />
      <text
        x={center}
        y={center}
        fontSize={size * 0.05}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${Math.round(loadingPercent)}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
