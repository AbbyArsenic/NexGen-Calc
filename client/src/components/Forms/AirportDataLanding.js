import React from 'react';
import { connect } from 'react-redux';

import
    {
        addAPIValueFieldElevationLanding as addFE,
        addAPIValueAltimeterLanding as addAlt,
        addAPIValueTempCLanding as addTemp
    }
from '../../redux/actions/apiValues';
import 
    {
        addWeightLanding as addWgt,
        addHeadwindLanding as addHW
    }
from '../../redux/actions/userInput';

const AirportDataLanding = (props) => (
    <div>
        <h2>Airport data</h2>
        <table>
            <tbody>
                <tr>
                    <th>Landing Weight (lbs): </th>
                    <td>
                        <input
                            className="form-control"
                            type='text'
                            name='weightLanding'
                            placeholder='Required'
                            value={(props.userInput.weightLanding) ?
                                (props.userInput.weightLanding) :
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
                    <th>Landing Headwind (knots): </th>
                    <td>
                        <input
                            className="form-control"
                            type='text'
                            name='headwindLanding'
                            placeholder='Required'
                            value={(props.userInput.headwindLanding) ?
                                (props.userInput.headwindLanding) :
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
                            name='tempCLanding'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.tempCLanding) ? 
                                (props.apiValues.tempCLanding) : 
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
                            name='altimeterLanding'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.altimeterLanding) ? 
                                (props.apiValues.altimeterLanding) : 
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
                            type='number'
                            name='fieldElevationLanding'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.fieldElevationLanding) ? 
                                (props.apiValues.fieldElevationLanding) : 
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

export default connect(mapStateToProps)(AirportDataLanding);
