import React from 'react';
import { Link } from 'react-router-dom';
import FormGroup from "../../components/Forms/FormGroup";

import { SubmitButton } from '../../components/Buttons';

const SignUpPage = () => (

	<div id="formContainer">
		<h2 id="formTitle">Create an Account</h2>
		<form 
			autoCapitalize="off" 
			autoCorrect="off" 
			spellCheck="false"
			className="form-horizontal">
			<FormGroup
				label="First Name"
				id="firstName"
			/>
			<FormGroup
				label="Last Name"
				id="lastName"
			/>
			<FormGroup
				label="Username"
				id="username"
			/>
			<FormGroup
				label="Email"
				id="email"
				type="email"
			/>
			<FormGroup
				label="Password"
				id="password"
				type="password"
			/>
			<div className="form-group">
			  <label htmlFor="certification" className="col-sm-5 control-label">Certification Level:</label>
			  <div className="col-sm-7">
				  <select className="form-control" id="certification">
				    <option value="private">Private Pilot</option>
				    <option value="commercial">Commercial Pilot</option>
				    <option value="cfi">CFI</option>
				    <option value="student">Student</option>
				  </select>
			  </div>
			</div>
			<div>
				<Link to="/TermsOfService">
					<button className="pull-right">Submit</button>
				</Link>
			</div>
		</form>
	</div>
);

export default SignUpPage;
