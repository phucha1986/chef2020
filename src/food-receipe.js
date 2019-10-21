import React, { useState, useEffect, JSON } from 'react';
import Item from './item';
import { Button, Image, List } from 'semantic-ui-react'
function FoodReceipe() {	
	const [items, setItems] = useState([]);
	const [name, setName] = useState('');
	const [steps, setSteps] = useState('');
	function RetrieveData(){
		fetch("http://localhost:57697/api/values/1")
			.then(res => res.json())
			.then((result) => {
				console.log(result);
				setItems(result.subitems);
				setName(result.name);
				setSteps(result.attr.steps);
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
		
		(typeof items != "undefined" && items.length) ?
		( 
			<React.Fragment>
				
				<div className="food-receipe">		
					<div className="name">{name}</div>
					<div className="ingredient"><p>Ingredients:</p>
					{
						<List divided verticalAlign='middle' size='medium'>
						{items.map(function(item, i) {	
							var src = '/images/' + item.attr.image + ".png";							
							return (<List.Item>
											<List.Content floated='right'>
												<Button>Add</Button>
											</List.Content>
											<Image avatar src={src} size='mini'/>
											<List.Content>{item.name}</List.Content>
										</List.Item>);
						})}
						</List>
					}
					</div>				
				</div>
				
					    
				
			</React.Fragment>
		) : null					
    );  
}

export default FoodReceipe;

