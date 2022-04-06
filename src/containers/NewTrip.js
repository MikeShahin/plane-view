import React from 'react';
import { connect } from 'react-redux'
import { addTrip } from '../actions/trips'

class NewTrip extends React.Component {

  state = {
    user: '',
    route: '',
    date: '',
    time: '',
    side: '',
    pictures: '',
    comments: ''
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
      user: this.state.user,
      route: this.state.route,
      date: this.state.date,
      time: this.state.time,
      side: this.state.side,
      pictures: this.state.pictures,
      comments: this.state.comments
    }
    this.props.newTrip(tripInfo)
    this.props.history.push('/')
}

render() {
    const {
      user,
      route,
      date,
      time,
      side,
      pictures,
      comments
    } = this.state

    return (
        <div className='new-trip-form form-newtrip'>          
            <form onSubmit={this.handleSubmit}>
            <h2>Tell us about your trip!</h2>
                <input
                    placeholder="User"
                    type="text"
                    name="user"
                    value={user}
                    onChange={this.handleChange}
                />
                <br></br>
                <br></br>
                <input
                    placeholder="Route"
                    type="text"
                    name="route"
                    value={route}
                    onChange={this.handleChange}
                />
                <br></br>
                <br></br>
                <input
                    placeholder="trip date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={this.handleChange}
                  /> 
                  <input
                    placeholder="Trip time"
                    type="time"
                    name="time"
                    value={time}
                    onChange={this.handleChange}
                  />
                <br></br>
                <br></br>
                <input
                  placeholder="Side"
                  type="text"
                  name="side"
                  value={side}
                  onChange={this.handleChange}
                />
                <br></br>
                <br></br>
                <input
                  placeholder="Picture"
                  type="text"
                  name="picture"
                  value={pictures}
                  onChange={this.handleChange}
                />
                <br></br>
                <br></br>
                <textarea
                    placeholder="comments"
                    type="textarea"
                    name="comments"
                    value={comments}
                    onChange={this.handleChange}
                />
              
                <button placeholder="submit" type="submit">Add Trip</button>                   
            </form>
        </div>
    )
  }
}

export default connect(null, { addTrip })(NewTrip); 