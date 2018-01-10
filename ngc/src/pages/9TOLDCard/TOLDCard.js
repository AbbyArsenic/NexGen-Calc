import React from 'react';

import { HomeButton, PrintButton } from '../../components/Buttons';
import "./TOLDCard.css";

const TOLDCard = () => (
  <div className="container">
    <div className="col-md-8 col-md-offset-2">	
      <table className="table table-bordered table-responsive table-condensed">
        <thead>
          <tr>
            <td colSpan="4">
              <h2 className="TOLDtitle">C-172SP Takeoff and Landing Data (TOLD)</h2>
              <p>Serials 172S10468, 172S10507, 172S10640, and 172S10656 and on</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="4"><h3>Takeoff</h3></th>
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
            <th colSpan="4"><h3>Landing</h3></th>
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
            <th colSpan="4"><h3>ATIS</h3></th>
          </tr>
          <tr>
            <td colSpan="4" id="atisNotes"></td>
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
