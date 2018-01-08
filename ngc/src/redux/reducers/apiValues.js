// Reducers
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

export default apiReducer;
