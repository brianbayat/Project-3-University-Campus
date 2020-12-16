import React, { Component } from 'react';
import { buildStudent} from '../reducers/students'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class AddStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName:'',
      email: '',
      campusId: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
      // [evt.target.firstName]: evt.target.value,
      // [evt.target.lastName]: evt.target.value,
      // [evt.target.email]: evt.target.value,
      // [evt.target.campusId]: evt.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const campusId = event.target.campusId.value;
    this.props.buildOneStudent({ firstName, lastName, email, campusId })
  }

  render () {
    return (
      <form className="form" onSubmit = {this.handleSubmit} >
        <div className="container">
          <div className="input-label" >
            <label htmlFor="firstName"> Student first name </label>
            <input
              className="input"
              type="text"
              name="firstName"
              placeholder="Enter new student first name"
              value = {this.state.firstName}
              onChange= {this.handleChange}
            />
          </div>
          <div className="input-label" >
            <label htmlFor="lastName"> Student last name </label>
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Enter new student last name"
              value = {this.state.lastName}
              onChange= {this.handleChange}
            />
          </div>
          <div className="input-label" >
            <label htmlFor="email"> Student email </label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Enter new student email"
              value = {this.state.email}
              onChange= {this.handleChange}
            />
          </div>
          <div className="input-label" >
            <label htmlFor="campusId"> Student campus id </label>
            <input
              className="input"
              type="text"
              name="campusId"
              placeholder="Enter new student campus id"
              value = {this.state.campusId}
              onChange= {this.handleChange}
            />
          </div>
          <div>
            <span className="span">
                <button className="button" type="submit">Add a new student</button>
            </span>
          </div>
        </div>
      </form>
    );
  }
}


const mapDispatch = (dispatch) => (
  {
    buildOneStudent: (student) => dispatch(buildStudent(student))
  }
)

export default withRouter(connect(null, mapDispatch)(AddStudent))
