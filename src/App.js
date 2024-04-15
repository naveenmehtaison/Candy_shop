import React from 'react';
import DataContext2 from './Component/Store/DataContext2';
import Form from './Component/Form';

function App() {
  return (
    <DataContext2>
      <Form></Form>
    </DataContext2>
  );
}

export default App;
