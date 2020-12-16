import React, { Component } from 'react';
import { buildCampus} from '../reducers/campuses'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class AddCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    this.props.buildOneCampus({ name, address })
  }

  render () {
    return (
      <form onSubmit = {this.handleSubmit} className="form">
        <div className="container">
          <div className="input-label">
            <label htmlFor="name"> Campus name </label>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter new campus name"
              value = {this.state.name}
              onChange= {this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="address"> Campus address </label>
            <input
              className="input"
              type="text"
              name="address"
              placeholder="Enter new campus address"
              value = {this.state.address}
              onChange= {this.handleChange}
            />
          </div>
          <div>
            <span className="span">
              <button className="button" type="submit">Add new campus</button>
            </span>
          </div>
        </div>
      </form>
    );
  }
}


const mapDispatch = (dispatch) => (
  {
    buildOneCampus: (campus) => dispatch(buildCampus(campus))
  }
)

export default withRouter(connect(null, mapDispatch)(AddCampus))
