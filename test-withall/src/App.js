import React from 'react';
import Mybutton from './myButton';
import Test from './Test';
import Image from './IMG_16.jpg'

function App() {
  const name = "sai";

  return (
    <div>
      <h1> hello, {name}!</h1>
      <Mybutton />
      <Test />
      <img src={Image} alt="image" />
    </div>
  )
}

export default App;


