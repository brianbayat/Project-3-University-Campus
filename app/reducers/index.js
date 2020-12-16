import campusReducer from './campuses'
import studentReducer from './students'
import {combineReducers} from 'redux'

export default combineReducers({
    campusList: campusReducer,
    studentList: studentReducer
})
