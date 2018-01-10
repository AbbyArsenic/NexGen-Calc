// Actions 
    // Add API Values
    export const addAPIValueFieldElevationTakeoff = fieldElevationTakeoff => ({
        type: 'ADD_API_VALUE_FIELDELEVATION_TO',
        fieldElevationTakeoff
    });
    export const addAPIValueAltimeterTakeoff = altimeterTakeoff => ({
        type: 'ADD_API_VALUE_ALTIMETER_TO',
        altimeterTakeoff
    });
    export const addAPIValueTempCTakeoff = tempCTakeoff => ({
        type: 'ADD_API_VALUE_TEMPC_TO',
        tempCTakeoff
    });
    export const addAPIValueFieldElevationLanding = fieldElevationLanding => ({
        type: 'ADD_API_VALUE_FIELDELEVATION_LA',
        fieldElevationLanding
    });
    export const addAPIValueAltimeterLanding = altimeterLanding => ({
        type: 'ADD_API_VALUE_ALTIMETER_LA',
        altimeterLanding
    });
    export const addAPIValueTempCLanding = tempCLanding => ({
        type: 'ADD_API_VALUE_TEMPC_LA',
        tempCLanding
    });
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

