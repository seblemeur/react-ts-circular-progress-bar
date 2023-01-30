import * as React from 'react';
import CircularProgressBar from './circular-progress-bar/circular-progress-bar';
import './style.css';

export default function App() {
  const [random, setRandom] = React.useState(30);

  const generateRandomValues = () => {
    setRandom(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <h1>Animated circle</h1>
      <div className="progress-bar">
        <CircularProgressBar percent={random} />
        <button onClick={generateRandomValues}>Random value</button>
      </div>
    </div>
  );
}
