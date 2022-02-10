import React from 'react';

class Home extends React.Component {

  handleClick = (e) => {
    console.log("clicked")
  }
  

  render() {
    return (
      <div className="home center">
            <h1>Welcome to Plane View, The site that lets you figure out the best view for your next trip!</h1>
            <p>Construction in progress</p>

            <button placeholder="submit" type="submit" onClick={event =>  window.location.href='/viewtrips'}>
              view trips
            </button>
            
            <button placeholder="submit" type="submit" onClick={event =>  window.location.href='/newtrip'}>
              add trip
            </button>
      </div>
    )
  }
}


export default (Home); 