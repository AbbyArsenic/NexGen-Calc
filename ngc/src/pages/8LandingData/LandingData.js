import React from 'react';
import { Link } from 'react-router-dom';

import { BackButton, NextButton } from '../../components/Buttons';

const LandingData = () => (
	<div>
		<h2>Landing Airport Name</h2>
		<div>
			<table>
				<caption>These values will pre-fill, but will be editable in the event that the user wants to edit anything</caption>
				<tbody>
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
						<th>Landing Weight: </th>
						<td>
							<input name="weight" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<Link to={"/TakeOffData"}>
			<BackButton />
		</Link>
		<Link to={"/TOLD-Card"}>
			<NextButton />
		</Link>
	</div>
);

export default LandingData;
