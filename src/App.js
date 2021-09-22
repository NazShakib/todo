import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import './App.css';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function App() {


  const Image = ({ data }) => <img class="center" src={`data:image/jpeg;base64,${data}`} />

    function handleTakePhoto (dataUri) {
      // Do stuff with the photo...
      var imageURL = dataUri.split(",")[1];
      ReactDOM.render(<Image data={imageURL} />, document.getElementById('img-container'))
    }

    function handleCameraStart (stream) {
      console.log('handleCameraStart');
      <XYPlot
      width={stream.width}
      height={stream.height}>
      <HorizontalGridLines />
      
      <LineSeries
        data={[
          {x: 1, y: 10},
          {x: 1, y: 5},
          {x: 1, y: 15}
        ]}/>
      <XAxis />
      <YAxis />
    </XYPlot>
    }
  
    function handleCameraStop () {
      console.log('handleCameraStop');
    }

  return (
    <div className="App">
      
      <header>
        <h1>Capture Your report</h1>
      </header>
      <div class="container">
      <div class="parent-shades">

      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>
      <div class='shades'></div>




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


    </div>
  );
}

export default App;
