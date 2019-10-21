import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Lounge from './lounge';

function LoungeContainer({currency, lounges}) {
	
    return (	
		<div className="ts-lao">
			{lounges.map((item, i) =>								
				<Lounge key={i} currency={currency} lounge={item}/>
			)}
		</div>		
    );  
}
export default LoungeContainer;

