import React, {useState, useEffect, JSON} from 'react';
import ReactDOM from 'react-dom';
import TopNavigation from './top-navigation';
import MastHead from './mast-head';
import OtherBenefitContainer from './other-benefit-container';
import OfferCardContainer from './offer-card-container';
import UpgradeCondition from './upgrade-condition';
import TotalPrice from './total-price';
import ErrorMessage from './error-message';
import LoungeDetails from './lounge-details';
import LoungeContainer from './lounge-container';

function PaidLounge({history}) {	
	const [pnr, setPNR] = useState({});
	const [errorMessage, setErrorMessage] = useState([]);	
	const [offerCards, setOfferCards] = useState([]);
	const [otherBenefits, setOtherBenefits] = useState([]);
	const [upgradeConditions, setUpgradeConditions] = useState([]);
	const [discount, setDiscount] = useState(0);
	const [currency, setCurrency] = useState({});
	const [lounges, setLounges] = useState([]);
	const mastHeadImageURL = "/images/bg-paid-lounge-sm.jpg";
	const fetchURL = "http://www.mocky.io/v2/5cb6cb04320000e110cd45c7";

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
		fetch(fetchURL)
			.then(res => res.json())
			.then((result) => {
				setDiscount(result.discount);
				setCurrency(result.currency);
				result.lounges[0].passengers = [result.lounges[0].passengers[0]];
				setLounges(result.lounges);
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
				<MastHead pnrInfo={history.location.state.pnrInfo} imageURL={mastHeadImageURL} headerText="Business Lounge access"/>
				<div className="ts-ek-form">
					<div className="ts-pgcc">						
						<div className="ts-pgc ts-pgc--t-fixed ts-pgc--p-wide ts-pgc--op-ekfooter">
							<div className="ts-pgc__core">
								<ErrorMessage messages={errorMessage}/>
								<LoungeDetails discount={discount}/>
								<div className="ts-pgu__sct">
									<div className="ts-lao__lng-lst ts-lao__lng-lst--sc">
										<LoungeContainer currency={currency} lounges={lounges}/>
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
							</div>
						</div>
					</div>
				</div>								
			</div>
		</div>
      </div>	  
    );
  
}
export default PaidLounge;

