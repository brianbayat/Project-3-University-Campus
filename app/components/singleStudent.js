import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchStudent} from '../reducers/students';


class SingleStudent extends Component {
    componentDidMount () {
        const studentId = Number(this.props.match.params.studentId)
        this.props.fetchOneStudent(studentId);
    }
    render() {
        const { student} = this.props
        const {campus} = student
        return (
            <div>
                <img src = {student.imageUrl} alt= {student.name} />
                <p>Student Name: {`${student.firstName} ${student.lastName}`}</p>
                <p>Email: {student.email}</p>
                <p> gpa: {student.gpa} </p>
                <Link to = {`/campuses/${campus.id}`} >{campus.name}</Link>
            </div>
        )
    }
} 


const mapState = (state) => (
    {
        student: state.studentList.student,
    }
)

const mapDispatch = (dispatch) => (
    {
        fetchOneStudent: (studentId) => dispatch(fetchStudent(studentId)),
    }
)

export default withRouter(connect(mapState, mapDispatch)(SingleStudent))
