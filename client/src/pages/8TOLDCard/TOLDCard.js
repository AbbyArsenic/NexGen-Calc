import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/Buttons';

import "./TOLDCard.css";

const printTOLD = () => {
  window.print();
}

const TOLDCard = ({ calculatedValues: val }) => (
  <div className="container">
    <div className="col-md-8 col-sm-11">	
      <table 
        className="table table-bordered table-condensed"
        id="TOLDtable">
        <thead className="TOLDheader">
          <tr>
            <td colSpan="4">
              <h3 className="TOLDtitle">C-172SP Takeoff and Landing Data (TOLD)</h3>
              <p>Serials 172S10468, 172S10507, 172S10640, and 172S10656 and on</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="4" className="TOLDheader">
              <h4>Takeoff</h4>
            </th>
          </tr>
          <tr>
            <td>P-ALT: <span className='TOLDvalue'>{val.pressureAltitudeTakeoff} FT</span></td>
            <td>D-ALT: <span className='TOLDvalue'>{val.densityAltitudeTakeoff} FT</span></td>
          </tr>
          <tr>
            <td>Liftoff Speed: <span className='TOLDvalue'>{val.liftoffSpeed} KTS</span></td>
            <td>Liftoff Speed (50'): <span className='TOLDvalue'>{val.liftoffSpeed50Barrier} KTS</span></td>
          </tr>
          <tr>
            <td>T.O. Roll: <span className='TOLDvalue'>{val.takeoffRoll} FT</span></td>
            <td>T.O. Roll (50'): <span className='TOLDvalue'>{val.takeoffDistance50Barrier} FT</span></td>
          </tr>
          <tr>
            <td>ACC-Stop: <span className='TOLDvalue'>{val.accelerateStop} FT</span></td>
            <td>Climb (FPM): <span className='TOLDvalue'>{val.climbRate} FPM</span></td>
          </tr>
          <tr>
            <th colSpan="4" className="TOLDheader">
              <h4>Landing</h4>
            </th>
          </tr>
          <tr>
            <td>P-ALT: <span className='TOLDvalue'>{val.pressureAltitudeLanding}  FT</span></td>
            <td>D-ALT: <span className='TOLDvalue'>{val.densityAltitudeLanding}  FT</span></td>
          </tr>
          <tr>
            <td>LND Dist: <span className='TOLDvalue'>{val.landingRoll}  FT</span></td>
            <td>LND Dist. (50'): <span className='TOLDvalue'>{val.landingDistance50Barrier}  FT</span></td>
          </tr>
          <tr>
            <td>APP Speed: <span className='TOLDvalue'>{val.approachSpeed} KTS</span></td>
          </tr>
          <tr>
            <th colSpan="4" className="TOLDheader">
              <h4>ATIS</h4>
            </th>
          </tr>
          <tr>
            <td colSpan="4" id="atisNotes"></td>
          </tr>
          <tr>
            <td colSpan="4" className="TOLDheader">
              <p>CALCULATED DATA MAY NOT REPRESENT EXACT VALUES,
              <br />ALWAYS REFER TO THE POH FOR CALCULATIONS</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="hidePrint col-sm-1 col-md-3">
      <Link to="./TOLDreview"><Button text="Back" /></Link>{" "}
      <button className="btn" onClick={printTOLD}>
        <span className="glyphicon glyphicon-print"></span> Print
      </button>
  	</div>
  </div>
);

const mapStateToProps = state => {
	return {
		calculatedValues: state.calculatedValues
	};
};

export default connect(mapStateToProps)(TOLDCard);
