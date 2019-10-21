import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function TotalPrice({offerCards, currency, tax}) {
	const total = (typeof offerCards != "undefined" && offerCards.length > 0) ? 
						(offerCards.length === 1 ? offerCards[0].fare : (offerCards.filter(item => item.isSelected === true)
						.reduce((totalFare, newItem) => totalFare + newItem.fare + newItem.tax, 0))) : 
						0;
    return (
		(typeof offerCards != "undefined" && offerCards.length) ?
			<div className="ts-pgu__sct">
				<div className="ts-tprc" data-ts-comp="TotalPrice">
					<p className="ts-tprc__prc">
						<strong>
							Total price for all passengers incl. tax:
							<span className="ts-tprc__prc-core">
								 <span className="ts-tprc__prc-cur">{currency}</span>
								 <span className="ts-tprc__prc-val"> {total}</span>
							</span>
						</strong>					
					</p>
				</div>
			</div> : null			
    );  
}
export default TotalPrice;

