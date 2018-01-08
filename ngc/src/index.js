import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './redux/store/configureStore';
import { addUserInputsAll } from './redux/actions/userInput';
import { addAPIValuesAll } from './redux/actions/apiValues';
import { addPressureAltitudeBoth, addCalculatedValues } from './redux/actions/calculatedValues';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './utils/create-react-app/registerServiceWorker';

const store = configureStore();

store.dispatch(addUserInputsAll(
    {
        weightTakeoff: 2400,
        headwindTakeoff: 10,
        weightLanding: 2100,
        headwindLanding: -3
    }
));
store.dispatch(addAPIValuesAll(
    {
        fieldElevationTakeoff: 1389,
        altimeterTakeoff: 32.20,
        tempCTakeoff: 18.8889,
        fieldElevationLanding: 1389,
        altimeterLanding: 32.04,
        tempCLanding: 20.07
    }
));
store.dispatch(addPressureAltitudeBoth(
    { 
        pressureAltitudeTakeoff: 1127.0806794729692,
        pressureAltitudeLanding: 1130
    }
));
const allCalcVals = {
    densityAltitudeTakeoff: 1843.6819249523503,
    densityAltitudeLanding: 1847,
    takeoffRoll: 834.1935958254418,
    liftoffSpeed: 47.9999999999999994,
    liftoffSpeed50Barrier: 54.0000191109,
    accelerateStop: 2085.4839895636046,
    takeoffDistance50Barrier: 1412.19885246782,
    climbRate: 672.7213845608525,
    landingDistance: 539.6161063671439,
    landingDistance50Barrier: 1231.6910138381945 
};
store.dispatch(addCalculatedValues(allCalcVals));

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
