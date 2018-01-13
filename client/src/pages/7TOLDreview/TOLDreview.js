import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/Buttons';
import FormGroup from "../../components/Forms/FormGroup";

import "./TOLDreview.css";

import 
  {
    addPressureAltitudeTakeoff,
    addPressureAltitudeLanding,
    addDensityAltitudeTakeoff,
    addDensityAltitudeLanding,
    addTakeoffRoll,
    addLiftoffSpeed,
    addLiftoffSpeed50Barrier,
    addAccelerateStop,
    addTakeoffDistance50Barrier,
    addClimbRate,
    addLandingRoll,
    addLandingDistance50,
  } 
from '../../redux/actions/calculatedValues';

const TOLDreview = ({ calculatedValues, dispatch }) => (
	<div className="contentPanel">
		<div className="row">
			<h2 className="centerText">TOLD Card Review</h2>
			<div className="col-md-6">
				<h3 className="centerText">Takeoff Airport:</h3>
				<form className="form-horizontal">
				  <FormGroup
				  	id="pAltTakeoff"
				  	label="P-ALT"
            placeholder="Pressure Altitude"
            value={
              (calculatedValues.pressureAltitudeTakeoff) ?
              (calculatedValues.pressureAltitudeTakeoff) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addPressureAltitudeTakeoff(x));
              }
            }}
          />
				  <FormGroup
				  	id="dAltTakeoff"
				  	label="D-ALT"
            placeholder="Density Altitude"
            value={
              (calculatedValues.densityAltitudeTakeoff) ?
              (calculatedValues.densityAltitudeTakeoff) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addDensityAltitudeTakeoff(x));
              }
            }}
				  />
				  <FormGroup
				  	id="toRoll"
				  	label="T.O. Roll"
            placeholder="Takeoff Roll"
            value={
              (calculatedValues.takeoffRoll) ?
              (calculatedValues.takeoffRoll) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addTakeoffRoll(x));
              }
            }}
          />
				  <FormGroup
				  	id="toRoll50"
				  	label="T.O. Roll 50'"
            placeholder="Takeoff Roll over 50' barrier"
            value={
              (calculatedValues.takeoffDistance50Barrier) ?
              (calculatedValues.takeoffDistance50Barrier) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addTakeoffDistance50Barrier(x));
              }
            }}
				  />
				  <FormGroup
				  	id="loSpeed"
				  	label="L.O. Speed"
            placeholder="Liftoff Speed"
            value={
              (calculatedValues.liftoffSpeed) ?
              (calculatedValues.liftoffSpeed) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addLiftoffSpeed(x));
              }
            }}
				  />
				  <FormGroup
				  	id="loSpeed50"
				  	label="L.O. Speed 50'"
            placeholder="Liftoff Speed over 50' barrier"
            value={
              (calculatedValues.liftoffSpeed50Barrier) ?
              (calculatedValues.liftoffSpeed50Barrier) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addLiftoffSpeed50Barrier(x));
              }
            }}
				  />
				  <FormGroup
				  	id="accStop"
				  	label="ACC-STOP"
            placeholder="Accelerate-Stop"
            value={
              (calculatedValues.accelerateStop) ?
              (calculatedValues.accelerateStop) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addAccelerateStop(x));
              }
            }}
				  />
				  <FormGroup
				  	id="climbRate"
				  	label="Climb Rate"
            placeholder="Rate of climb"
            value={
              (calculatedValues.climbRate) ?
              (calculatedValues.climbRate) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addClimbRate(x));
              }
            }}
				  />
				</form>
			</div>
			<div className="col-md-6">
				<h3 className="centerText">Landing Airport:</h3>
				<form className="form-horizontal">
				  <FormGroup
				  	id="pAltLanding"
				  	label="P-ALT"
            placeholder="Pressure Altitude"
            value={
              (calculatedValues.pressureAltitudeLanding) ?
              (calculatedValues.pressureAltitudeLanding) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addPressureAltitudeLanding(x));
              }
            }}
				  />
				  <FormGroup
				  	id="dAltLanding"
				  	label="D-ALT"
            placeholder="Density Altitude"
            value={
              (calculatedValues.densityAltitudeLanding) ?
              (calculatedValues.densityAltitudeLanding) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addDensityAltitudeLanding(x));
              }
            }}
				  />
				  <FormGroup
				  	id="landingRoll"
				  	label="Landing Dist."
            placeholder="Landing Roll"
            value={
              (calculatedValues.landingRoll) ?
              (calculatedValues.landingRoll) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addLandingRoll(x));
              }
            }}
				  />
				  <FormGroup
				  	id="landingDist50"
				  	label="Land. Dist. 50'"
            placeholder="Landing Dist. over 50' barrier"
            value={
              (calculatedValues.landingDistance50Barrier) ?
              (calculatedValues.landingDistance50Barrier) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addLandingDistance50(x));
              }
            }}
				  />
				  <FormGroup
				  	id="appSpeed"
				  	label="APP Speed"
            placeholder="Approach Speed"
            value={
              (calculatedValues.approachSpeed) ?
              (calculatedValues.approachSpeed) :
              ('')
            }
            onChange={(e) => {
              let x = e.target.value;

              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {                
                dispatch(addLandingDistance50(x));
              }
            }}
				  />
				</form>
  		<div className="pull-right" id="buttonGutter">
  			<Link to={"/FlightPlan"}>
  				<Button text="Back" />
  			</Link>{" "}
  			<Link to={"/TOLD-Card"}>
  				<Button text="Continue" />
  			</Link>
  		</div>
      </div>
    </div>
	</div>
);

const mapStateToProps = state => {
	return {
		calculatedValues: state.calculatedValues
	};
};

export default connect(mapStateToProps)(TOLDreview);
