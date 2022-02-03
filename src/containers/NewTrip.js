import React from 'react';
import { Redirect } from "react-router";

class NewTrip extends React.Component {
  state = {

}

handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
        [name]: value,
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    let tripInfo = {
      route: this.props.route
    }
    this.props.newTrip(tripInfo)
    this.props.history.push('/')
}

render() {
    const {
      route
    } = this.state

    return (
        <div className='new-trip-form form-newtrip'>          
            <form onSubmit={this.handleSubmit}>
            <h2>Tell us about your trip!</h2>
                <input
                    placeholder="Route"
                    type="text"
                    name="route"
                    value={route}
                    onChange={this.handleChange}
                />
                <br></br>
                <br></br>
              
                <button placeholder="submit" type="submit">Log Dive</button>                   
            </form>
        </div>
    )
}
}

export default NewTrip; 