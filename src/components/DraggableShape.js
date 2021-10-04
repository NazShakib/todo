import React, { Component } from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class DraggableShape extends Component {

  constructor(props) {
    super(props)
    this.state = 
    {
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,
      rotateAngle: this.props.rotateAngle
    }
  }
  
  handleResize = (style, isShiftKey, type) => {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { top, left, width, height } = style
    
    top = Math.round(top)
    left = Math.round(left)
    width = Math.round(width)
    height = Math.round(height)
    this.setState({
      top,
      left,
      width,
      height
    })
  }

  handleRotate = (rotateAngle) => {
    this.setState({
      rotateAngle
    })
  }

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }

  

  render() {
    const {width, top, left, height, rotateAngle} = this.state
    console.log(width, top, left, height);

    const closeIconStyle = {
      position: 'absolute',
      top:(this.state.top-30) + 'px',
      left:(this.state.left-30) + 'px',
      margin:'5px'
    }

    const removeItemByClicking= event => {
      console.log(this.props)
      this.setState({
        left: 0,
        top: 0,
        height:0,
        width: 0
      })
      delete this.props;
    }

    return (
    <div>

        <ResizableRect 
              left={left}
              top={top}
              width={width}
              height={height}
              //rotateAngle={rotateAngle}
              // aspectRatio={false}
              // minWidth={10}
              // minHeight={10}
              zoomable='n, w, s, e, nw, ne, se, sw'
              rotatable={false}
              // onRotateStart={this.handleRotateStart}
              onRotate={this.handleRotate}
              // onRotateEnd={this.handleRotateEnd}
              // onResizeStart={this.handleResizeStart}
              onResize={this.handleResize}
              // onResizeEnd={this.handleUp}
              // onDragStart={this.handleDragStart}
              onDrag={this.handleDrag}
              // onDragEnd={this.handleDragEnd}
            /> 
        <IconButton  aria-label="Close" onClick={removeItemByClicking} style={closeIconStyle}>
          <CloseIcon />
        </IconButton>  
        </div>
    );

  }
 
}
export {DraggableShape};
