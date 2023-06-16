import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageBox from './components/imageBox';

function App() {
  const inpRef = useRef<HTMLInputElement>(null);

  const [imageList, setImageList] = useState<string[]>([])

 

  return (
    <div className='container'>
      <div className={'gellery-box ' + (imageList.length > 0 && 'row')}>
        {
          imageList.length === 0 &&
          <div className="text-center">
            
              There is no image.<br/>
              Please, add images.
            
          </div>
        }
          
          <input type="file" ref={inpRef} 
          onChange={(event) => {
            
            if(event.currentTarget.files?.[0]){

            const file = event.currentTarget.files[0]

            console.log(file.name)

            const reader = new FileReader();

            reader.readAsDataURL(file)
            reader.onloadend = (event) => {
              setImageList(prev => [...prev, event.target?.result as string])
            }
            
            }
          }}/>
          {
            imageList.map((el, idx) =><ImageBox key={el + idx} src={el} />)
          }

          <div className ="plus-box" onClick={()=> {
            inpRef.current?.click()
          } }>
            +

          </div>
          
      </div>
      
    </div>
  );
}

export default App;
