import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {fetchStudents, deleteStudent} from '../reducers/students'

class StudentList extends Component {

    componentDidMount () {
        this.props.fetchAllStudents();
    }

    render() {
        const {students} = this.props
        return (        
            <div id="allStudents">
                {
                    students.map(student => {
                        return (
                            <div  key= {student.id} className ="studentList">
                                <Link to= {`students/${student.id}`} > { `${student.firstName} ${student.lastName}`} </Link>
                                <button type= "button" className="remove" onClick={() => this.props.deleteOneStudent(student.id)}>X</button>
                            </div>
                        )}
                    )
                }
            </div>
        )
    }

}

const mapState = (state) => (
    {
        students: state.studentList.students
    }
)
const mapDispatch = (dispatch) => (
    {
        fetchAllStudents: () => dispatch(fetchStudents()),
        deleteOneStudent: (studentId) => dispatch(deleteStudent(studentId))
    }
)

export default withRouter(connect(mapState, mapDispatch)(StudentList))

