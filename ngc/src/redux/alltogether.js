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
