import React, { Component, useState } from 'react';
import test3 from './../Images/test3.jpg';
import data from './../coordinate.json';
import {DraggableShape} from './../components/DraggableShape.js';



let parentStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflow:'auto' 
}

let AddButtonPosition = {
  position: "absolute",
  top: '30%',
  left: '90%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#555',
  color: 'white',
  fontSize: '16px',
  padding: '12px 24px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px'
}


class Coordinate extends React.Component {
	render() {
  	const value = this.props;
    // console.log(value);
    const left = Number(value.startPoint.x);
    const top = Number(value.startPoint.y);
    const width = Number(value.endPoint.x)-Number(value.startPoint.x);
    const height = Number(value.endPoint.y)-Number(value.startPoint.y);
    const rotateAngle = 0;

  	return (
    	<div>

        <DraggableShape
            top={top}
            left={left}
            width={width}
            height={height}
            rotateAngle={rotateAngle}
          />
      </div>
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
      rotateAngle: 0,
    };
  }

    render() {
      

      const addDefaultRectangle = event => {
        //setInputList(inputList.concat(<Input key={inputList.length} />));
        const defaultRectangle={
          id: 3,
          startPoint:{
            x:'0',
            y:'0'            
          },
          endPoint:{
            x:'50',
            y:'50'
          }
        };
        this.setState(prevState => ({
          data: [                   
              ...prevState.data,    
              defaultRectangle  // new object
          ]
        }));
        console.log("updated data",this.state.data);
      };



      return (
      <div style={parentStyle}>
        {/* <img src={test3}/> */}
        {/* <div>
          <button style={AddButtonPosition} onClick={addDefaultRectangle}>Add</button>
        </div> */}
  
      {/* {
        this.state.data.map(value=><Coordinate key={value.id} {...value}/>)
      } */}
      </div>
        )
    }
}
export {ImageShape};