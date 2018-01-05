import React from 'react';
import { Link } from 'react-router-dom';

import { HomeButton, PrintButton } from '../../components/Buttons';

const TOLDCard = () => (
	<div>	
		<h2>TOLD Card info to be displayed here </h2>
		<PrintButton />
		<Link to={"/"}>
			<HomeButton />
		</Link>
	</div>
);

export default TOLDCard;
