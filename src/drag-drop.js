import React, { useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
function DragDrop({item, setItems, position}) {		
		
	const [left, setLeft] = useState(getPosition('x'));
	const [top, setTop] = useState(getPosition('y'));
	const [width, setWidth] = useState(item.attr.width > 0 ? item.attr.width : 100);
	const [height, setHeight] = useState(item.attr.height > 0 ? item.attr.height : 100);
	const [rotateAngle, setRotateAngle] = useState(getPosition('a'));
	const [showLayout, setShowLayout] = useState(false);

	var className = showLayout ? item.attr.image : item.attr.image + " no-layout";

	function getPosition(attr)
	{
		if(typeof position == 'undefined')
		{
			return;
		}
		var attrs = position.split('-');
		return parseInt(attrs.find((val) => {
			var subVals = val.split(':');
			return subVals[0] == attr;						
		}).split(':')[1]);
	}

	var handleResize = (style, isShiftKey, type) => {
		// type is a string and it shows which resize-handler you clicked
		// e.g. if you clicked top-right handler, then type is 'tr'
		let { top, left, width, height } = style
		top = Math.round(top)
		left = Math.round(left)
		width = Math.round(width)
		height = Math.round(height)
		setLeft(left);
		setTop(top);
		setWidth(width);
		setHeight(height);		
	};
	var handleRotate = (rotateAngle) => {
		setRotateAngle(rotateAngle);
		setShowLayout(true);
	}
	var handleDrag = (deltaX, deltaY) => {
		setLeft(left + deltaX);
		setTop(top + deltaY);
		setShowLayout(true);
	}
	var handleDragEnd = () =>
	{
		setShowLayout(false);
	}	
    return (
	
		<React.Fragment>			
			<div className={className}>
				{/* {position}
				left{left}
				top{top}
				width{width}
				height{height}
				rotate{rotateAngle} */}
				<ResizableRect
					left={left}
					top={top}
					width={width}
					height={height}
					rotateAngle={rotateAngle}
					// aspectRatio={false}
					// minWidth={10}
					// minHeight={10}
					zoomable='n, w, s, e, nw, ne, se, sw'
					//zoomable='nw, ne, se, sw'
					// rotatable={true}
					// onRotateStart={this.handleRotateStart}
					onRotate={handleRotate}
					//onRotateEnd={handleRotateEnd}
					// onResizeStart={this.handleResizeStart}
					onResize={handleResize}
					// onResizeEnd={this.handleUp}
					// onDragStart={this.handleDragStart}
					onDrag={handleDrag}
					onDragEnd={handleDragEnd}
					/>
			</div>					
		</React.Fragment>
    );  
}

export default DragDrop;

