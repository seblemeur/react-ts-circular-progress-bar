import * as React from 'react';
import { useState, useEffect } from 'react';

const CircularProgressBar = ({ percent }) => {
  const [loadingPercent, setLoadingPercent] = useState(0);
  useEffect(() => {
    let intervalId;
    if (loadingPercent !== percent) {
      intervalId = setInterval(() => {
        setLoadingPercent((prevState) => {
          if (prevState >= percent) {
            return prevState - 1;
          }
          return prevState + 1;
        });
      }, 20);
    }
    return () => clearInterval(intervalId);
  }, [loadingPercent, percent]);

  const size = 200;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (loadingPercent / 100) * circumference;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg width="100%" height="100%">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke="#00b0ff"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform="rotate(-90 100 100)"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={18}
        >{`${loadingPercent}%`}</text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
