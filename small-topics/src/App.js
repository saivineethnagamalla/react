import React from 'react';
import ListOfnames from './list';
import KeyOfnames from './keys';
import MapOfThings from './map';
import FilterOfThings from './fliter';
import TotalEmpSalary from './reduce';

function App() {
  return (
    <div className="App">
      <ListOfnames />
      <KeyOfnames />
      <MapOfThings />
      <FilterOfThings />
      <TotalEmpSalary />
    </div>
  );
}

export default App;
