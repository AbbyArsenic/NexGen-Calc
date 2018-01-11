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

export default userInputReducer;
