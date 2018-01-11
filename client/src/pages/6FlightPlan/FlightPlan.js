import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { NextButton } from '../../components/Buttons';
import AirportDataTakeoff from '../../components/Forms/AirportDataTakeoff';
import AirportDataLanding from '../../components/Forms/AirportDataLanding';
import API from '../../utils/APIs/weatherAPI';
import { addUserInputsAll as clearUserInputs } from '../../redux/actions/userInput';
import 
	{
		addAPIValuesAll as clearAPIInputs,
		addAPIValuesTakeoff as addTO,
		addAPIValuesLanding as addLA,		
		addAirportTakeoff,
		addAirportLanding
	}
from '../../redux/actions/apiValues';

const FlightPlan = (props) => (
		<div>
			<div>
				<h2>Airport of Departure: </h2>
				<div className="row">
					<div className="col-sm-6">
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder='Search for airport (eg "KIWA" for Phoenix Mesa-Gateway Airport)'
								onChange={(e) => {
									props.dispatch(addAirportTakeoff(e.target.value));
								}}
							/>
							<span className="input-group-btn">
								<button
									className="btn btn-default"
									type="button"
									onClick={(e) => {
										e.preventDefault();
										API.getWx(props.apiValues.airportTakeoff)
											.then((res) => {
												console.log(res.data);
												let airportTakeoff = res.data.Info.ICAO,
												fieldElevationTakeoff = parseFloat(res.data.Info.Elevation)*3.28,
												altimeterTakeoff = parseFloat(res.data.Altimeter)/100,
												tempCTakeoff = parseFloat(res.data['Remarks-Info']['Temp-Decimal']);
												props.dispatch(addTO({
												airportTakeoff,
												fieldElevationTakeoff,
												altimeterTakeoff,
												tempCTakeoff
												}));
											})
											.catch(err => console.log(err));
									  }}
								>Submit</button>
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
							<input
								type="text"
								className="form-control"
								placeholder='Enter airport of arrival here'
								onChange={(e) => {
									props.dispatch(addAirportLanding(e.target.value));
								}}
							/>
							<span className="input-group-btn">
								<button
									className="btn btn-default"
									type="button"
									onClick={(e) => {
										// e.preventDefault();
										API.getWx(props.apiValues.airportLanding)
										.then((res) => {
											console.log(res.data);
											let airportLanding = res.data.Info.ICAO,
												fieldElevationLanding = parseFloat(res.data.Info.Elevation)*3.28,
												altimeterLanding = parseFloat(res.data.Altimeter)/100,
												tempCLanding = parseFloat(res.data['Remarks-Info']['Temp-Decimal']);
											props.dispatch(addLA({
												airportLanding,
												fieldElevationLanding,
												altimeterLanding,
												tempCLanding
											}));
										})
										.catch(err => console.log(err));
									}}
								>Submit</button>
							</span>
						</div>
					</div>
				</div>
			<AirportDataLanding />
			</div>
			<hr />
			<div>
				<button
					onClick={e => {
						e.preventDefault();
						props.dispatch(clearUserInputs());
						props.dispatch(clearAPIInputs());
					}}
				
				>Clear</button>
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
