// Reducers
    // API Values
    const apiReducerDefaultState = {
        airportTakeoff: '',
        fieldElevationTakeoff: undefined,
        altimeterTakeoff: undefined,
        tempCTakeoff: undefined,
        airportLanding: '',
        fieldElevationLanding: undefined,
        altimeterLanding: undefined,
        tempCLanding: undefined
    };

    const apiReducer = (state = apiReducerDefaultState, action) => {
        switch (action.type) {
            case 'ADD_AIRPORT_TO':
                return {
                    ...state,
                    airportTakeoff: action.airport
                };
            case 'ADD_AIRPORT_LA':
                return {
                    ...state,
                    airportLanding: action.airport
                };
            case 'ADD_API_VALUE_FIELDELEVATION_TO':
                return {
                    ...state,
                    fieldElevationTakeoff: action.fieldElevationTakeoff
                };
            case 'ADD_API_VALUE_ALTIMETER_TO':
                return {
                    ...state,
                    altimeterTakeoff: action.altimeterTakeoff
                };
            case 'ADD_API_VALUE_TEMPC_TO':
                return {
                    ...state,
                    tempCTakeoff: action.tempCTakeoff
                };
            case 'ADD_API_VALUE_FIELDELEVATION_LA':
                return {
                    ...state,
                    fieldElevationLanding: action.fieldElevationLanding
                };
            case 'ADD_API_VALUE_ALTIMETER_LA':
                return {
                    ...state,
                    altimeterLanding: action.altimeterLanding
                };
            case 'ADD_API_VALUE_TEMPC_LA':
                return {
                    ...state,
                    tempCLanding: action.tempCLanding
                };

            case 'ADD_API_VALUES_TAKEOFF':
                return {
                    ...state,
                    ...action.newValues
                };
            case 'ADD_API_VALUES_LANDING':
                return {
                    ...state,
                    ...action.newValues
                };
            case 'ADD_API_VALUES_ALL':
                return {
                    ...state,
                    ...action.newValues
                };
            default:
                return state;
        }
    };

export default apiReducer;
