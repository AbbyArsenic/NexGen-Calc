import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../components/Buttons';
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
import { equations as eq } from '../../utils/calculations/equations';
import 
	{
		addPressureAltitudeTakeoff as addPressTO
	}
from '../../redux/actions/calculatedValues';

const FlightPlan = ({ dispatch, apiValues, userInput, calculatedValues, history }) => (
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
									dispatch(addAirportTakeoff(e.target.value));
								}}
							/>
							<span className="input-group-btn">
								<Button
									text="Submit"
									type="button"
									onClick={(e) => {
										API.getWx(apiValues.airportTakeoff)
											.then((res) => {
												console.log(res.data);
												let airportTakeoff 			= res.data.Info.ICAO,
													fieldElevationTakeoff 	= parseFloat(res.data.Info.Elevation)*3.28,
													altimeterTakeoff 		= parseFloat(res.data.Altimeter)/100,
													tempCTakeoff 			= '';

												if (res.data['Remarks-Info']['Temp-Decimal']) {
													tempCTakeoff = parseFloat(res.data['Remarks-Info']['Temp-Decimal']);
												} else {
													tempCTakeoff = parseFloat(res.data.Temperature);
												}

												// (res.data['Remarks-Info']['Temp-Decimal']) ? 
												// (tempCTakeoff = parseFloat(res.data['Remarks-Info']['Temp-Decimal'])) : 
												// (tempCTakeoff = parseFloat(res.data.Temperature));
													
												dispatch(addTO(
													{
														airportTakeoff,
														fieldElevationTakeoff,
														altimeterTakeoff,
														tempCTakeoff
													}
												));
											})
											.catch(err => console.log(err));
									  }}
								/>
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
									dispatch(addAirportLanding(e.target.value));
								}}
							/>
							<span className="input-group-btn">
								<Button
									text="Submit"
									type="button"
									onClick={(e) => {
										API.getWx(apiValues.airportLanding)
										.then((res) => {
											console.log(res.data);
											let airportLanding 			= res.data.Info.ICAO,
												fieldElevationLanding 	= parseFloat(res.data.Info.Elevation)*3.28,
												altimeterLanding		= parseFloat(res.data.Altimeter)/100,
												tempCLanding			= '';

												(res.data['Remarks-Info']['Temp-Decimal']) ? 
												(tempCLanding = parseFloat(res.data['Remarks-Info']['Temp-Decimal'])) : 
												(tempCLanding = parseFloat(res.data.Temperature));
											dispatch(addLA({
												airportLanding,
												fieldElevationLanding,
												altimeterLanding,
												tempCLanding
											}));
										})
										.catch(err => console.log(err));
									}}
								/>
							</span>
						</div>
					</div>
				</div>
			<AirportDataLanding />
			</div>
			<hr />
			<div>
				<Button
					text="Clear"
					onClick={e => {
						dispatch(clearUserInputs());
						dispatch(clearAPIInputs());
					}}
				/>
				<Button text="Continue"
          onClick={(e) => {
						const pressureAltitudeTakeoff = equations.PressureAltitudeTakeoff(apiValues.fieldElevationTakeoff, apiValues.altimeterTakeoff);
					  console.log(pressureAltitudeTakeoff);
						dispatch(addPressTO(pressureAltitudeTakeoff));
					}}
        />
			</div>
		</div>
); 


const mapStateToProps = (state) => {
	return {
		apiValues: state.apiValues,
		userInput: state.userInput,
		calculatedValues: state.calculatedValues
	};
};

export default connect(mapStateToProps)(FlightPlan);
