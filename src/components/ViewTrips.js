import React from 'react';

class ViewTrips extends React.Component {

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