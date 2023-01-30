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

  return (
    <div style={{ width: '100%' }}>
      <svg width="100%" height="100%">
        <rect
          width="100%"
          height="10px"
          style={{
            fill: '#e6e6e6',
          }}
        />
        <rect
          width={`${loadingPercent}%`}
          height="10px"
          style={{
            fill: 'cyan',
          }}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
