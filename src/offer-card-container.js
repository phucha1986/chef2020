import React from 'react';
import OfferCard from './offer-card';
function OfferCardContainer({offerCards, setOfferCards}) {			
    return (	       
		(typeof offerCards != "undefined" && offerCards.length) ?
		( 
			<div className="ts-uwc__itm-lst">
				{
					offerCards.map((item, i) =>								
						typeof item != "undefined" ? <OfferCard key={item.id} id={item.id} offerCards={offerCards} setOfferCards={setOfferCards}/> : null
					)
				}				
			</div>) : null
			
    );  
}

export default OfferCardContainer;

