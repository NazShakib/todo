import React, { Component, useState } from 'react';
import {Rectangle} from './../components/Shape.js'
import test3 from './../Images/test3.jpg';
import data from './../coordinate.json';
import ResizableRect from 'react-resizable-rotatable-draggable';
import {DraggableShape} from './../components/DraggableShape.js';
import { Stage, Layer, Rect, Transformer } from 'react-konva';


let parentStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflow:'auto'
    
}

// const getRectanleInfo = props =>{

//     let top = props.startPoint.y;
//     let left = props.startPoint.x;
//     let height = (props.endPoint.y)-(props.startPoint.y);
//     let width = (props.endPoint.x)-(props.startPoint.x);
//     return {}
// }

class Coordinate extends React.Component {
	render() {
  	const value = this.props;
    console.log(value);
    const left = Number(value.startPoint.x);
    const top = Number(value.startPoint.y);
    const width = Number(value.endPoint.x)-Number(value.startPoint.x);
    const height = Number(value.endPoint.y)-Number(value.startPoint.y);
    const rotateAngle = 0;
  	return (
    	<>
        <DraggableShape
            top={top}
            left={left}
            width={width}
            height={height}
            rotateAngle={rotateAngle}
          />
      </>
    );
  }
}


class ImageShape extends Component {
  
  constructor() {
    super()
    this.state = {
      data : data,
      width: 100,
      height: 100,
      top: 100,
      left: 100,
      rotateAngle: 0
    }
  }

    render() {
      const {width, top, left, height, rotateAngle} = this.state
      
      return (
      <div style={parentStyle}>
        <img src={test3}/>
  
      {
        this.state.data.map(value=><Coordinate key={value.id} {...value}/>)
      }
      </div>
        )
    }
}
export {ImageShape};