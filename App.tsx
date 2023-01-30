import * as React from 'react';
import CircularProgressBar from './circular-progress-bar/circular-progress-bar';
import LinearProgressBar from './linear-progress-bar/linear-progress-bar';
import './style.css';

export default function App() {
  const [random, setRandom] = React.useState(30);

  const generateRandomValues = () => {
    setRandom(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <button onClick={generateRandomValues}>Random value</button>
      <h1>Circular progress bar</h1>
      <div className="progress-bar">
        <CircularProgressBar percentage={random} />
      </div>
      <h1>Linear progress bar</h1>
      <div className="progress-bar">
        <LinearProgressBar percentage={random} />
      </div>
    </div>
  );
}
