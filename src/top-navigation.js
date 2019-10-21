import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from "react-router-dom";
function TopNavigation() {
	const height54 = {
		height: "54px"
	};
    return (
		<div className="gnmainWrapperNewDiv">
			<div className="ek ek-wrapper new-global-nav">
				<div className="global-nav-toolbar navigation-skinny">
					<div className="container">
						<div className="row">
							<div className="col-xs-12" style={height54}>
								<div className="logo-emirates-wrapper logo-wrapper-new">
									<a href="/" id="ctl00_IBEHeader_NEW_EK_LOGO_AN" className="logo-emirates-new logo-slim" data-id="header_nav_link" data-link="Back to Homepage" target="_self">
										<img id="ctl00_IBEHeader_NEW_EK_LOGO" src="//flystaging5.ek.aero/english/images/Inline_Logo_global_tcm233-4096794.svg" />
										<span className="sr-only">Emirates logo</span>										
									</a>
								</div>								
								<div className="right-nav">
									<ul>
										<li className="country-selector-list-item">
											<div className="right-nav">
												<a id="ctl00_IBEHeader_ChooseCntryandLang" data-id="header_nav_link" aria-label="Country selection: selected country - Global, language - English" className="country-selector-list-item-link" data-ek-id="select-language-menu" data-close-caption="Close" aria-expanded="false" role="link" data-link="Country Selector" href="#" data-init-caption="Global English">
													<span className="arrows pull-right" aria-hidden="true">										
													</span>
													<span className="country-flag-icon" aria-hidden="true">
													<span className="svg-dims svg-WW2"></span>
													</span>
													<span className="country-code" aria-hidden="true">Global</span>
													<div className="arrow-up">										
													</div>
												</a>
											</div>
										</li>
									</ul>																		
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );  
}
export default TopNavigation;

