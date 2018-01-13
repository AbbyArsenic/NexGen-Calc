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
                    <th>Takeoff Weight: </th>
                    <td>
                        <input
                            className="form-control"
                            type='text'
                            name='weightTakeoff'
                            placeholder='Required'
                            value={(props.userInput.weightTakeoff) ?
                                (props.userInput.weightTakeoff) :
                                ('')}
                            onChange={(e) => {
                                props.dispatch(addWgt(parseFloat(e.target.value)));
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Takeoff Headwind: </th>
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
                                props.dispatch(addHW(parseFloat(e.target.value)));
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Temperature: </th>
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
                                props.dispatch(addTemp(parseFloat(e.target.value)));
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Altimeter: </th>
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
                                props.dispatch(addAlt(parseFloat(e.target.value)));
                            }}
                        />             
                    </td>
                </tr>
                <tr>
                    <th>Elevation: </th>
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
                                props.dispatch(addFE(parseFloat(e.target.value)));
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
