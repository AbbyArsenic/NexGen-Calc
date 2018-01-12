import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Buttons';

const LoginPage = () => (
	<div className="contentPanel">
		<h1 id="formTitle">Log in</h1>
		<form 
			autoCapitalize="off" 
			autoCorrect="off" 
			spellCheck="false">
			<div className="form-group">
				<label className="control-label">Username</label>
				<input 
					className="form-control" 
					id="username" 
					name="username" 
					type="text" 
					required=""
				/>
			</div>
			<div className="form-group">
				<label className="control-label">Password</label>
				<Link
					to="/ForgotPassword" 
					id="forgotPasswordLink" 
					className="pull-right">
					I forgot
				</Link>
				<input 
					autoComplete="off" 
					className="form-control" 
					id="password" 
					name="password" 
					type="password" 
					required=""
				/>
			</div>
			<div>
				<Link to="/FlightPlan">
					<Button text="Log in" />
				</Link>
				<p><br />
					Don't have an account?
					<Link to="/SignUp" className="pull-right"> Sign Up</Link>
				</p>
			</div>
		</form>
	</div>
);

export default LoginPage;
