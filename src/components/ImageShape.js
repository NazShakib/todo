import React, { Component } from 'react';
import {Rectangle} from './../components/Shape.js'
import test3 from './../Images/test3.jpg';
import data from './../coordinate.json';

let parentStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflow:'auto'
    
}


{data.map(post => {
    console.log(post.coordinate.startPoint.x, post.coordinate.startPoint.y)
    console.log(post.coordinate.endPoint.x,post.coordinate.endPoint.y)
})}

class ImageShape extends Component {
    render() {
        return <div style={parentStyle}>
        <div >
        <img src={test3} alt="logo" />
          {data.map(post=> 
            <Rectangle
            corner={[post.coordinate.startPoint.x, post.coordinate.startPoint.y]}
            corner_bottom={[post.coordinate.endPoint.x,post.coordinate.endPoint.y]}
            color='#FF0266'
            />
          )}
           {/* <Rectangle
          corner={[160, 250]}
          corner_bottom={[389,300]}
          color='#FF0266'
          /> */}
          </div>
        </div>
    }
}
export {ImageShape};