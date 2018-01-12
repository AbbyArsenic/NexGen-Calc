import React from 'react';
import { Link } from 'react-router-dom';

import { SubmitButton } from '../../components/Buttons';

const TermsOfService = () => (
	<div>
		<h1>Terms of Service</h1>
		<div>
			<p>Here are our terms of service:<br />
			Don't die.<br />
			If you die, that's on you, not on us. <br />
			But please, please, please...just don't die. <br />
			Cool.</p>
		</div>
		<div>
			<input name="agree" type="checkbox" />Agree to ToS 
			<br />
			<Link to={"/Login"} >
				<SubmitButton />
			</Link>
		</div>
	</div>
);

export default TermsOfService;
