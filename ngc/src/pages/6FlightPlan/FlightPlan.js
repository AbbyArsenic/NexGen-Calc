import React from 'react';
import { Link } from 'react-router-dom';

import { NextButton } from '../../components/Buttons';

const FlightPlan = () => (
	<div>
		<div>
			<h2>Airport of Departure data</h2>
			<table>
				<tr>
					<th>Elevation: </th>
					<td>
						<input name="elevationDepart" />
					</td>
				</tr>
				<tr>
					<th>Headwind: </th>
					<td>
						<input name="headwindDepart" />
					</td>
				</tr>
				<tr>
					<th>Takeoff: </th>
					<td>
						<input name="elevationDepart" />
					</td>
				</tr>
			</table>
		</div>
		<hr />
		<div>
			<h2>Airport of Arrival data</h2>
			<table>
				<tr>
					<th>Elevation: </th>
					<td>
						<input name="elevationArive" />
					</td>
				</tr>
				<tr>
					<th>Headwind: </th>
					<td>
						<input name="headwindArive" />
					</td>
				</tr>
				<tr>
					<th>Takeoff: </th>
					<td>
						<input name="elevationArive" />
					</td>
				</tr>
			</table>
		</div>
		<hr />
		<div>
			<button>Clear</button>
			<Link to={"/TakeOffData"}>
				<NextButton />
			</Link>
		</div>
	</div>
);

export default FlightPlan;
