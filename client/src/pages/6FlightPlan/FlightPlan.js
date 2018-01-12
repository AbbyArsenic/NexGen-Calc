import React from 'react';
// import { Link } from 'react-router-dom';
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
import { addPressureAltitudeBoth as addPA, addCalculatedValues } from '../../redux/actions/calculatedValues';

const eq = require('../../utils/calculations/equations');


const FlightPlan = ({ dispatch, apiValues, userInput, calculatedValues, history }) => (
		<div className="contentPanel">
			<div className="row">
				<h1 className="centerText">Flight Data</h1>
				<hr />
				<div className="col-md-6">
					<h2>Airport of Departure: </h2>
					<div className="row">
						<div className="col-sm-11">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder='Departure airport code (eg "KIWA")'
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
	                            (res.data['Remarks-Info']['Temp-Decimal']) ? 
	                            (tempCTakeoff = parseFloat(res.data['Remarks-Info']['Temp-Decimal'])) : 
	                            (tempCTakeoff = parseFloat(res.data.Temperature));
														
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
				<div className="col-md-6">
					<h2>Airport of Arrival: </h2>
					<div className="row">
						<div className="col-sm-11">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder='Arrival airport code'
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
			</div>
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
						const pressAltTO = eq.PressureAltitudeTakeoff(apiValues.fieldElevationTakeoff, apiValues.altimeterTakeoff);
						const pressAltLA = eq.PressureAltitudeLanding(apiValues.fieldElevationLanding, apiValues.altimeterLanding);
            const densAltTO = eq.DensityAltitudeTakeoff(pressAltTO, apiValues.tempCTakeoff);
            const densAltLA = eq.DensityAltitudeLanding(pressAltLA, apiValues.tempCLanding);
            const takeoffRoll = eq.TakeoffRoll(userInput.weightTakeoff, apiValues.tempCTakeoff, pressAltTO, userInput.headwindTakeoff);
            const liftoffSpeed = eq.LiftoffSpeed(userInput.weightTakeoff);
            const liftoffSpeed50 = eq.LiftoffSpeed50ftBarrier(userInput.weightTakeoff);
            const acclStop = eq.AccelerateStop(takeoffRoll);
            const takeoffdist50 = eq.TakeoffDistance50ftBarrier(userInput.weightTakeoff, apiValues.tempCTakeoff, pressAltTO, userInput.headwindTakeoff);
            const climbRate = eq.ClimbRate(apiValues.tempCTakeoff, pressAltTO);
            const landingRoll = eq.LandingRoll(apiValues.tempCLanding, pressAltLA, userInput.headwindLanding);
            const landDist50 = eq.LandingDistance50ftBarrier(apiValues.tempCLanding, pressAltLA, userInput.headwindLanding);

            dispatch(addPA(
              {
                pressureAltitudeTakeoff: pressAltTO,
                pressureAltitudeLanding: pressAltLA
              }
            ));

            dispatch(addCalculatedValues(
              {
                densityAltitudeTakeoff: densAltTO,
                densityAltitudeLanding: densAltLA,
                takeoffRoll,
                liftoffSpeed,
                liftoffSpeed50Barrier: liftoffSpeed50,
                accelerateStop: acclStop,
                takeoffDistance50Barrier: takeoffdist50,
                climbRate,
                landingRoll,
                landingDistance50Barrier: landDist50
              }
            ));     
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
