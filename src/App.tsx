import React, { useCallback, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageBox from './components/imageBox';
import {useDropzone} from 'react-dropzone'

function App() {
  const inpRef = useRef<HTMLInputElement>(null);

  const [imageList, setImageList] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: any) => {
      console.log(acceptedFiles)
       
        if (acceptedFiles.length) {

            for (const file of acceptedFiles) {
              console.log(file.name)

            const reader = new FileReader();

            reader.readAsDataURL(file)
            reader.onloadend = (event) => {
              setImageList(prev => [...prev, event.target?.result as string])
            }

            
            }
            
            }
          
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

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
          
          
          {
            imageList.map((el, idx) =><ImageBox key={el + idx} src={el} />)
          }

          <div className ="plus-box" 
          {...getRootProps()}
          // onClick={()=> {
          //   inpRef.current?.click()
          // } }
          >
            
            <input type="file" ref={inpRef} 
            {...getInputProps()}
          
          />
            +

          </div>
          
      </div>
      
    </div>
  );
}

export default App;
