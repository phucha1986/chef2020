import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function MastHead({pnrInfo, imageURL, headerText}) {
	
    return (
		(typeof pnrInfo != "undefined") ?
			<div className="ts-pgh ts-pgh--p-white ts-pgh--has-bg">
				<img src={imageURL} className="ts-pgh__bg" alt=""/>
				<div className="ts-pgh__core">
					<p className="ts-pgh__sct ts-pgh__sct--grp">
					Manage Your Booking
					</p>
					<h1 className="ts-pgh__sct ts-pgh__sct--ttl">
					  {headerText}
					</h1>
					<p className="ts-pgh__sct ts-pgh__sct--dsc">
					  Booking reference: <strong>{pnrInfo.pnr}</strong>
					</p>
				</div>
			</div> : null
    );  
}
export default MastHead;

