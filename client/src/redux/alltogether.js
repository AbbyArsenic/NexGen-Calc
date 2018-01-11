import { createStore, combineReducers } from 'redux';
 

// Actions 
    // Add User Input Values
        const addWeightTakeoff = weight => ({
            type: 'ADD_WEIGHT_TAKEOFF',
            weight
        });
        const addHeadwindTakeoff = headwind => ({
            type: 'ADD_HEADWIND_TAKEOFF',
            headwind
        });
        const addWeightLanding = weight => ({
            type: 'ADD_WEIGHT_LANDING',
            weight
        });
        const addHeadwindLanding = headwind => ({
            type: 'ADD_HEADWIND_LANDING',
            headwind
        });
        const addUserInputsTakeoff = (
            {
                weightTakeoff = undefined,
                headwindTakeoff = undefined
            } = {}
        ) => ({
            type: 'ADD_USER_INPUTS_TAKEOFF',
            newValues: {
                weightTakeoff,
                headwindTakeoff
            }
        });
        const addUserInputsLanding = (
            {
                weightLanding = undefined,
                headwindLanding = undefined
            } = {}
        ) => ({
            type: 'ADD_USER_INPUTS_LANDING',
            newValues: {
                weightLanding,
                headwindLanding
            }
        });
        const addUserInputsAll = (
            {
                weightTakeoff = undefined,
                headwindTakeoff = undefined,
                weightLanding = undefined,
                headwindLanding = undefined
            } = {}
        ) => ({
            type: 'ADD_USER_INPUTS_ALL',
            newValues: {
                weightTakeoff,
                headwindTakeoff,
                weightLanding,
                headwindLanding
            }
        });

    // Add API Values
        const addAPIValuesTakeoff = (
            {
                fieldElevationTakeoff = undefined,
                altimeterTakeoff = undefined,
                tempCTakeoff = undefined
            } = {}
        ) => ({
            type: 'ADD_API_VALUES_TAKEOFF',
            newValues: {
                fieldElevationTakeoff,
                altimeterTakeoff,
                tempCTakeoff
            }
        });
        const addAPIValuesLanding = (
            {
                fieldElevationLanding = undefined,
                altimeterLanding = undefined,
                tempCLanding = undefined
            } = {}
        ) => ({
            type: 'ADD_API_VALUES_LANDING',
            newValues: {
                fieldElevationLanding,
                altimeterLanding,
                tempCLanding
            }
        });
        const addAPIValuesAll = (
            {
                fieldElevationTakeoff = undefined,
                altimeterTakeoff = undefined,
                tempCTakeoff = undefined,
                fieldElevationLanding = undefined,
                altimeterLanding = undefined,
                tempCLanding = undefined
            } = {}
        ) => ({
            type: 'ADD_API_VALUES_ALL',
            newValues: {
                fieldElevationTakeoff,
                altimeterTakeoff,
                tempCTakeoff,
                fieldElevationLanding,
                altimeterLanding,
                tempCLanding
            }
        });

    // Add Calculated Values
        const addPressureAltitudeTakeoff = (pressureAltitudeTakeoff = undefined) => ({
            type: 'ADD_PRESSURE_ALTITUDE_TAKEOFF',
            pressureAltitudeTakeoff
        });
        const addPressureAltitudeLanding = (pressureAltitudeLanding = undefined) => ({
            type: 'ADD_PRESSURE_ALTITUDE_LANDING',
            pressureAltitudeLanding
        });
        const addPressureAltitudeBoth = (
            {
                pressureAltitudeTakeoff = undefined,
                pressureAltitudeLanding = undefined
            }
        ) => ({
            type: 'ADD_PRESSURE_ALTITUDE_BOTH',
            newValues: {
                pressureAltitudeTakeoff,
                pressureAltitudeLanding
            }
        });
        const addDensityAltitudeTakeoff = (densityAltitudeTakeoff = undefined) => ({
            type: 'ADD_DENSITY_ALTITUDE_TAKEOFF',
            densityAltitudeTakeoff
        });
        const addDensityAltitudeLanding = (densityAltitudeLanding = undefined) => ({
            type: 'ADD_DENSITY_ALTITUDE_LANDING',
            densityAltitudeLanding
        });
        const addDensityAltitudeBoth = (
            {
                densityAltitudeTakeoff = undefined,
                densityAltitudeLanding = undefined
            }
        ) => ({
            type: 'ADD_DENSITY_ALTITUDE_BOTH',
            newValues: {
                densityAltitudeTakeoff,
                densityAltitudeLanding
            }
        });
        const addTakeoffRoll = (takeoffRoll = undefined) => ({
            type: 'ADD_TAKEOFF_ROLL',
            takeoffRoll
        });
        const addLiftoffSpeed = (liftoffSpeed = undefined) => ({
            type: 'ADD_LIFTOFF_SPEED',
            liftoffSpeed
        });
        const addLiftoffSpeed50Barrier = (liftoffSpeed50Barrier = undefined) => ({
            type: 'ADD_LIFTOFF_SPEED50',
            liftoffSpeed50Barrier
        });
        const addAccelerateStop = (accelerateStop = undefined) => ({
            type: 'ADD_ACCELERATE_STOP',
            accelerateStop
        });
        const addTakeoffDistance50Barrier = (takeoffDistance50Barrier = undefined) => ({
            type: 'ADD_TAKEOFF_DISTANCE',
            takeoffDistance50Barrier
        });
        const addClimbRate = (climbRate = undefined) => ({
            type: 'ADD_CLIMB_RATE',
            climbRate
        });
        const addLandingDistance = (landingDistance = undefined) => ({
            type: 'ADD_LANDING_DISTANCE',
            landingDistance
        });
        const addLandingDistance50 = (landingDistance50Barrier = undefined) => ({
            type: 'ADD_LANDING_DISTANCE50',
            landingDistance50Barrier
        });
        const addCalculatedValues = (
            {
                densityAltitudeTakeoff = undefined,
                densityAltitudeLanding = undefined,
                takeoffRoll = undefined,
                liftoffSpeed = undefined,
                liftoffSpeed50Barrier = undefined,
                accelerateStop = undefined,
                takeoffDistance50Barrier = undefined,
                climbRate = undefined,
                landingDistance = undefined,
                landingDistance50Barrier = undefined
            } = {}
        ) => ({
            type: 'ADD_CALCULATED_VALUES_ALL',
            newValues: {
                densityAltitudeTakeoff,
                densityAltitudeLanding,
                takeoffRoll,
                liftoffSpeed,
                liftoffSpeed50Barrier,
                accelerateStop,
                takeoffDistance50Barrier,
                climbRate,
                landingDistance,
                landingDistance50Barrier
            }
        });

// Reducers 
    // User Input 
        const userInputReducerDefaultState = {
            weightTakeoff: undefined,
            headwindTakeoff: undefined,
            weightLanding: undefined,
            headwindLanding: undefined
        };

        const userInputReducer = (state = userInputReducerDefaultState, action) => {
            switch (action.type) {
                case 'ADD_WEIGHT_TAKEOFF':
                    return {
                        ...state,
                        weightTakeoff: action.weight
                    };
                case 'ADD_HEADWIND_TAKEOFF':
                    return {
                        ...state,
                        headwindTakeoff: action.headwind
                    };
                case 'ADD_WEIGHT_LANDING':
                    return {
                        ...state,
                        weightLanding: action.weight
                    };
                case 'ADD_HEADWIND_LANDING':
                    return {
                        ...state,
                        headwindLanding: action.headwind
                    };
                case 'ADD_USER_INPUTS_TAKEOFF':
                    return {
                        ...state,
                        ...action.newValues
                    }
                case 'ADD_USER_INPUTS_LANDING':
                    return {
                        ...state,
                        ...action.newValues
                    }
                case 'ADD_USER_INPUTS_ALL':
                    return {
                        ...state,
                        ...action.newValues
                    }
                default:
                    return state;
            }
        };

    // API Values
        const apiReducerDefaultState = {
            fieldElevationTakeoff: undefined,
            altimeterTakeoff: undefined,
            tempCTakeoff: undefined,
            fieldElevationLanding: undefined,
            altimeterLanding: undefined,
            tempCLanding: undefined
        };

        const apiReducer = (state = apiReducerDefaultState, action) => {
            switch (action.type) {
                case 'ADD_API_VALUES_TAKEOFF':
                    return {
                        ...state,
                        ...action.newValues
                    }
                case 'ADD_API_VALUES_LANDING':
                    return {
                        ...state,
                        ...action.newValues
                    }
                case 'ADD_API_VALUES_ALL':
                    return {
                        ...state,
                        ...action.newValues
                    }
                default:
                    return state;
            }
        };

    // Calculated Values
        const calculatedValuesReducerDefaultState = {
            pressureAltitudeTakeoff: undefined,
            pressureAltitudeLanding: undefined,
            densityAltitudeTakeoff: undefined,
            densityAltitudeLanding: undefined,
            takeoffRoll: undefined,
            liftoffSpeed: undefined,
            liftoffSpeed50Barrier: undefined,
            accelerateStop: undefined,
            takeoffDistance50Barrier: undefined,
            climbRate: undefined,
            landingDistance: undefined,
            landingDistance50Barrier: undefined
        };

        const calculatedValuesReducer = (state = calculatedValuesReducerDefaultState, action) => {
            switch (action.type) {
                case 'ADD_PRESSURE_ALTITUDE_TAKEOFF':
                    return {
                        ...state,
                        pressureAltitudeTakeoff: action.pressureAltitudeTakeoff
                    };
                case 'ADD_PRESSURE_ALTITUDE_LANDING':
                    return {
                        ...state,
                        pressureAltitudeLanding: action.pressureAltitudeLanding
                    };
                case 'ADD_PRESSURE_ALTITUDE_BOTH':
                    return {
                        ...state,
                        ...action.newValues
                    };
                case 'ADD_DENSITY_ALTITUDE_TAKEOFF':
                    return {
                        ...state,
                        densityAltitudeTakeoff: action.densityAltitudeTakeoff
                    };
                case 'ADD_DENSITY_ALTITUDE_LANDING':
                    return {
                        ...state,
                        densityAltitudeLanding: action.densityAltitudeLanding
                    };
                case 'ADD_DENSITY_ALTITUDE_BOTH':
                    return {
                        ...state,
                        ...action.newValues
                    };
                case 'ADD_TAKEOFF_ROLL':
                    return {
                        ...state,
                        takeoffRoll: action.takeoffRoll
                    };
                case 'ADD_LIFTOFF_SPEED':
                    return {
                        ...state,
                        liftoffSpeed: action.liftoffSpeed
                    };
                case 'ADD_LIFTOFF_SPEED50':
                    return {
                        ...state,
                        liftoffSpeed50Barrier: action.liftoffSpeed50Barrier
                    };
                case 'ADD_ACCELERATE_STOP':
                    return {
                        ...state,
                        accelerateStop: action.accelerateStop
                    };
                case 'ADD_TAKEOFF_DISTANCE':
                    return {
                        ...state,
                        takeoffDistance50Barrier: action.takeoffDistance50Barrier
                    };
                case 'ADD_CLIMB_RATE':
                    return {
                        ...state,
                        climbRate: action.climbRate
                    };
                case 'ADD_LANDING_DISTANCE':
                    return {
                        ...state,
                        landingDistance: action.landingDistance
                    };
                case 'ADD_LANDING_DISTANCE50':
                    return {
                        ...state,
                        landingDistance50Barrier: action.landingDistance50Barrier
                    };
                case 'ADD_CALCULATED_VALUES_ALL':
                    return {
                        ...state,
                        ...action.newValues
                    };
                default:
                    return state;
            }
        };


// Store creation
    
    const store = createStore(
        combineReducers({
            userInput: userInputReducer,
            apiValues: apiReducer,
            calculatedValues: calculatedValuesReducer
        })
    );


store.subscribe(() => {
  console.log(store.getState());
});

// +++ Longest way to populate all values +++ 
    // store.dispatch(addWeightTakeoff(2400));
    // store.dispatch(addHeadwindTakeoff(10));
    // store.dispatch(addWeightLanding(2100));
    // store.dispatch(addHeadwindLanding(-3));

    // store.dispatch(addAPIValuesTakeoff(
    //     {
    //         fieldElevationTakeoff: 1389,
    //         altimeterTakeoff: 30.20,
    //         tempCTakeoff: 18.8889
    //     }
    // ));
    // store.dispatch(addAPIValuesLanding(
    //     {
    //         fieldElevationLanding: 1389,
    //         altimeterLanding: 32.04,
    //         tempCLanding: 20.07
    //     }
    // ));

    // store.dispatch(addPressureAltitudeTakeoff(1127.0806794729692));
    // store.dispatch(addPressureAltitudeLanding(1130));
    // store.dispatch(addDensityAltitudeTakeoff(1843.6819249523503));
    // store.dispatch(addDensityAltitudeLanding(1847));

    // store.dispatch(addPressureAltitudeBoth({ 
    //     pressureAltitudeTakeoff: 1127.0806794729692,
    //     pressureAltitudeLanding: 1130
    // }));
    // store.dispatch(addDensityAltitudeBoth({ 
    //     densityAltitudeTakeoff: 1843.6819249523503,
    //     densityAltitudeLanding: 1847
    // }));
    // store.dispatch(addTakeoffRoll(834.1935958254418));
    // store.dispatch(addLiftoffSpeed(47.9999999999999994));
    // store.dispatch(addLiftoffSpeed50Barrier(54.0000191109));
    // store.dispatch(addAccelerateStop(2085.4839895636046));
    // store.dispatch(addTakeoffDistance50Barrier(1412.19885246782));
    // store.dispatch(addClimbRate(672.7213845608525));
    // store.dispatch(addLandingDistance(539.6161063671439));
    // store.dispatch(addLandingDistance50(1231.6910138381945));


// +++ Only 4 dispatch calls to populate all values +++ // 
    // store.dispatch(addUserInputsTakeoff({ weightTakeoff: 2200, headwindTakeoff: -3 }));
    // store.dispatch(addUserInputsLanding({ weightLanding: 2200, headwindLanding: -3 }));

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
