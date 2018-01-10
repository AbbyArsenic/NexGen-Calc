import React from 'react';

import { HomeButton, PrintButton } from '../../components/Buttons';
import "./TOLDCard.css";

const TOLDCard = () => (
  <div className="container">
    <div className="col-md-8 col-md-offset-2">	
      <table className="table table-bordered table-responsive table-condensed">
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
            <th colSpan="4" className="TOLDheader"><h4>Takeoff</h4></th>
          </tr>
          <tr>
            <td>Airport: </td>
            <td>P-ALT: </td>
          </tr>
          <tr>
            <td>Liftoff Speed: </td>
            <td>Liftoff Speed (50'): </td>
          </tr>
          <tr>
            <td>T.O. Roll: </td>
            <td>T.O. Roll (50'): </td>
          </tr>
          <tr>
            <td>ACC/Stop: </td>
            <td>Climb (FPM): </td>
          </tr>
          <tr>
            <th colSpan="4" className="TOLDheader"><h4>Landing</h4></th>
          </tr>
          <tr>
            <td>LND Roll: </td>
            <td>P-ALT: </td>
          </tr>
          <tr>
            <td>LND Roll (50'): </td>
            <td>APP Speed: </td>
          </tr>
          <tr>
            <th colSpan="4" className="TOLDheader"><h4>ATIS</h4></th>
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
    <div className="col-md-1">
  		<PrintButton />
  		<HomeButton />
  	</div>
  </div>
);

export default TOLDCard;
