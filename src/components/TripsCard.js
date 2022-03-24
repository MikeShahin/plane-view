import React from 'react';
import moment from 'moment';

const TripsCard = props => {
  
    return (
        <div className="tripcard">
            {props.pictures !== "" && 
                <img className="tripcard-image" src={props.pictures} alt="dive pic"/>
            }
            {props.pictures === "" && 
                <img className="tripcard-image" src="#" alt="dive pic"/>
            }
            <div className="tripcard-text">
            <h3>Trip # {props.id}, by: {props.user}</h3>
                <p><strong>Route: </strong>{props.route}, <strong>date: </strong>{moment(props.date).format("MMM Do YYYY")}, <strong>local time: </strong>{props.local_time}</p>
                <p><strong>Side of plane: </strong>{props.side}</p>
                <p><strong>Comments:</strong><br></br>{props.comments}</p>
            </div>
        </div>
    )
}

export default TripsCard