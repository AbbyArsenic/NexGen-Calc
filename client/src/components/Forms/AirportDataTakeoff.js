import React from 'react';
import { connect } from 'react-redux';

import
    {
        addAPIValueFieldElevationTakeoff as addFE,
        addAPIValueAltimeterTakeoff as addAlt,
        addAPIValueTempCTakeoff as addTemp
    }
from '../../redux/actions/apiValues';
import 
    {
        addWeightTakeoff as addWgt,
        addHeadwindTakeoff as addHW
    }
from '../../redux/actions/userInput';


const AirportDataTakeoff = (props) => (
    <div>
        <h2>Airport data</h2>
        <table>
            <tbody>
                <tr>
                    <th>Takeoff Weight (lbs): </th>
                    <td>
                        <input
                            className="form-control"
                            name='weightTakeoff'
                            placeholder='Required'
                            value={(props.userInput.weightTakeoff) ?
                                (props.userInput.weightTakeoff) :
                                ('')}
                            onChange={(e) => {
                              let x = e.target.value;

                              if (x.match(/^\d{1,7}(\.\d{0,2})?$/)) {                
                                props.dispatch(addWgt(e.target.value));
                              }
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Takeoff Headwind (knots): </th>
                    <td>
                        <input
                            className="form-control"
                            type='text'
                            name='headwindTakeoff'
                            placeholder='Required'
                            value={(props.userInput.headwindTakeoff) ?
                                (props.userInput.headwindTakeoff) :
                                ('')}
                            onChange={(e) => {
                              let x = e.target.value;

                              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {
                                props.dispatch(addHW(e.target.value));
                              }
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Temperature (Cel): </th>
                    <td>
                        <input 
                            className="form-control"
                            type='text'
                            name='tempCTakeoff'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.tempCTakeoff) ? 
                                (props.apiValues.tempCTakeoff) : 
                                ('')}
                            onChange={(e) => {
                              let x = e.target.value;

                              if (x.match(/^([-])?\d*(\.\d{0,2})?$/)) {
                                props.dispatch(addTemp(e.target.value));
                              }
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Altimeter (ft): </th>
                    <td>
                        <input 
                            className="form-control"
                            type='text'
                            name='altimeterTakeoff'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.altimeterTakeoff) ? 
                                (props.apiValues.altimeterTakeoff) : 
                                ('')}
                            onChange={(e) => {
                              let x = e.target.value;

                              if (x.match(/^\d{1,7}(\.\d{0,2})?$/)) {                
                                props.dispatch(addAlt(e.target.value));
                              }
                            }}
                        />             
                    </td>
                </tr>
                <tr>
                    <th>Elevation (ft): </th>
                    <td>
                        <input 
                            className="form-control"
                            type='text'
                            name='fieldElevationTakeoff'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.fieldElevationTakeoff) ? 
                                (props.apiValues.fieldElevationTakeoff) : 
                                ('')}
                            onChange={(e) => {
                              let x = e.target.value;

                              if (x.match(/^\d{1,7}(\.\d{0,2})?$/)) {                
                                props.dispatch(addFE(e.target.value));
                              }
                            }}
                        />             
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

const mapStateToProps = (state) => {
	return {
		apiValues: state.apiValues,
		userInput: state.userInput
	};
};

export default connect(mapStateToProps)(AirportDataTakeoff);
