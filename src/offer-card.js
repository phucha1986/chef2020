import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function OfferCard({id, offerCards, setOfferCards}) {	
	const isSingleOffer = offerCards.length === 1;
	const itemIndex = offerCards.findIndex((item => item.id === id));
	const offerCardProp = offerCards[itemIndex];	
	function onSelectOfferCard(){										
		offerCards[itemIndex].isSelected = !offerCardProp.isSelected;		
		const OFFERCARDS = offerCards.slice(0);
		setOfferCards(OFFERCARDS);			
	};
    return (
		<div className="ts-uwc__itm" key={id}>
			<div className="ts-uwc__itm-core">		
				<div className={"ts-cuf ts-cuf--t-multi " + (offerCardProp.isSelected || isSingleOffer ? 'ts-cuf--selected' : '')} data-ts-comp="CardUpgradeFlight" data-ts-offr-id="offr_0">
					<div className="ts-cuf__gl-hdr">
						<div className="ts-pgu__hdr-wrp">
							<h2 tabIndex="-1">
							<span className="ts-pgu__hdr">{offerCardProp.from} to {offerCardProp.to}<span className="ts-cuf__sr-sel ts-aria-only"></span>
							</span>
							</h2>
						</div>
					</div>
					<div className="ts-cuf__crd">
						<div className={"ts-cwi " + (offerCardProp.isSelected || isSingleOffer ? 'ts-cwi--selected' : '')}>
							<div className="ts-cwi__cnt">
								<div className="ts-cwi__img-cnt">
									<div className="ts-cwi__img-cnt-core">
									  <img src={offerCardProp.toImageURL} alt=""/>
									</div>
								</div>
								<div className="ts-cwi__main-cnt">
									<div className="ts-cuf__core">
										<div className="ts-cuf__sct ts-cuf__sct--hdr">
											<p className="ts-cuf__hdr">
												  Upgrade all passengers to <strong>{offerCardProp.upgradeType === "YJ" ? "Business" : "First"}</strong> for <strong>{offerCardProp.currency} {offerCardProp.fare} + {offerCardProp.currency} {offerCardProp.tax} tax</strong>
												<span className="ts-cuf__sr-sel ts-aria-only">&nbsp;selected</span>
											</p>
										</div>
										<div className="ts-cuf__sct">
											<div className="ts-flight-segment-details" id="ts-flight-segment-details-ts-cuf-0-0">
												<div className="ts-flight-segment-details__origin">
													<time datetime="2018-04-23 06:00" className="ts-flight-segment-details__departure-time">
														<span className="ts-aria-only">Departure </span>
														<span className="ts-flight-segment-details__dt">		  
														  <span className="ts-aria-only">{offerCardProp.departDate}</span>
														</span>
														{offerCardProp.departTime}
													</time>
													<p className="ts-flight-segment-details__origin-airport">{offerCardProp.departAirport}</p>
												</div>
												
												<div className="ts-flight-segment-details__destination">
													<time datetime="2018-04-23 13:30" className="ts-flight-segment-details__arrival-time">
														<span className="ts-aria-only">Arrival </span>
															<span className="ts-flight-segment-details__dt">
															<span className="ts-aria-only">{offerCardProp.arrivalDate}</span>
														</span>
														{offerCardProp.arrivalTime}
													</time>
													<p className="ts-flight-segment-details__destination-airport">{offerCardProp.arrivalAirport}</p>
												</div>
												<div className="ts-flight-segment-details__aircraft">
													<div className="ts-flight-segment-details__aircraft-top-container">
														<div className="ts-flight-segment-details__aircraft-image-container">
															<img src="https://emirates-ibe-release.emea.tigerspike.com/system/components/flight-segment-details/images/plane.png" alt=""/>
															<span className="ts-aria-only">Airline: Emirates </span>
														</div>
														<div className="ts-flight-segment-details__aircraft-info">
															<p>
																<span className="ts-aria-only">Flight Number: </span>
																{offerCardProp.airline}
															</p>
															<p>
																<span className="ts-aria-only">Flight type: </span>
																{offerCardProp.aircraft}
															</p>
														</div>
													</div>
													<div className="ts-flight-segment-details__aircraft-bottom-container">
														<p>
															<span className="ts-aria-only">duration: </span>
															{offerCardProp.duration}
														</p>
													</div>
												</div>
												
											</div>									
										</div>
										<div className="ts-cuf__sct ts-cuf__sct--ftr">
											<div className="ts-cuf__ftr">
												<div className="ts-cuf__ftr-row">
												  <div className="ts-cuf__ftr-col ts-cuf__ftr-col--left">
													<p className="ts-cuf__tprc">
													  Total: 
													  <span className="ts-cuf__tprc-core">
														<strong>
														  <span className="ts-cuf__tprc-cur">{offerCardProp.currency}</span>
														  <span className="ts-cuf__tprc-val"> {offerCardProp.fare + offerCardProp.tax}</span>
														</strong>
													  </span>
													</p>
												  </div>
												  <div className="ts-cuf__ftr-col ts-cuf__ftr-col--right">
													<div className="ts-cuf__ctrl">
													{!offerCardProp.isSelected && !isSingleOffer ? <a href="javascript:void(0)" className="ts-btn ts-btn--secondary ts-btn--widget ts-cuf__ctrl-itm ts-cuf__ctrl-itm--add" role="button" data-ts-comp="Button" onClick={onSelectOfferCard}>Select</a> : null}
													{offerCardProp.isSelected && !isSingleOffer ? <a className="ts-cuf__ctrl-itm ts-cuf__ctrl-itm--rm" href="javascript:void(0)" onClick={onSelectOfferCard}>Remove Selection</a> : null}
													</div>
												  </div>
												</div>
											  </div>
										</div>
									</div>														
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );  
}
export default OfferCard;

