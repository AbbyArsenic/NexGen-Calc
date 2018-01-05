import React from 'react'; 
import { Link } from 'react-router-dom';

import { LoginButton } from '../../components/Buttons';

const ForgotPassword = () => (
	<div>
		<p>Need some system for recovering one's password here</p>
		<Link to={"/Login"} >
			<LoginButton />
		</Link>
	</div>
);

export default ForgotPassword;
