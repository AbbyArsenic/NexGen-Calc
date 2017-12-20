import React from 'react';

const SignUpPage = () => (
	<div>
		<form>
			Email:<input name="email" /><br/>
			Username:<input name="username" /><br/>
			Password:<input name="password" /><br/>
			<input name="private" type="checkbox" />Private Pilot
			<input name="commercial" type="checkbox" />Commercial Pilot<br/>
			<input name="student" type="checkbox" />Student Pilot
			<input name="cfi" type="checkbox" />CFI

		</form>
	</div>
);

export default SignUpPage;
