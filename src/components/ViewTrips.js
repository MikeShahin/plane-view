import React, { Component } from 'react'
import { connect } from 'react-redux';

class ViewTrips extends React.Component {

//   componentDidMount() {
//     this.props.fetchTrips()
// }

  handleClick = (e) => {
    console.log("clicked")
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