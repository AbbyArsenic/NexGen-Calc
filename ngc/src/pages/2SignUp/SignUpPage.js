import React from 'react';
import { Link } from 'react-router-dom';

import { SubmitButton } from '../../components/Buttons';

const SignUpPage = () => (
	<div>
		<form>
			Username:<input name="username" /><br/>
			First Name:<input name="firstName" /><br/>
			Last Name:<input name="lastName" /><br/>
			Email:<input name="email" /><br/>
			Password:<input type="password" name="password" /><br/>
			<input name="private" type="checkbox" />Private Pilot
			<input name="commercial" type="checkbox" />Commercial Pilot<br/>
			<input name="student" type="checkbox" />Student Pilot
			<input name="cfi" type="checkbox" />CFI<br />
			<Link to={'/TermsOfService'} >
				<SubmitButton />
			</Link>
		</form>
	</div>
);

export default SignUpPage;
