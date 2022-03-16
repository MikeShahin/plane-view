import React, { Component } from 'react'
import { connect } from 'react-redux';
import TripsCard from '../components/TripsCard'
import { fetchTrips } from '../actions/trips';

class AllTrips extends Component {

    render() {
        return (
            <div className="trips">

            </div>
        )
    }
    
}


export default connect(mapStateToProps, {fetchTrips})(AllTrips)