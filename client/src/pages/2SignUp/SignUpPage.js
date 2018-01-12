import React from 'react';
import { Link, Route } from 'react-router-dom';
import FormGroup from "../../components/Forms/FormGroup";
import Button from '../../components/Buttons';
import TermsOfService from "../3TermsOfService/TermsOfService";
import "./SignUp.css";

const SignUpPage = (props) => (

	<div className="contentPanel">
		<h2 className="centerElement">Create an Account</h2>
		<form 
			className="form-horizontal"
			id="signUpForm"
			autoCapitalize="off" 
			autoCorrect="off" 
			spellCheck="false">
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
			  <label htmlFor="certification" className="col-sm-4 control-label">Certification</label>
			  <div className="col-sm-8">
				  <select className="form-control" id="certification">
				    <option value="private">Private Pilot</option>
				    <option value="commercial">Commercial Pilot</option>
				    <option value="cfi">CFI</option>
				    <option value="student">Student</option>
				  </select>
			  </div>
			</div>
			<div>
				<p className="centerElement">By signing up, you agree to our{" "}
				<Link to={`${props.match.url}/tos`}>
				  Terms of Service
				</Link>.</p>
				<Route exact path={`${props.match.url}/tos`} component={TermsOfService} />
			</div>
			<div>
				<Button text="Submit" />
			</div>
		</form>
	</div>
);

export default SignUpPage;
