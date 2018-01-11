import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { NextButton } from '../../components/Buttons';
import AirportDataTakeoff from '../../components/Forms/AirportDataTakeoff';
import AirportDataLanding from '../../components/Forms/AirportDataLanding';

const FlightPlan = (props) => (
		<div>
			<div>
				<h2>Airport of Departure: </h2>
				<div className="row">
					<div className="col-sm-6">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Search for..." />
							<span className="input-group-btn">
								<button className="btn btn-default" type="button">Submit</button>
							</span>
						</div>
					</div>
				</div>
			<AirportDataTakeoff />
			</div>
			<hr />
			<div>
				<h2>Airport of Arrival: </h2>
				<div className="row">
					<div className="col-sm-6">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Search for..." />
							<span className="input-group-btn">
								<button className="btn btn-default" type="button">Submit</button>
							</span>
						</div>
					</div>
				</div>
			<AirportDataLanding />
			</div>
			<hr />
			<div>
				<button>Clear</button>
				<Link to={"/TOLDreview"}>
					<NextButton />
				</Link>
			</div>
		</div>
); 


const mapStateToProps = (state) => {
	return {
		apiValues: state.apiValues,
		userInput: state.userInput
	};
};

export default connect(mapStateToProps)(FlightPlan);




// class FlightPlan extends React.Component {
// 	state = {
// 		departSearch: '',
// 		departData: [],
// 		arriveSearch: '', 
// 		arriveData: []
// 	}; 

// 	//function to handle onChange for dropdown
// 	change = e => {
// 		const { name, value } = e.target;
// 		this.setState({
// 			[name]: value
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div>
// 					<h2>Airport of Departure: </h2>
// 					<div className="row">
// 					  <div className="col-sm-6">
// 					    <div className="input-group">
// 					      <input type="text" className="form-control" placeholder="Search for..." />
// 					      <span className="input-group-btn">
// 					        <button className="btn btn-default" type="button">Submit</button>
// 					      </span>
// 					    </div>
// 					  </div>
// 					</div>
// 					<h2>Airport data</h2>
// 					<table>
// 						<tbody>
// 						  <tr>
// 						  	<th>Temperature: </th>
// 						  	<td>
// 						  		<input name="tempDepart" />
// 						  	</td>
// 						  </tr>
// 						  <tr>
// 						  	<th>Altimeter: </th>
// 						  	<td>
// 						  		<input name="altimeterDepart" />
// 						  	</td>
// 						  </tr>
// 							<tr>
// 								<th>Elevation: </th>
// 								<td>
// 									<input name="elevationDepart" value={this.state.departSearch} />
// 								</td>
// 							</tr>
// 							<tr>
// 								<th>Headwind: </th>
// 								<td>
// 									<input name="headwindDepart" />
// 								</td>
// 							</tr>
// 							<tr>
// 								<th>Takeoff Weight: </th>
// 								<td>
// 									<input name="takeoffDepart" />
// 								</td>
// 							</tr>
// 						</tbody>
// 					</table>
// 				</div>
// 				<hr />
// 				<div>
// 					<h2>Airport of Arrival: </h2>
// 					<div className="row">
// 					  <div className="col-sm-6">
// 					    <div className="input-group">
// 					      <input type="text" className="form-control" placeholder="Search for..." />
// 					      <span className="input-group-btn">
// 					        <button className="btn btn-default" type="button">Submit</button>
// 					      </span>
// 					    </div>
// 					  </div>
// 					</div>
// 					<h2>Airport data</h2>
// 					<table>
// 						<tbody>
// 						  <tr>
// 						  	<th>Temperature: </th>
// 						  	<td>
// 						  		<input name="tempArrive" />
// 						  	</td>
// 						  </tr>
// 						  <tr>
// 						  	<th>Altimeter: </th>
// 						  	<td>
// 						  		<input name="altimeterArrive" />
// 						  	</td>
// 						  </tr>
// 							<tr>
// 								<th>Elevation: </th>
// 								<td>
// 									<input name="elevationArrive" />
// 								</td>
// 							</tr>
// 							<tr>
// 								<th>Headwind: </th>
// 								<td>
// 									<input name="headwindArrive" value={this.state.arriveSearch} />
// 								</td>
// 							</tr>
// 							<tr>
// 								<th>Takeoff Weight: </th>
// 								<td>
// 									<input name="TakeoffArrive" />
// 								</td>
// 							</tr>
// 						</tbody>
// 					</table>
// 				</div>
// 				<hr />
// 				<div>
// 					<button>Clear</button>
// 					<Link to={"/TOLDreview"}>
// 						<NextButton />
// 					</Link>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default FlightPlan;

