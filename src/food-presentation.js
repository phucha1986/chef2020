import React, { useState, useEffect, JSON } from 'react';
import DragDrop from './drag-drop'
function FoodPresentation() {	
	const [items, setItems] = useState([]);
	const [name, setName] = useState('');
	const [plating, setPlating] = useState('');
	function RetrieveData(){
		fetch("http://mybapi.azurewebsites.net/api/values")
			.then(res => res.json())
			.then((result) => {
				console.log(result);	
				setPlating(result.attr.plating);		
				setItems(result.subitems);
				setName(result.name);				
			},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
			(error) => {
				console.log(error);
			}
		);
	}

	function getPlating(id)
	{
		var positions = plating.split(';');
		return positions.find((val) => {			
			return val.split('-')[0] == id ? val : '';
		});
	}	
	
	useEffect(() => {
		RetrieveData();		
	}, []);
    return (
		
			(typeof items != "undefined" && items.length) ?
			( 
				<React.Fragment>
					<div>{name}</div>
					<div className="food-container">				
						{
							items.map(function(item, i) {								
								return <DragDrop key={item.id} item={item} setItems={setItems} position={getPlating(item.id)}/>;
							})
						}				
					</div>
				</React.Fragment>
			) : null			
		
    );  
}

export default FoodPresentation;

