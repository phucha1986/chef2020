import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function HOCCotainer(childComponent, data) {
    return (
		<div class="ts-pgu__sct">    
			<div class="ts-uwc__itm-lst-wrp">
				<childComponent/>
			</div>
		</div>
    );  
}
export default HOCCotainer;

