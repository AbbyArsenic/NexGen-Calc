import React from 'react';
import { Link } from 'react-router-dom';

import SubmitButton from '../../components/Buttons/SubmitButton';

const TermsOfService = () => (
	<div>
		<h1>Terms of Service</h1>
		<div>
			<p>Here are our terms of service:
			Don't die.
			If you die, that's on you, not on us. 
			But please, please, please...just don't die.
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
