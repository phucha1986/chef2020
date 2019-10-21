import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function MastHead({pnr}) {
	
    return (
		(typeof pnr != "undefined") ?
			<div className="ts-pgh ts-pgh--p-white ts-pgh--has-bg">
				<img src="https://emirates-ibe-release.emea.tigerspike.com/Images/page-backgrounds/page-header/bg-upgrade-first-sm.jpg" className="ts-pgh__bg" alt=""/>
				<div className="ts-pgh__core">
					<p className="ts-pgh__sct ts-pgh__sct--grp">
					  Manage your booking
					</p>
					<h1 className="ts-pgh__sct ts-pgh__sct--ttl">
					  Upgrade to {pnr.UpgradeType === "YJ" ? "Business" : "First"}
					</h1>
					<p className="ts-pgh__sct ts-pgh__sct--dsc">
					  Booking reference: <strong>{pnr.PNRNumber}</strong>
					</p>
				</div>
			</div> : null
    );  
}
export default MastHead;

