import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Lounge({currency, lounge}) {
	const hasPax = lounge.passengers.length > 0;
	const only1Pax = lounge.passengers.length == 1;
	const firstPaxName = lounge.passengers[0].name;
	const loungeTitle = only1Pax ? "Lounge access options for " + firstPaxName : lounge.departAirPort;
	const items = only1Pax ? {} : {};
	function getItemDetailIncaseOnly1Pax(lounge)
	{
		return {};
	};
	function getItemDetailIncaseOnly1Pax(lounge)
	{
		return {};
	};
	function onPassengerSelect(obj)
	{
		alert(obj.id);
	};
    return (	
	  <div className="ts-lao__lng-lst-itm">
		 <div className="ts-lao__lng-hdr">
			<p className="ts-lao__lng-hdr-grp">
			   <strong>{lounge.loungeType}</strong>
			</p>
			<div className="ts-lao__lng-hdr-ttl-wrp">
			   <h2>
				  <span className="ts-lao__lng-hdr-ttl">{loungeTitle}</span>
			   </h2>
			</div>
		 </div>
		 <div className="ts-lao__lng-bdy">
			<div className="ts-lao__box">					
				<div className="ts-lao__sct ts-lao__sct--flinf ts-lao__sprt">
				   <div className="ts-lao__row">
					  <div className="ts-lao__col">
						 <div className="ts-lao__ttl-wrp ts-lao__spc">									
						 {(only1Pax) ?
							<div className="ts-checkbox">
							   <input type="checkbox"/>
							   <label><span aria-hidden="true">
							   <strong>
							   {lounge.departAirPort}
							   </strong>      </span>									  
							   </label>
							</div>
							:
							<h3>										
							   <span className="ts-lao__ttl">Flight from {lounge.from} to {lounge.to}</span>
						 </h3>}
						 </div>
						 <div className="ts-lao__fl-dsc ts-lao__spc">
							<div className="ts-lao__fl-dsc-mn ts-lao__spc">
							   <div className="ts-lao__row ts-lao__row--sm">
								  <div className="ts-lao__col">
									 <p className="ts-lao__sub">
										Departing on {lounge.departDate}
									 </p>
								  </div>
							   </div>
							</div>
						 </div>
					  </div>
					  <div className="ts-lao__col">
						 <div className="ts-lao__arcrft">
							<div className="ts-lao__arcrft-mn ts-lao__spc">							   								
								<div className="ts-lao__row ts-lao__row--sm ts-lao__row--lma">									
									<div className="ts-lao__col">
									<img className="ts-lao__icn ts-lao__icn--tfn" src={lounge.airlineImage}/>
									
									  </div>
									  <div className="ts-lao__col">
										 <p className="ts-lao__sub">
										{lounge.airlineCode}
										 </p>
									  </div>
								  </div>								
							</div>
						 </div>
					  </div>
				   </div>
				</div>
				{(!only1Pax) ?
				<div className="ts-lao__sct ts-lao__sct--psngrs ts-lao__sprt">										
					{lounge.passengers.map((item, i) =>
						<div className="ts-lao__psngr-lst-itm ts-lao__sprt" key={i}>
							<div className="ts-lao__row">																
								<div className="ts-lao__col">
									{(item.price > 0) ?
										<div className="ts-lao__psngr-sel">
											<div className="ts-checkbox">											   
											   <input type="checkbox" onChange={onPassengerSelect} id={"chk_lounge_" + i} name={"chk_lounge_" + i} data-ts-lao-ca-passenger-select="" data-ts-lao-ma-passenger-id={"chk_lounge_" + i} data-ts-lao-ma-passenger-name={item.name} data-ts-lao-ma-passenger-type={item.type} data-ts-lao-ma-passenger-price-currency={currency} data-ts-lao-ma-passenger-price-value={item.price}/>
											   <label id={"lbl_lounge_" + i}><span aria-hidden="true">
											   <strong>
											   {item.name} ({item.type})
											   </strong>      </span>									  
											   </label>
											</div>
										</div>: 
										<div className="ts-lao__psngr-inf">
											<div className="ts-lao__psngr-inf-mn ts-lao__spc">
												<div className="ts-lao__row ts-lao__row--sm">
													<div className="ts-lao__col">
														<div className="ts-lao__sub">
														   {item.name} ({item.type})
														</div>
													</div>
													<div className="ts-lao__col">
														<div className={"ts-lao__tmi ts-lao__tmi--" + item.tier.toLowerCase()}>
															{item.tier}
														</div>
													</div>													
												</div>
											</div>
											<div className="ts-lao__sub ts-lao__spc">
												As a {item.tier} member, {item.name} has complimentary access to the {lounge.loungeType}.
												<br/>
												{item.name} can bring {item.accompanied} guest for free to the lounge													
											</div>
										</div>										
									}									  									  
								</div>
								<div className="ts-lao__col">					
									{(item.price > 0) ?
										<div className="ts-lao__prc" data-ts-lao-ca-price-root="" aria-hidden="true">									   
										   <div className="ts-lao__prc-core">
											  <div className="ts-lao__prc-mn ts-lao__spc">
												 <p className="ts-lao__sub ts-lao__sub--lg">
													<strong>
													<span data-ts-lao-ca-price-cur="">{currency}</span> <span data-ts-lao-ca-price-val="">{item.price}</span>
													</strong>
												 </p>
											  </div>
										   </div>
										</div> :										
										<div className="ts-lao__prc">										   
										   <div className="ts-lao__prc-core">
											  <div className="ts-lao__prc-cmpl">
												 <div className="ts-lao__row ts-lao__row--sm ts-lao__row--lma">
													<div className="ts-lao__col">
													   <img className="ts-lao__icn ts-lao__icn--cmpl" src="https://emirates-ibe-release.emea.tigerspike.com/system/deliverables/components/lounge-access-organizer/images/ic-cmpl.png" alt="" aria-hidden="true"/>
													</div>
													<div className="ts-lao__col">
													   <p className="ts-lao__sub">
														  <strong>Complementary</strong>
													   </p>
													</div>
												 </div>
											  </div>
										   </div>
										</div>
									}
								</div>
							</div>
						</div>
					)}					
				</div>
				: null}
			</div>
		 </div>		 
	  </div>

    );  
}
export default Lounge;

