import React, { Component } from 'react'
import { connect } from 'react-redux';
import TripsCard from '../components/TripsCard'
import { fetchTrips } from '../actions/trips';

class AllTrips extends Component {

    componentDidMount() {
        this.props.fetchTrips()
    }

    loggedTrips = () => {
        return this.props.trips.map(trip => <TripsCard key={trip.id} {...trip} />)
    }

    render() {
        return (
            <div className="trips">

            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        trips: state.trips.data
    }
}

export default connect(mapStateToProps, {fetchTrips})(AllTrips)