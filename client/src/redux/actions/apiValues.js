// Actions 
    // Add API Values
    export const addAirportTakeoff = airport => ({
        type: 'ADD_AIRPORT_TO',
        airport
    });
    export const addAirportLanding = airport => ({
        type: 'ADD_AIRPORT_LA',
        airport
    });
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
            airportTakeoff = '',
            fieldElevationTakeoff = undefined,
            altimeterTakeoff = undefined,
            tempCTakeoff = undefined
        } = {}
    ) => ({
        type: 'ADD_API_VALUES_TAKEOFF',
        newValues: {
            airportTakeoff,
            fieldElevationTakeoff,
            altimeterTakeoff,
            tempCTakeoff
        }
    });
    export const addAPIValuesLanding = (
        {
            airportLanding = '',
            fieldElevationLanding = undefined,
            altimeterLanding = undefined,
            tempCLanding = undefined
        } = {}
    ) => ({
        type: 'ADD_API_VALUES_LANDING',
        newValues: {
            airportLanding,
            fieldElevationLanding,
            altimeterLanding,
            tempCLanding
        }
    });
    export const addAPIValuesAll = (
        {
            airportTakeoff = '',
            fieldElevationTakeoff = undefined,
            altimeterTakeoff = undefined,
            tempCTakeoff = undefined,
            airportLanding = '',
            fieldElevationLanding = undefined,
            altimeterLanding = undefined,
            tempCLanding = undefined
        } = {}
    ) => ({
        type: 'ADD_API_VALUES_ALL',
        newValues: {
            airportTakeoff,
            fieldElevationTakeoff,
            altimeterTakeoff,
            tempCTakeoff,
            airportLanding,
            fieldElevationLanding,
            altimeterLanding,
            tempCLanding
        }
    });
