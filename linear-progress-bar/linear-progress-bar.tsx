import * as React from 'react';
import { useState, useEffect } from 'react';

const ProgressBar = ({ percentage }) => {
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
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [loadingPercent, percentage]);

  const height = 10;

  return (
    <div style={{ width: '100%' }}>
      <svg width="100%" height="100%">
        <rect
          width="100%"
          height={height}
          style={{
            fill: '#e6e6e6',
          }}
          rx={height / 2}
        />
        <rect
          width={`${loadingPercent}%`}
          height={height}
          style={{
            fill: 'cyan',
          }}
          rx={height / 2}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
