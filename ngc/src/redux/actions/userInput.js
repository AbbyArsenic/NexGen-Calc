// Actions 
    // Add User Input Values
    export const addWeightTakeoff = weight => ({
        type: 'ADD_WEIGHT_TAKEOFF',
        weight
    });
    export const addHeadwindTakeoff = headwind => ({
        type: 'ADD_HEADWIND_TAKEOFF',
        headwind
    });
    export const addWeightLanding = weight => ({
        type: 'ADD_WEIGHT_LANDING',
        weight
    });
    export const addHeadwindLanding = headwind => ({
        type: 'ADD_HEADWIND_LANDING',
        headwind
    });
    export const addUserInputsTakeoff = (
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
    export const addUserInputsLanding = (
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
    export const addUserInputsAll = (
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
