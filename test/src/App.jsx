import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Counter2:{counter2}</h1>
      <button onClick={()=> setCounter2(counter2 - 10)}>-</button>
    </div>
  );
}

export default App;
