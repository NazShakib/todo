import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {ImageShape} from './components/ImageShape.js';
import 'bootstrap/dist/css/bootstrap.min.css';



// const shadesDisplay = props=>(ulits.range)

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  console.log("windows dynamic size",windowSize);
  return windowSize;
}

function App() {

  const { height, width } = useWindowSize();

 // this.height = height*.50;
  //width = 

  const Image = ({ data }) => <img className="center" src={`data:image/jpeg;base64,${data}`} />

  console.log("size",height,width)
    function handleTakePhoto (dataUri) {
      // Do stuff with the photo...
      var imageURL = dataUri.split(",")[1];
      ReactDOM.render(<Image data={imageURL} />, document.getElementById('img-container'))
    }

    function handleCameraStart (stream) {
      console.log('handleCameraStart');
    }
  
    function handleCameraStop () {
      console.log('handleCameraStop');
    }

  return (
    <div className="App">
      <header>
        <h1>Capture Your report</h1>
      </header>
      <div className="container">
      
        <div className="camrea-div">
        <div className="parent-shades">
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>
          <div className='shades'></div>

          </div>
        <Camera
        idealResolution = {{width: width, height:height }}
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        //onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
        imageCompression = {0.97}
        isMaxResolution = {true}
        isImageMirror = {false}
        isFullscreen= {true}
        onCameraStart = { (stream) => { handleCameraStart(stream); } }
        onCameraStop = { () => { handleCameraStop(); } }
      /> 
      </div>
    </div>
    <form>
      <div id="img-container">
      </div>
       <button type='submit' id="button-submit">Save image</button> 
    </form>
      <div>
        <ImageShape/>
      </div>
    </div>
  );
}

export default App;
