import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {Rectangle} from './components/Shape.js';
import {ImageShape} from './components/ImageShape.js';



function App() {

  const Image = ({ data }) => <img class="center" src={`data:image/jpeg;base64,${data}`} />

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
        idealResolution = {{width: 640, height: 480}}
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        //onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
        imageCompression = {0.97}
        isMaxResolution = {true}
        isImageMirror = {false}
        onCameraStart = { (stream) => { handleCameraStart(stream); } }
        onCameraStop = { () => { handleCameraStop(); } }
      />

      
    </div>
    <form >
      <div id="img-container">
      </div>
      <br/>
      <button type='submit' id="button-submit">Save image</button>
    </form>
      <div>
        <ImageShape/>
      </div>
    </div>
  );
}

export default App;
