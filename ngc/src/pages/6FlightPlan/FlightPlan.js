import React from 'react';
import { Link } from 'react-router-dom';

import { NextButton } from '../../components/Buttons';

class FlightPlan extends React.Component {
	state = {
		departSearch: '',
		departData: [],
		arriveSearch: '', 
		arriveData: []
	}; 

	//function to handle onChange for dropdown
	change = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div>
				<div>
					<h2>Airport of Departure: </h2>
					<select 
						name="departSearch"
						value={this.state.departSearch}
						onChange={this.change}>
						<option value="">---</option>
						<option value="KIWA">KIWA (AZ-Gateway)</option>
					</select>
					<h2>Airport data</h2>
					<table>
						<tbody>
							<tr>
								<th>Airport: </th>
								<td>
									<input name="elevationDepart" value={this.state.departSearch} />
								</td>
							</tr>
							<tr>
								<th>Headwind: </th>
								<td>
									<input name="headwindDepart" />
								</td>
							</tr>
							<tr>
								<th>Takeoff Weight: </th>
								<td>
									<input name="takeoffDepart" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<hr />
				<div>
					<h2>Airport of Arrival: </h2>
					<select 
						name="arriveSearch"
						value={this.state.arriveSearch}
						onChange={this.change}>
						<option value="">---</option>
						<option value="KIWA">KIWA (AZ-Gateway)</option>
					</select>
					<h2>Airport data</h2>
					<table>
						<tbody>
							<tr>
								<th>Elevation: </th>
								<td>
									<input name="elevationArrive" />
								</td>
							</tr>
							<tr>
								<th>Headwind: </th>
								<td>
									<input name="headwindArrive" value={this.state.arriveSearch} />
								</td>
							</tr>
							<tr>
								<th>Takeoff Weight: </th>
								<td>
									<input name="TakeoffArrive" />
								</td>
							</tr>
						</tbody>
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
		)
	}
}

export default FlightPlan;
