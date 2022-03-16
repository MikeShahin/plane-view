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
                <h2>All Users Trips!</h2>

                { this.props.trips ? 
                <> {this.loggedTrips()}</>
                :
                <h2>Something went wrong, please try again.</h2>
                }
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