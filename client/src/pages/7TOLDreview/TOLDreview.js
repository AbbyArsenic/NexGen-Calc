import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons';
import FormGroup from "../../components/Forms/FormGroup";
import "./TOLDreview.css";

const TOLDreview = () => (
	<div>
		<div className="row">
			<h2 className="centerText">TOLD Card Review</h2>
			<div className="col-md-5">
				<h3 className="centerText">Takeoff Airport: (pull from input)</h3>
				<form className="form-horizontal">
				  <FormGroup
				  	id="pAltTakeoff"
				  	label="P-ALT"
				  	placeholder="Pressure Altitude"
				  />
				  <FormGroup
				  	id="dAltTakeoff"
				  	label="D-ALT"
				  	placeholder="Density Altitude"
				  />
				  <FormGroup
				  	id="toRoll"
				  	label="T.O. Roll"
				  	placeholder="Takeoff Roll"
				  />
				  <FormGroup
				  	id="toRoll50"
				  	label="T.O. Roll 50'"
				  	placeholder="Takeoff Roll over 50' barrier"
				  />
				  <FormGroup
				  	id="loSpeed"
				  	label="L.O. Speed"
				  	placeholder="Liftoff Speed"
				  />
				  <FormGroup
				  	id="loSpeed50"
				  	label="L.O. Speed 50'"
				  	placeholder="Liftoff Speed over 50' barrier"
				  />
				  <FormGroup
				  	id="accStop"
				  	label="ACC/STOP"
				  	placeholder="Accelerate-Stop"
				  />
				  <FormGroup
				  	id="climbRate"
				  	label="Climb Rate"
				  	placeholder="Rate of climb"
				  />
				</form>
			</div>
			<div className="col-md-5">
				<h3 className="centerText">Landing Airport: (pull from input)</h3>
				<form className="form-horizontal">
				  <FormGroup
				  	id="pAltLanding"
				  	label="P-ALT"
				  	placeholder="Pressure Altitude"
				  />
				  <FormGroup
				  	id="dAltLanding"
				  	label="D-ALT"
				  	placeholder="Density Altitude"
				  />
				  <FormGroup
				  	id="landingDist"
				  	label="Landing Dist."
				  	placeholder="Landing Distance"
				  />
				  <FormGroup
				  	id="landingDist50"
				  	label="Land. Dist. 50'"
				  	placeholder="Landing Dist. over 50' barrier"
				  />
				  <FormGroup
				  	id="appSpeed"
				  	label="APP Speed"
				  	placeholder="Approach Speed"
				  />
				</form>
			</div>
		</div>
		<div className="col-md-1 col-md-offset-11">
			<Link to={"/FlightPlan"}>
				<Button text="Back" />
			</Link>
			<Link to={"/TOLD-Card"}>
				<Button text="Continue" />
			</Link>
		</div>
	</div>
);

export default TOLDreview;
