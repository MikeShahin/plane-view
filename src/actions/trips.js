export function fetchTrips() {
    return (dispatch) => {
        return fetch('http://localhost:3001/trips/')
        .then(response => response.json())
        .then(json => dispatch(
            { type: "SHOW_TRIPS", data: json }))
        }
}

export function addTrip(tripInfo) {

}