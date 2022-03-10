import React from 'react';
import moment from 'moment';

const TripsCard = props => {
  
    return (
        <div className="tripcard">
            {/* code for pics */}
            <div className="divecard-text">
            <h3>Trip # {props.id}</h3>
                <p><strong>Route: </strong>{props.route}, <strong>date: </strong>{moment(props.date).format("MMM Do YYYY")}, <strong>local time: </strong>{props.local_time}</p>
                <p><strong>Side of plane: </strong>{props.side}</p>
                <p><strong>Comments:</strong><br></br>{props.comments}</p>
            </div>
        </div>
    )
}

export default TripsCard