import React from 'react';
import { Link } from 'react-router-dom';

import LoginButton from '../../components/Buttons/LoginButton';

const LoginPage = () => (
	<div>
		<form>
			Username: <input name="username" />
			<br />
			Passwod: <input name="password" />
		</form>
		<Link to={"/FlightPlan"} >
			<LoginButton />
		</Link>
		<br />
		<Link to={"/ForgotPassword"} >
			<button>Forgot Password</button>
		</Link>
	</div>
);

export default LoginPage;
