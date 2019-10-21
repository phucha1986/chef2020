import React, {useState, useEffect, createRef } from 'react';
import ReactDOM from 'react-dom';
import { Redirect, withRouter } from 'react-router';

function RetrievePNR({history}) {
	const [isLastNameFocused, setIsLastNameFocused] = useState(false);
	const [isPNRFocused, setIsPNRFocused] = useState(false);
	const lastNameClass = "ts-row" + (isLastNameFocused ? " active" : "");
	const pnrClass = "ts-row" + (isPNRFocused ? " active" : "");
	const [isUpgradeWithCash, setIsUpgradeWithCash] = useState(false);
	const [isPaidLounge, setIsPaidLounge] = useState(false);	
	const [pnrInfo, setPNRInfo] = useState([]);
	let lastName = "BEATTY";
	let pnr = "EV2HW6";
	function setLastNameRef(obj)
	{
		lastName = obj;
	};
	function setPNRRef(obj)
	{
		pnr = obj;
	};
	function onLastNameFocused()
	{
		setIsLastNameFocused(!isLastNameFocused);
	};
	
	function onPNRFocused()
	{
		setIsPNRFocused(!isPNRFocused);
	};
	
	function retrievePNR()
	{	
		if(lastName.value == "Siddiqi" && pnr.value == "J5GUUS")
		{
			setIsUpgradeWithCash(true);
			
		}else if(lastName.value == "BEATTY" && pnr.value == "EV2HW6")
		{
			setIsPaidLounge(true);
		}
		setPNRInfo({lastName: lastName.value, pnr: pnr.value});
	};
	
	function renderRedirect()
	{		
		if(isUpgradeWithCash)
		{
			history.push({
				pathname: "/UpgradeWithCash",
				state: { pnrInfo: pnrInfo}
			});			
		}else if(isPaidLounge)
		{
			history.push({
				pathname: "/PaidLounge",
				state: { pnrInfo: pnrInfo}
			});			
		}		
	};
	useEffect(() => {
		renderRedirect();
	});
    return (
		<div className="ts-comp ts-myTrips">
				<div id="mainContainer">
					<h1 >
						Manage your booking</h1>
					<div className="ts-form">
						<div className="ts-retrieve-booking">
							<h2 className="mb15">
								Retrieve a booking
							</h2>
							<p className="ts-info">
								* Required fields
							</p>
							<div className={lastNameClass}>
								<label ><span className="readCustomErrorLabel">Last name *</span></label>
								<input className="ts-col-2" minLength="2" maxLength="48" type="text" onFocus={onLastNameFocused}  onBlur={onLastNameFocused} ref={setLastNameRef} value={lastName} onChange={""}/>
							</div>
							<div className={pnrClass}>
								<label ><span className="readCustomErrorLabel">Booking reference *</span></label>
								<input className="ts-col" minLength="2" maxLength="48" type="text" onFocus={onPNRFocused} onBlur={onPNRFocused} ref={setPNRRef} value={pnr}/>
							</div>
							<input type="submit" value="Retrieve booking" className="ts-button ts-retrievebtn" onClick={retrievePNR}/>							
						</div>
					</div>
					<div className="ts-login">
						<div className="ts-container">
							<span className="ts-or">or</span>        
							<img className="ts-left-image" src="https://flystaging14.ek.aero/english/images/CoinsOnair_WIFI_355x184_tcm233-4134936.png"/>
							<div className="ts-right-side">
								<h2 >Log in</h2>
								<p>If you're an Emirates Skywards member, log in to easily view and manage your upcoming travel and use your saved information.</p>
								<a href="#" loadiframe="true" className="ts-btn">
Log in</a>
							</div>
						</div>
					</div>
				</div>
		</div>
    );  
}
export default withRouter(RetrievePNR);

