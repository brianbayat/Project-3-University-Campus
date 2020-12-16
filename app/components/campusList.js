import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {fetchCampuses, deleteCampus} from '../reducers/campuses'
import CampusForm from './campusForm'


class CampusList extends Component {

    componentDidMount () {
        this.props.fetchAllCampuses()
    }

    render() {
        const {campuses} = this.props
        return (
            <div id="allCampuses">
                {
                    campuses.map(campus => {
                        return (
                                <div key = {campus.id} id="campus">
                                    <Link to={`/campuses/${campus.id}`}>
                                        <div id="campusList">
                                            <CampusForm campus= {campus} />
                                        </div>
                                    </Link>
                                    <button type= "button" className="remove" onClick={() => this.props.deleteOneCampus(campus.id)}>X</button> 
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
        campuses: state.campusList.campuses
    }
)
const mapDispatch = (dispatch) => (
    {
        fetchAllCampuses: () => dispatch(fetchCampuses()),
        deleteOneCampus: (campusId) => dispatch(deleteCampus(campusId))
    }
)

export default withRouter(connect(mapState, mapDispatch)(CampusList))
