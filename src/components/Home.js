import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div className="home center">
          <div>
            <h1>Welcome to Plane View, The site that lets you figure out the best view for your next trip!</h1>
            <p>Construction in progress</p>

            <button placeholder="submit" type="submit">
              view trips
            </button>

            <br>
            
            <button placeholder="submit" type="submit">
              add trip
            </button>
          </div>
      </div>
    )
  }
}


export default (Home); 