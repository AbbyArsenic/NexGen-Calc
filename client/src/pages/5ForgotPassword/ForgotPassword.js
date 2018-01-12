import React from 'react'; 
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons';

const ForgotPassword = () => (
	<div>
		<p>Need some system for recovering one's password here</p>
		<Link to={"/Login"} >
			<Button text="Back" />
		</Link>
	</div>
);

export default ForgotPassword;
