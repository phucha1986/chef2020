import React, { useState } from 'react';
function Item({item, className}) {		
		
	// const [left, setLeft] = useState(getPosition('x'));
	// const [top, setTop] = useState(getPosition('y'));
	// const [width, setWidth] = useState(item.attr.width > 0 ? item.attr.width : 100);
	// const [height, setHeight] = useState(item.attr.height > 0 ? item.attr.height : 100);
	// const [rotateAngle, setRotateAngle] = useState(getPosition('a'));
	const [showLayout, setShowLayout] = useState(false);
	const [steps, setSteps] = useState(item.attr.steps);
	const [quantity, setQuantity] = useState(item.attr.quantity);	
	className = item.attr.image;
	
    return (
	
		<React.Fragment>			
			<div className={className}>
				<div></div>
				Name: {item.name}
				{typeof item.subitems != "undefined" && item.subitems != null && item.subitems.length ?							
					item.subitems.map(function(subitem, i) {								
						return <Item className="sub" key={subitem.id} item={subitem}/>;
					})
				: null}
				{item.attr.category != "receipe" ? <div>quantity: {quantity} </div> : null}				
				{item.attr.category == "receipe" ? <div>steps: {typeof steps != "undefined" && steps.length ?					
					steps.map(function(step, i) {								
						return <div className="sub" key={i}>{step[0]}: {step[1]}</div>;
					})
				: null} </div> : null}
			</div>					
		</React.Fragment>
    );  
}

export default Item;

