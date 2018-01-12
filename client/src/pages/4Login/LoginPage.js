import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons';

const LoginPage = () => (

	<div className="col-md-4" id="formContainer">
		<h2 id="formTitle">Sign in</h2>
		<form 
			autocapitalize="off" 
			autoCorrect="off" 
			spellCheck="false">
			<div className="form-group">
				<label className="control-label">Username</label>
				<input 
					className="form-control" 
					id="username" 
					name="username" 
					tabindex="1" 
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
					autocomplete="off" 
					className="form-control" 
					id="password" 
					name="password" 
					tabindex="2" 
					type="password" 
					required=""
				/>
			</div>
			<div>
				<Link to="/FlightPlan">
					<button>Sign In</button>
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
