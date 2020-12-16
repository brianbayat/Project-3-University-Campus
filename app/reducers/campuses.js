import axios from 'axios'

// Initial state
const initialState = {
    compuses: [],
    campus: {
        students: []
    }
}


// Actions
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'


// Action creator
export const getCampuses = campuses => (
    {
        type: GET_CAMPUSES,
        campuses
    }
)
export const getCampus = campus => (
    {
        type: GET_CAMPUS,
        campus
    }
)
export const createCampus = campus => (
    {
        type: CREATE_CAMPUS,
        campus
    }
)
export const removeCampus = campusId => (
    {
        type: REMOVE_CAMPUS,
        campusId
    }
)


//Thunk creator
export const fetchCampuses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/api/campuses')
            const campuses = response.date
            dispatch(getCampuses(campuses))
        }
        catch (err){ console.log(err)}
    }
}


export const fetchCampus = (campusId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/api/campuses' + campusId)
            const campus = response.data
            dispatch(getCampus(campus))
        }
        catch (err){ console.log(err)}
    }
}


export const buildCampus = (campus) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/api/campuses', campus)
            const campusData = response.data
            dispatch(createCampus(campusData))
        }
        catch (err){ console.log(err)}
    }
}

export const deleteCampus = (campusId) => {
    return async (dispatch) => {
        try {
            await axios.delete('/api/campuses'+ campusId)
            dispatch(removeCampus(campusId))
        }
        catch (err){ console.log(err)}
    }
}


// campusReducer
const campusReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_CAMPUSES:
            return { ...state, campuses: action.campuses }
        case GET_CAMPUS:
            return { ...state, campus: action.campus }
        case CREATE_CAMPUS:
            return { ...state, campuses: [...state.campuses, action.campus], campus: action.campus}
        case REMOVE_CAMPUS:
            return { ...state, campuses: [...state.campuses.filter( campus => campus.id !== action.campusId)]}
        default:
            return state
    }
}

export default campusReducer
