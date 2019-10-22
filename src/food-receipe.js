import React, { useState, useEffect, JSON } from 'react';
import Item from './item';
import { Accordion, Button, Image, List } from 'semantic-ui-react'
function FoodReceipe() {	
	const [item, setItem] = useState();
	const [name, setName] = useState('');
	const [steps, setSteps] = useState('');
	function RetrieveData(){
		fetch("http://mybapi.azurewebsites.net/api/values/1")
			.then(res => res.json())
			.then((result) => {
				console.log(result);
				setItem(result);				
			},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
			(error) => {
				console.log(error);
			}
		);
	}	
	useEffect(() => {
		RetrieveData();		
	}, []);
    return (
		
		(typeof item != "undefined") ?
		( 
			<React.Fragment>				
				<Accordion fluid styled className="food-receipe">					
					<div className="name">{name}</div>
					<div className="ingredient"><p>Ingredients:</p>
					{
						<Item key={item.id} item={item}/>
					}
					</div>				
				</Accordion>
					    
				
			</React.Fragment>
		) : null					
    );  
}

export default FoodReceipe;

