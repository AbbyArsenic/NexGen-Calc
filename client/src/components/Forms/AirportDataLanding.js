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
                    <th>Landing Weight: </th>
                    <td>
                        <input
                            type='text'
                            name='weightLanding'
                            placeholder='Required'
                            value={(props.userInput.weightLanding) ?
                                (props.userInput.weightLanding) :
                                ('')}
                            onChange={(e) => {
                                props.dispatch(addWgt(parseFloat(e.target.value)));
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Landing Headwind: </th>
                    <td>
                        <input
                            type='text'
                            name='headwindLanding'
                            placeholder='Required'
                            value={(props.userInput.headwindLanding) ?
                                (props.userInput.headwindLanding) :
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
                            type='text'
                            name='tempCLanding'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.tempCLanding) ? 
                                (props.apiValues.tempCLanding) : 
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
                            type='text'
                            name='altimeterLanding'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.altimeterLanding) ? 
                                (props.apiValues.altimeterLanding) : 
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
                            type='number'
                            name='fieldElevationLanding'
                            placeholder='Enter airport code above'
                            value={(props.apiValues.fieldElevationLanding) ? 
                                (props.apiValues.fieldElevationLanding) : 
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

export default connect(mapStateToProps)(AirportDataLanding);
