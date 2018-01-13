// Actions
    // Add Calculated Values
    export const addPressureAltitudeTakeoff = (pressureAltitudeTakeoff = undefined) => ({
        type: 'ADD_PRESSURE_ALTITUDE_TAKEOFF',
        pressureAltitudeTakeoff
    });
    export const addPressureAltitudeLanding = (pressureAltitudeLanding = undefined) => ({
        type: 'ADD_PRESSURE_ALTITUDE_LANDING',
        pressureAltitudeLanding
    });
    export const addPressureAltitudeBoth = (
      {
        pressureAltitudeTakeoff = undefined,
        pressureAltitudeLanding = undefined
      } = {}
    ) => ({
        type: 'ADD_PRESSURE_ALTITUDE_BOTH',
        newValues: {
            pressureAltitudeTakeoff,
            pressureAltitudeLanding
        }
    });
    export const addDensityAltitudeTakeoff = (densityAltitudeTakeoff = undefined) => ({
        type: 'ADD_DENSITY_ALTITUDE_TAKEOFF',
        densityAltitudeTakeoff
    });
    export const addDensityAltitudeLanding = (densityAltitudeLanding = undefined) => ({
        type: 'ADD_DENSITY_ALTITUDE_LANDING',
        densityAltitudeLanding
    });
    export const addDensityAltitudeBoth = (
        {
            densityAltitudeTakeoff = undefined,
            densityAltitudeLanding = undefined
        }
    ) => ({
        type: 'ADD_DENSITY_ALTITUDE_BOTH',
        newValues: {
            densityAltitudeTakeoff,
            densityAltitudeLanding
        }
    });
    export const addTakeoffRoll = (takeoffRoll = undefined) => ({
        type: 'ADD_TAKEOFF_ROLL',
        takeoffRoll
    });
    export const addLiftoffSpeed = (liftoffSpeed = undefined) => ({
        type: 'ADD_LIFTOFF_SPEED',
        liftoffSpeed
    });
    export const addLiftoffSpeed50Barrier = (liftoffSpeed50Barrier = undefined) => ({
        type: 'ADD_LIFTOFF_SPEED50',
        liftoffSpeed50Barrier
    });
    export const addAccelerateStop = (accelerateStop = undefined) => ({
        type: 'ADD_ACCELERATE_STOP',
        accelerateStop
    });
    export const addTakeoffDistance50Barrier = (takeoffDistance50Barrier = undefined) => ({
        type: 'ADD_TAKEOFF_DISTANCE',
        takeoffDistance50Barrier
    });
    export const addClimbRate = (climbRate = undefined) => ({
        type: 'ADD_CLIMB_RATE',
        climbRate
    });
    export const addApproachSpeed = (approachSpeed = undefined) => ({
      type: 'ADD_APPROACH_SPEED',
      approachSpeed
    });
    export const addLandingRoll = (landingRoll = undefined) => ({
        type: 'ADD_LANDING_ROLL',
        landingRoll
    });
    export const addLandingDistance50 = (landingDistance50Barrier = undefined) => ({
        type: 'ADD_LANDING_DISTANCE50',
        landingDistance50Barrier
    });
    export const addCalculatedValues = (
        {
            densityAltitudeTakeoff = undefined,
            densityAltitudeLanding = undefined,
            takeoffRoll = undefined,
            liftoffSpeed = undefined,
            liftoffSpeed50Barrier = undefined,
            accelerateStop = undefined,
            takeoffDistance50Barrier = undefined,
            climbRate = undefined,
            landingRoll = undefined,
            landingDistance50Barrier = undefined
        } = {}
    ) => ({
        type: 'ADD_CALCULATED_VALUES_ALL',
        newValues: {
            densityAltitudeTakeoff,
            densityAltitudeLanding,
            takeoffRoll,
            liftoffSpeed,
            liftoffSpeed50Barrier,
            accelerateStop,
            takeoffDistance50Barrier,
            climbRate,
            landingRoll,
            landingDistance50Barrier
        }
    });
