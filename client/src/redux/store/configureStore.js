import { createStore, combineReducers } from 'redux';
import userInputReducer from '../reducers/userInput';
import apiReducer from '../reducers/apiValues';
import calculatedValuesReducer from '../reducers/calculatedValues';


// Store creation
    export default () => {
        const store = createStore(
            combineReducers({
                userInput: userInputReducer,
                apiValues: apiReducer,
                calculatedValues: calculatedValuesReducer
            })
        );

        return store;
    };
