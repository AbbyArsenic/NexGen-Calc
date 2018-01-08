
import { createStore, combineReducers } from 'redux';

const userInputReducerDefaultState = {
    fieldElevation: undefined,
    altimeter: undefined,
    tempC: undefined,
    weight: undefined,
    headwind: undefined
};

const userInputReducer = (state = userInputReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const calculatedValuesReducerDefaultState = {
    pressureAltitude: undefined,
    densityAltitude: undefined,
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
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        userInput: userInputReducer,
        calculatedValues: calculatedValuesReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})
=======
import { createStore, combineReducers } from 'redux';


// Actions 
    // Add User Input Values
        const addWeight = ( weight = undefined ) => ({
            type: 'ADD_WEIGHT',
            weight
        });
        const addHeadwind = ({ headwind = undefined } = {}) => ({
            type: 'ADD_HEADWIND',
            headwind
        });
        const addUserInputs = (
            {
                weight = undefined,
                headwind = undefined
            } = {}
        ) => ({
            type: 'ADD_USER_INPUTS',
            newValues: {
                weight,
                headwind
            }
        });

    // Add API Values
        const addAPIValues = (
            {
                fieldElevation = undefined,
                altimeter = undefined,
                tempC = undefined
            } = {}
        ) => ({
            type: 'ADD_API_VALUES',
            newValues: {
                fieldElevation,
                altimeter,
                tempC
            }
        });

    // Add Calculated Values
        const addPressureAltitude = (pressureAltitude = undefined) => ({
            type: 'ADD_PRESSURE_ALTITUDE',
            pressureAltitude
        });
        const addDensityAltitude = (densityAltitude = undefined) => ({
            type: 'ADD_DENSITY_ALTITUDE',
            densityAltitude
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
                densityAltitude = undefined,
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
            type: 'ADD_CALCULATED_VALUES',
            newValues: {
                densityAltitude,
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
            weight: undefined,
            headwind: undefined
        };

        const userInputReducer = (state = userInputReducerDefaultState, action) => {
            switch (action.type) {
                case 'ADD_WEIGHT':
                    return {
                        ...state,
                        weight: action.weight
                    };
                case 'ADD_HEADWIND':
                    return {
                        ...state,
                        headwind: action.headwind
                    };
                case 'ADD_USER_INPUTS':
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
            fieldElevation: undefined,
            altimeter: undefined,
            tempC: undefined
        };

        const apiReducer = (state = apiReducerDefaultState, action) => {
            switch (action.type) {
                case 'ADD_API_VALUES':
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
            pressureAltitude: undefined,
            densityAltitude: undefined,
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
                case 'ADD_PRESSURE_ALTITUDE':
                    return {
                        ...state,
                        pressureAltitude: action.pressureAltitude
                    };
                case 'ADD_DENSITY_ALTITUDE':
                    return {
                        ...state,
                        densityAltitude: action.densityAltitude
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
                case 'ADD_CALCULATED_VALUES':
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
    store.dispatch(addWeight(2400));
    store.dispatch(addHeadwind({headwind: 10}));
    store.dispatch(addAPIValues(
        {
            fieldElevation: 1389,
            altimeter: 30.20,
            tempC: 18.8889
        }
    ));
    store.dispatch(addPressureAltitude(1127.0806794729692));
    store.dispatch(addDensityAltitude(1843.6819249523503));
    store.dispatch(addTakeoffRoll(834.1935958254418));
    store.dispatch(addLiftoffSpeed(47.9999999999999994));
    store.dispatch(addLiftoffSpeed50Barrier(54.0000191109));
    store.dispatch(addAccelerateStop(2085.4839895636046));
    store.dispatch(addTakeoffDistance50Barrier(1412.19885246782));
    store.dispatch(addClimbRate(672.7213845608525));
    store.dispatch(addLandingDistance(539.6161063671439));
    store.dispatch(addLandingDistance50(1231.6910138381945));


// +++ Only 4 dispatch calls to populate all values +++ // 
    // store.dispatch(addUserInputs({ weight: 2200, headwind: -3 }));
    // store.dispatch(addAPIValues(
    //     {
    //         fieldElevation: 1389,
    //         altimeter: 30.20,
    //         tempC: 18.8889
    //     }
    // ));
    // store.dispatch(addPressureAltitude(1));
    // const allCalcVals = {
    //     densityAltitude: 2,
    //     takeoffRoll: 3,
    //     liftoffSpeed: 4,
    //     liftoffSpeed50Barrier: 5,
    //     accelerateStop: 6,
    //     takeoffDistance50Barrier: 7,
    //     climbRate: 8,
    //     landingDistance: 9,
    //     landingDistance50Barrier: 10 
    // };
    // store.dispatch(addCalculatedValues(allCalcVals));
