export function fetchTrips() {
    return (dispatch) => {
        return fetch('http://localhost:3001/trips/')
        .then(response => response.json())
        .then(json => dispatch(
            { type: "SHOW_TRIPS", data: json }))
        }
}

export function addTrip(tripInfo) {
    return dispatch => {
        return fetch("http://localhost:3001/trips", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({dive: tripInfo})
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert("something went wrong!")
            } else {
                dispatch({
                    type: "CREATE_TRIP",
                    dive: response
                })
                alert("Trip Added!")
            }
        })
    }
}