import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function LoungeDetails({discount}) {
    return (
		<div className="ts-plng__sct">
		   <div className="ts-plng__bnfts">
			  <p className="ts-plng__bnfts-ttl">
				 Whether you need a few minutes to catch up on work or simply want to relax away from the crowds, you’ll find our Lounges in international airports across six continents, including our A380 hub in Dubai
			  </p>
			  <p className="ts-plng__bnfts-ttl ts-plng__bnfts-ttl--sub">
				 <strong>Book Lounge access now to get a {discount}% discount compared to booking at the airport.</strong>
			  </p>
			  <div className="ts-plng__bnfts-lst" data-ts-comp="FaqrHeightEqualizer" data-ts-equalize=".ts-bnfcrd__pnl">
				 <div className="ts-plng__bnfts-row">
					<div className="ts-plng__bnfts-col">
					   <div className="ts-bnfcrd">
						  <img className="ts-bnfcrd__img" alt="" src="/images/1.png" />
						  <div className="ts-bnfcrd__pnl">
							 <h2>
								<span className="ts-bnfcrd__ttl">Wine &amp; Diner</span>
							 </h2>
							 <p className="ts-bnfcrd__txt">
								Join us to unwind in our exclusive Emirates Lounges as you travel the world. Dine on delicious cuisine, refresh with a shower
							 </p>
						  </div>
					   </div>
					</div>
					<div className="ts-plng__bnfts-col">
					   <div className="ts-bnfcrd">
						  <img className="ts-bnfcrd__img" alt="" src="/images/2.png" />
						  <div className="ts-bnfcrd__pnl">
							 <h2>
								<span className="ts-bnfcrd__ttl">Socialize</span>
							 </h2>
							 <p className="ts-bnfcrd__txt">
								Prepare for the next stage of your journey in the comfort of our partner lounges around the world
							 </p>
						  </div>
					   </div>
					</div>
					<div className="ts-plng__bnfts-col">
					   <div className="ts-bnfcrd">
						  <img className="ts-bnfcrd__img" alt="" src="/images/3.png" />
						  <div className="ts-bnfcrd__pnl">
							 <h2>
								<span className="ts-bnfcrd__ttl">Relax</span>
							 </h2>
							 <p className="ts-bnfcrd__txt">
								Start your journey to New York with delicious cuisine and sample our range of premium beverages.
							 </p>
						  </div>
					   </div>
					</div>
				 </div>
			  </div>
		   </div>
		</div>
    );  
}
export default LoungeDetails;

