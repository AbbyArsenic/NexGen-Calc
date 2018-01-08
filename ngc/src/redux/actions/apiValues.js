// Actions 
    // Add API Values
    export const addAPIValuesTakeoff = (
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
    export const addAPIValuesLanding = (
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
    export const addAPIValuesAll = (
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
