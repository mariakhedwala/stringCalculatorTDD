// src/App.js
import React, { useState } from 'react';
import { add } from './StringCalculator';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(0);

  return (
    <div className="App calculator">
      <h1>String Calculator</h1>
      <div className='input-wrap'>
        <input
          type="text"
          placeholder="Enter numbers"
          value={query}
          onChange={(e) => { setQuery(e.target.value) }}
        />
        <button onClick={() => { setResult(add(query)) }}>Calculate</button>
        <div className='result'>Result: {result}</div>
      </div>
    </div>
  );
}

export default App;
