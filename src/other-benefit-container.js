import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import OtherBenefit from './other-benefit';

function OtherBenefitContainer({otherBenefitsProp}) {
    return (
		(typeof otherBenefitsProp != "undefined" && otherBenefitsProp.length) ?
			<div className="ts-pgc ts-pgc--t-fixed ts-pgc--p-wide ts-pgc--op-ekfooter ts-pgc--bgcp-white">
				<div className="ts-pgc__core">
					<div className="ts-pgu__sct">
						<div className="ts-pgu__hdr-wrp">
							<h2>
								<span className="ts-pgu__hdr">
									Improve your flight experience
								</span>
							</h2>
						</div>
						<div className="ts-fubl ts-fubl--col-4">
							<div className="ts-fubl__row" data-ts-comp="FaqrHeightEqualizer" data-ts-equalize=".ts-fubl__col">
								{otherBenefitsProp.map((item, i) =>								
									<OtherBenefit key={i} {...item}/>
								)}				
							</div>
						</div>
					</div>
				</div>
			</div> : null
    );  
}
export default OtherBenefitContainer;

