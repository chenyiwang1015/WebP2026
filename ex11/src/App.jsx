import React from 'react';
import './App.css';
import MultiButton from './cgu_multiButton'; 

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'red', fontSize: '100px' }}>
        hello CGU!!
      </h1>
      <div>
        <MultiButton />
      </div>
    </div>
  );
}

export default App;