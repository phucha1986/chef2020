import React, { useState, useEffect, JSON } from 'react';
import Item from './item';
function CreateReceipe() {	
	const [items, setItems] = useState([]);
	const [name, setName] = useState('');
	const [steps, setSteps] = useState('');
	const [search, setSearch] = useState('');
	function RetrieveData(search){
		fetch("http://mybapi.azurewebsites.net/api/items/" + search)
			.then(res => res.json())
			.then((result) => {
				console.log(result);
				setItems(result);
				//setName(result.name);
				//setSteps(result.attr.steps);
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
		RetrieveData('');		
	}, []);

	function onChange(e){
		RetrieveData(e.target.value);
	}
    return (
		
		
			<React.Fragment>
				<div className="create-receipe">
					Create receipe:
					Add item:
					</div>
				<div>name: <input value={name}/></div>
				<div>items list:</div>
				<div>
					{(typeof items != "undefined" && items.length) ? items.map(function(item, i) {								
						return <Item key={item.id} item={item}/>
					}): null}
				</div>
				<input value={search} onChange={onChange}></input>
				<div className="food-receipe">				
					{
						// items.map(function(item, i) {								
						// 	return <Item key={item.id} item={item}/>;
						// })
					}				
				</div>
			</React.Fragment>					
    );  
}

export default CreateReceipe;

