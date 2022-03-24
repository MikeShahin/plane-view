import React, { Component } from 'react'
import { connect } from 'react-redux';
import TripsCard from './TripsCard';
import { fetchTrips } from '../actions/trips'

class ViewTrips extends React.Component {

  componentDidMount() {
    this.props.fetchTrips()
}

loggedTrips = () => {
  return this.props.trips.map(trip => <TripsCard key={trip.id} {...trip} />)
}
  

  render() {
    return (
      <div className="trips center">
            <h1>This page is for all the trips logged</h1>
            <p>Construction in progress</p>
      </div>
    )
  }
}


export default (ViewTrips); 