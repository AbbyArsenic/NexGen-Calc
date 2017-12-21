import React from 'react';
import { Link } from 'react-router-dom';

import { NextButton } from '../../components/Buttons';

const TakeOffData = () => (
	<div>
		<h2>Departing Airport Name</h2>
		<div>
			<table>
				<caption>These values will pre-fill, but will be editable in the event that the user wants to edit anything</caption>
				<tr>
					<th>Elevation: </th>
					<td>
						<input name="elevation" />
					</td>
				</tr>
				<tr>
					<th>Temperature: </th>
					<td>
						<input name="temp" />
					</td>
				</tr>
				<tr>
					<th>Altimeter: </th>
					<td>
						<input name="altimeter" />
					</td>
				</tr>
				<tr>
					<th>Head Wind: </th>
					<td>
						<input name="headwind" />
					</td>
				</tr>
				<tr>
					<th>Take Off Weight: </th>
					<td>
						<input name="weight" />
					</td>
				</tr>
			</table>
		</div>
		<Link to={"/LandingData"}>
			<NextButton />
		</Link>
	</div>
);

export default TakeOffData;
