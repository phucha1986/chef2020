import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function UpgradeCondition({upgradeConditionsProp}) {
    return (
		(typeof upgradeConditionsProp != "undefined" && upgradeConditionsProp.length) ?
			<div className="ts-pgu__sct">
				<div className="ts-uwc__itm-lst-wrp">
				  <div className="ts-uwc__itm-lst">
						<div className="ts-uwc__itm"> 
							<div className="ts-cwh">
								<div className="ts-cwh__hdr-wrp">
								  <h2>
									<span className="ts-cwh__hdr">Upgrade conditions</span>
								  </h2>
								</div>
								<div className="ts-cwh__cnt">			 
									<div className="ts-rts">
										<p>
										</p>
										<ul>
											{
												upgradeConditionsProp.map((item, i) => 
													<li key={i}>{item.text}</li>
												)
											}									  
										</ul>									
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> : null
    );  
}
export default UpgradeCondition;

