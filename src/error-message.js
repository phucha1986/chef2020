import ReactDOM from 'react-dom';
import React, {useState, useEffect, createRef } from 'react';
function ErrorMessage({messages}) {
	const divError = React.createRef();
	useEffect(() => {
		if(typeof messages != "undefined" && messages.length)
		{
			scrollToErrorMessage();
		}
	});
	
	function scrollToErrorMessage()
	{
		divError.current.scrollIntoView();
	};
	
    return (
	(typeof messages != "undefined" && messages.length) ?
		<div className="ts-server-errors is-visible" data-ts-comp="ServerErrors" ref={divError}>
			<h2 aria-label="Errors" tabIndex="-1">Important:</h2>
			<p data-ts-err-single=""></p>
			<ul>
			{messages.map((message, index) =>
				<li>{message}</li>
			)}
			</ul>
		</div> : null			
    );  
}
export default ErrorMessage;

