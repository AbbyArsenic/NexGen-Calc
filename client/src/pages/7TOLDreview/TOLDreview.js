import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/Buttons';
import FormGroup from "../../components/Forms/FormGroup";

import "./TOLDreview.css";

const TOLDreview = ({ calculatedValues }) => (
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
            value={(calculatedValues.pressureAltitudeTakeoff) &&
              ((calculatedValues.pressureAltitudeTakeoff).toFixed(2))
            }
          />
				  <FormGroup
				  	id="dAltTakeoff"
				  	label="D-ALT"
            placeholder="Density Altitude"
            value={(calculatedValues.densityAltitudeTakeoff) &&
              ((calculatedValues.densityAltitudeTakeoff).toFixed(2))
            }
				  />
				  <FormGroup
				  	id="toRoll"
				  	label="T.O. Roll"
            placeholder="Takeoff Roll"
            value={(calculatedValues.takeoffRoll) &&
              ((calculatedValues.takeoffRoll).toFixed(2))
            }
				  />
				  <FormGroup
				  	id="toRoll50"
				  	label="T.O. Roll 50'"
            placeholder="Takeoff Roll over 50' barrier"
            value={(calculatedValues.takeoffDistance50Barrier) &&
              ((calculatedValues.takeoffDistance50Barrier).toFixed(2))
            }
				  />
				  <FormGroup
				  	id="loSpeed"
				  	label="L.O. Speed"
            placeholder="Liftoff Speed"
            value={(calculatedValues.liftoffSpeed) &&
              ((calculatedValues.liftoffSpeed).toFixed(2))
            }
				  />
				  <FormGroup
				  	id="loSpeed50"
				  	label="L.O. Speed 50'"
            placeholder="Liftoff Speed over 50' barrier"
            value={(calculatedValues.liftoffSpeed50Barrier) &&
              ((calculatedValues.liftoffSpeed50Barrier).toFixed(2))
            }
				  />
				  <FormGroup
				  	id="accStop"
				  	label="ACC/STOP"
            placeholder="Accelerate-Stop"
            value={(calculatedValues.accelerateStop) &&
              ((calculatedValues.accelerateStop).toFixed(2))
            }
				  />
				  <FormGroup
				  	id="climbRate"
				  	label="Climb Rate"
            placeholder="Rate of climb"
            value={(calculatedValues.climbRate) &&
              ((calculatedValues.climbRate).toFixed(2))
            }
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
            value={(calculatedValues.pressureAltitudeLanding) && 
              ((calculatedValues.pressureAltitudeLanding).toFixed(2))}
				  />
				  <FormGroup
				  	id="dAltLanding"
				  	label="D-ALT"
            placeholder="Density Altitude"
            value={(calculatedValues.densityAltitudeLanding) && 
              ((calculatedValues.densityAltitudeLanding).toFixed(2))}
				  />
				  <FormGroup
				  	id="landingRoll"
				  	label="Landing Dist."
            placeholder="Landing Roll"
            value={(calculatedValues.landingRoll) && 
              ((calculatedValues.landingRoll).toFixed(2))}
				  />
				  <FormGroup
				  	id="landingDist50"
				  	label="Land. Dist. 50'"
            placeholder="Landing Dist. over 50' barrier"
            value={(calculatedValues.landingDistance50Barrier) && 
              ((calculatedValues.landingDistance50Barrier).toFixed(2))}
				  />
				  <FormGroup
				  	id="appSpeed"
				  	label="APP Speed"
            placeholder="Approach Speed"
            value={(calculatedValues.approachSpeed) && 
              ((calculatedValues.approachSpeed).toFixed(2))}
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
