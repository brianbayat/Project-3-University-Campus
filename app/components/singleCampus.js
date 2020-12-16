import React, { Component } from 'react'
import CampusForm from './campusForm'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCampus} from '../reducers/campuses'
import {deleteStudent} from '../reducers/students'

class SingleCampus extends Component {

    componentDidMount () {
        const campusId = Number(this.props.match.params.campusId)
        this.props.fetchOneCampus(campusId);
    }

    render() {
        const { campus } = this.props
        const {students} = campus
        
        return (
            <div id="singleCampus">
               <CampusForm campus = {campus} />
               <p>Address: {campus.address} </p>
               <p>Description: {campus.description} </p>
               <div id="allStudents">
                {
                    students.map(student => {
                        return (
                            <div  key= {student.id} className ="studentList">
                                <Link to= {`students/${student.id}`} > { `${student.firstName} ${student.lastName}`} </Link>
                                <button type= "button" className="remove" onClick={() => this.props.deleteOneStudent(student.id)}>X</button>
                            </div>
                        )})
                }
               </div>
            </div>
        )
    }
}


const mapState = (state) => (
    {
        campus: state.campusList.campus,
    }
)

const mapDispatch = (dispatch) => (
    {
        fetchOneCampus: (campusId) => dispatch(fetchCampus(campusId)),
        deleteOneStudent: (studentId) => dispatch(deleteStudent(studentId))
    }
)

export default withRouter(connect(mapState, mapDispatch)(SingleCampus))
