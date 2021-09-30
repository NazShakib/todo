import React, { Component } from 'react';

// import {Rectangle} from 'draw-shape-reactjs';
let baseStyle = {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#000000'
};

function drawLine(from, to, lineWeight, componentStyle) {
    const m = (to[1] - from[1]) / (to[0] - from[0]);
    let line = [];
    // return line;
    if (from[0] < to[0]) {
        for (let x = from[0]; x <= to[0]; x += 0.1) {
            let y = m * (x - to[0]) + to[1];
            const pixel = {
                ...componentStyle,
                left: `${x}px`,
                top: `${y}px`,
                width: `${lineWeight}px`,
                height: `${lineWeight}px`
            };
            line.push(<div style={pixel} />);
        }
    } else if (from[0] > to[0]) {
        for (let x = from[0]; x >= to[0]; x -= 0.1) {
            let y = m * (x - to[0]) + to[1];
            const pixel = {
                ...componentStyle,
                left: `${x}px`,
                top: `${y}px`,
                width: `${lineWeight}px`,
                height: `${lineWeight}px`
            };
            line.push(<div style={pixel} />);
        }
    } else {
        if (from[1] < to[1]) {
            for (let y = from[1]; y <= to[1]; y += 0.1) {
                let x = from[0];
                const pixel = {
                    ...componentStyle,
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${lineWeight}px`,
                    height: `${lineWeight}px`
                };
                line.push(<div style={pixel} />);
            }
        } else if (from[1] > to[1]) {
            for (let y = from[1]; y >= to[1]; y -= 0.1) {
                let x = from[0];
                const pixel = {
                    ...componentStyle,
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${lineWeight}px`,
                    height: `${lineWeight}px`
                };
                line.push(<div style={pixel} />);
            }
        } else {
            let x = from[0];
            let y = from[1];
            const pixel = {
                ...componentStyle,
                left: `${x}px`,
                top: `${y}px`,
                width: `${lineWeight}px`,
                height: `${lineWeight}px`
            };
            line.push(<div style={pixel} />);
        }
    }

    return line;
}

class Rectangle extends Component {
    render() {
        let componentStyle = { ...baseStyle };

        if (this.props.position === 'fixed') {
            componentStyle.position = this.props.position;
        }

        

        let rectangle = [];

        let corner;
        this.props.corner ? (corner = this.props.corner) : (corner = [0, 0]);

        let corner_bottom;
        this.props.corner_bottom ? (corner_bottom =this.props.corner_bottom): (corner_bottom =[5,5]);
        
        let height;
        this.props.height ? (height = this.props.height) : (height = 1);

        let width;
        this.props.width ? (width = this.props.width) : (width = 1);

        let lineWeight;
        this.props.lineWeight
            ? (lineWeight = this.props.lineWeight)
            : (lineWeight = 3);

        if (this.props.color) {
            componentStyle.backgroundColor = this.props.color;
        }

        if (this.props.zIndex) {
            componentStyle.zIndex = this.props.zIndex;
        }
     
        let corners = [
            [corner[0], corner[1]],
            [corner_bottom[0], corner[1]],
            [corner_bottom[0] , corner_bottom[1]],
            [corner[0], corner_bottom[1]],
            [corner[0], corner[1]]
        ];
        console.log("Shape class "+(corner))
        console.log("Shape class "+(corner_bottom))
        // (x1,y1),(x2,y1),(x2,y2),(x1,y2)

        

        let from = corners.slice(0, -1);
        let to = corners.slice(1);

        const points = from.map((_, i) => [from[i], to[i]]);

        for (let [from, to] of points) {
            rectangle.push(...drawLine(from, to, lineWeight, componentStyle));
        }

        return <div>{rectangle}</div>;
    }
}
export {  Rectangle };
