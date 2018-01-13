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
				<h1>  Flight Data</h1>
				<hr />
				<div className="col-md-6">
					<h2>Airport of Departure: </h2>
					<div className="row">
						<div className="col-sm-11">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder='Departure airport (eg "KIWA")'
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
													let airportTakeoff 			  = res.data.Info.ICAO,
														fieldElevationTakeoff 	= parseFloat(res.data.Info.Elevation)*3.28,
														altimeterTakeoff 		    = parseFloat(res.data.Altimeter)/100,
														tempCTakeoff 		      	= '';
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
												let airportLanding 			  = res.data.Info.ICAO,
													fieldElevationLanding 	= parseFloat(res.data.Info.Elevation)*3.28,
													altimeterLanding		    = parseFloat(res.data.Altimeter)/100,
													tempCLanding		      	= '';
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
			<div id="buttonGutter">
				<Button
					text="Clear"
					onClick={e => {
						dispatch(clearUserInputs());
						dispatch(clearAPIInputs());
					}}
				/>{" "}
				<Button text="Continue"
          onClick={(e) => {
						const pressAltTO  = parseFloat(eq.PressureAltitudeTakeoff(apiValues.fieldElevationTakeoff, apiValues.altimeterTakeoff).toFixed(2)),
						  pressAltLA      = parseFloat(eq.PressureAltitudeLanding(apiValues.fieldElevationLanding, apiValues.altimeterLanding).toFixed(2)),
              densAltTO       = parseFloat(eq.DensityAltitudeTakeoff(pressAltTO, apiValues.tempCTakeoff).toFixed(2)),
              densAltLA       = parseFloat(eq.DensityAltitudeLanding(pressAltLA, apiValues.tempCLanding).toFixed(2)),
              takeoffRoll     = parseFloat(eq.TakeoffRoll(userInput.weightTakeoff, apiValues.tempCTakeoff, pressAltTO, userInput.headwindTakeoff).toFixed(2)),
              liftoffSpeed    = parseFloat(eq.LiftoffSpeed(userInput.weightTakeoff).toFixed(2)),
              liftoffSpeed50  = parseFloat(eq.LiftoffSpeed50ftBarrier(userInput.weightTakeoff).toFixed(2)),
              acclStop        = parseFloat(eq.AccelerateStop(takeoffRoll).toFixed(2)),
              takeoffdist50   = parseFloat(eq.TakeoffDistance50ftBarrier(userInput.weightTakeoff, apiValues.tempCTakeoff, pressAltTO, userInput.headwindTakeoff).toFixed(2)),
              climbRate       = parseFloat(eq.ClimbRate(apiValues.tempCTakeoff, pressAltTO).toFixed(2)),
              approachSpeed   = parseFloat(calculatedValues.approachSpeed.toFixed(2)),
              landingRoll     = parseFloat(eq.LandingRoll(apiValues.tempCLanding, pressAltLA, userInput.headwindLanding).toFixed(2)),
              landDist50      = parseFloat(eq.LandingDistance50ftBarrier(apiValues.tempCLanding, pressAltLA, userInput.headwindLanding).toFixed(2));

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
                approachSpeed,
                landingRoll,
                landingDistance50Barrier: landDist50
              }
            ));
            history.push('/TOLDreview');
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
