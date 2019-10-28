import React, { useEffect, useState } from 'react';
import './App.css';
import InputNumber from './InputNumber';

function App() {
  const [value, setValue] = useState('aaa')
  useEffect(() => {
    console.log(value)
  });
  return (
    <div>
      <InputNumber value={value} onChange={e => {
        setValue(e.target.value)
      }} />
      <InputNumber defaultValue={value} onChange={e => {
        console.log(e.target.value)
      }} />
      <button onClick={() => setValue(value+1)}>+</button>
    </div>
  )
}

export default App;
