import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails name="React Bootcamp" status="ongoing" />
      <CohortDetails name="NodeJS Training" status="completed" />
    </div>
  );
}

export default App;
