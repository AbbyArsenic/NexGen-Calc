import React from 'react';
import { Link } from 'react-router-dom';
import { BackButton, NextButton } from '../../components/Buttons';
import FormGroup from "../../components/FormGroup";
import "./TOLDreview.css";

const TOLDreview = () => (
	<div>
		<div className="row">
			<h2>TOLD Card Review</h2>
			<div className="col-md-5">
				<h3>Takeoff Airport: (pull from input)</h3>
				<form className="form-horizontal">
				  <FormGroup
				  	id="pAltTakeoff"
				  	label="Pressure Altitude"
				  	placeholder="P-ALT"
				  />
				  <FormGroup
				  	id="dAltTakeoff"
				  	label="Density Altitude"
				  	placeholder="D-ALT"
				  />
				  <FormGroup
				  	id="toRoll"
				  	label="Takeoff Roll"
				  	placeholder="T.O. Roll"
				  />
				  <FormGroup
				  	id="toRoll50"
				  	label="Takeoff Roll (50')"
				  	placeholder="T.O. Roll over 50' barrier"
				  />
				  <FormGroup
				  	id="loSpeed"
				  	label="Liftoff Speed"
				  	placeholder="L.O. Speed"
				  />
				  <FormGroup
				  	id="loSpeed50"
				  	label="Liftoff Speed (50')"
				  	placeholder="L.O. Speed over 50' barrier"
				  />
				  <FormGroup
				  	id="accStop"
				  	label="Accelerate/Stop"
				  	placeholder="ACC/STOP"
				  />
				  <FormGroup
				  	id="climbRate"
				  	label="Climb Rate"
				  	placeholder="Rate of climb"
				  />
				</form>
			</div>
			<div className="col-md-5">
				<h3>Landing Airport: (pull from input)</h3>
				<form className="form-horizontal">
				  <FormGroup
				  	id="pAltLanding"
				  	label="Pressure Altitude"
				  	placeholder="P-ALT"
				  />
				  <FormGroup
				  	id="dAltLanding"
				  	label="Density Altitude"
				  	placeholder="D-ALT"
				  />
				  <FormGroup
				  	id="landingDist"
				  	label="Landing Distance"
				  	placeholder="Landing Dist."
				  />
				  <FormGroup
				  	id="landingDist50"
				  	label="Landing Distance (50')"
				  	placeholder="Landing Dist. over 50' barrier"
				  />
				</form>
			</div>
		</div>
		<div className="col-md-1 col-md-offset-11">
			<Link to={"/FlightPlan"}>
				<BackButton />
			</Link>
			<Link to={"/TOLD-Card"}>
				<NextButton />
			</Link>
		</div>
	</div>
);

export default TOLDreview;
