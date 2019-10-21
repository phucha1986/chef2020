import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function OtherBenefit({imageURL, text}) {
	const height90 = {
		height: "90px"
	};
    return (
		<div className="ts-fubl__col" style={height90}>
			<div className="ts-fubl__itm">
				<div className="ts-fubl__itm-icn-wrp">
					<div className="ts-fubl__itm-icn-core">
						<img className='ts-fubl__itm-icn' src={imageURL} alt={text}/>
					</div>
				</div>
				<p className="ts-fubl__itm-txt">
					{text}
				</p>
			</div>
		</div>						
    );  
}
export default OtherBenefit;