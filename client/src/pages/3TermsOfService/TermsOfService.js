import React from 'react';
import { Link } from 'react-router-dom';

// import Button from '../../components/Buttons';


const TermsOfService = () => (
	<div className="contentPanel">
		<hr />
		<h3>Terms of Service <Link to="/SignUp">[Close]</Link></h3>
		<p>Here are our terms of service:<br />
		Don't die.<br />
		If you die, that's on you, not on us. <br />
		But please, please, please... just... don't die. <br />
		Cool.</p>
	</div>
);

export default TermsOfService;
