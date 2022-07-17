import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Infbar from "./components/Infbar/infbar";
import Slider from './components/Slider/slider';

function App() {
  return (
    <div>
      <div>
        <Infbar />
      </div>
      <div>
        <Navbar />
      </div>        
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default App;