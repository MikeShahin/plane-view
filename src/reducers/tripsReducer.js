export const tripsReducer = (state = {}, action) => {
    switch(action.type) {

        case 'SHOW_TRIPS':
            return { ...state, data: action.data }

        case 'CREATE_TRIP':
            return {
                ...state,
                trip: action.trip
            }
        
        default:
            return state
    }
}
