import React, {useState, useEffect, JSON} from 'react';
import ReactDOM from 'react-dom';
import TopNavigation from './top-navigation';
import MastHead from './mast-head';
import OtherBenefitContainer from './other-benefit-container';
import OfferCardContainer from './offer-card-container';
import UpgradeCondition from './upgrade-condition';
import TotalPrice from './total-price';
import ErrorMessage from './error-message';

function UpgradeWithCash() {	
	const [pnr, setPNR] = useState({});
	const [errorMessage, setErrorMessage] = useState([]);	
	const [offerCards, setOfferCards] = useState([]);
	const [otherBenefits, setOtherBenefits] = useState([]);
	const [upgradeConditions, setUpgradeConditions] = useState([]);
	const mastHeadImageURL = "https://emirates-ibe-release.emea.tigerspike.com/Images/page-backgrounds/page-header/bg-upgrade-first-sm.jpg";
	function validateOffers()
	{			
		setErrorMessage(!offerCards.filter(item => (item.isSelected === true || offerCards.length === 1)).length ? ["Please select an offer"] : []);		
	};
	
	function addOffers()
	{			
		RetrievePNR();
	};
	function removeOffers()
	{			
		if(offerCards.length > 1)
		{
			var newOfferCards = offerCards.slice(1);
			setOfferCards(newOfferCards);
		}		
	};
	
	function RetrievePNR(){
		fetch("http://localhost:57697/api/values")
			.then(res => res.json())
			.then((result) => {
				console.log(result);
				setPNR({UpgradeType: result.upgradeType, PNRNumber: result.pnrNumber});
				setOtherBenefits(result.otherBenefitList);				
				setOfferCards([...result.offerCardList, ...offerCards]);				
				setUpgradeConditions(result.upgradeConditionList);
			},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
			(error) => {
				console.log(error);
			}
		);
	};
	
	useEffect(() => {
		RetrievePNR();		
	}, []);
		
	
    return (
      <div>		
		<div id="mainContentAccess">
			<div className="ts-uwc">
				<MastHead pnr={pnr} headerText="Upgrade to Business" imageURL={mastHeadImageURL}/>
				<div className="ts-ek-form">
					<div className="ts-pgcc">
						<OtherBenefitContainer otherBenefitsProp={otherBenefits}/>
						<div className="ts-pgc ts-pgc--t-fixed ts-pgc--p-wide ts-pgc--op-ekfooter">
							<div className="ts-pgc__core">
								<ErrorMessage messages={errorMessage}/>
								<div className="ts-pgu__sct">
									<div className="ts-uwc__itm-lst-wrp">
									<OfferCardContainer offerCards={offerCards} setOfferCards={setOfferCards}/>										
									</div>
								</div>
								<div className="ts-pgu__sct">
									<div className="ts-uwc__itm-lst-wrp">
										<UpgradeCondition upgradeConditionsProp={upgradeConditions}/>
									</div>
								</div>
								<div className="ts-pgu__sct">
									<div className="ts-uwc__itm-lst-wrp">
										<TotalPrice offerCards={offerCards} currency={"AED"}/>
									</div>
								</div>
								<div className="ts-pgu__sct">        
									<div className="ts-pa ">
										<a href="/" className="ts-pa__back">Go to Manage your booking</a>
										<div className="ts-pa__right">      
											<input type="submit" value="Continue" className="ts-btn ts-btn--widget" data-ts-comp="Button"onClick={validateOffers}/>
										</div>
									</div>
								</div>								
								<div className="ts-pgu__sct">        
									<div className="ts-pa ">										
										<div className="ts-pa__right">      
											<input type="submit" value="Add offer" className="ts-btn ts-btn--widget" data-ts-comp="Button" onClick={addOffers}/>
											<input type="submit" value="Remove Offer" className="ts-btn ts-btn--widget" data-ts-comp="Button" onClick={removeOffers}/>
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
export default UpgradeWithCash;

