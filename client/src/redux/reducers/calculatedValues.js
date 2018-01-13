// Reducers
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
        approachSpeed: 61,
        landingRoll: undefined,
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
            case 'ADD_APPROACH_SPEED':
                return {
                  ...state,
                  approachSpeed: action.approachSpeed
                }
            case 'ADD_LANDING_ROLL':
                return {
                    ...state,
                    landingRoll: action.landingRoll
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

export default calculatedValuesReducer;
