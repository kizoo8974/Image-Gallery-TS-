import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageBox from './components/imageBox';

function App() {
  return (
    <div className='container'>
      <div className='initial-box'>
          <div className="text-center">
            
              There is no image.<br/>
              Please, add images.
            
          </div>
          <div className ="plus-box">
            +

          </div>
      </div>
      <ImageBox/>
    </div>
  );
}

export default App;
