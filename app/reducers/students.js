import axios from 'axios'

// Initial state
const initialState = {
    students : [],
    student : {}
}


// Actions
const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'


// Action creator
export const getStudents = students => (
    {
        type : GET_STUDENTS,
        students
    }
)

export const getStudent = student => (
    {
        type : GET_STUDENT,
        student
    }
)

export const createStudent = student => (
    {
        type : CREATE_STUDENT,
        student
    }
)

export const removeStudent = studentId => (
    {
        type : REMOVE_STUDENT,
        studentId
    }
)


//Thunk creator

export const fetchStudents = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/api/students')
            const students = response.data
            dispatch(getStudents(students))
        }
        catch(err){console.log(err)}
    }
}

export const fetchStudent = (studentId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('api/students' + studentId)
            const student = response.data
            dispatch(getStudent(student))
        }
        catch(err){ console.log(err)}
    }
}

export const buildStudent = (student) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('api/students', student)
            const student = response.data
            dispatch(createStudent(student))
        }
        catch(err){console.log(err)}
    }
}

export const deleteStudent = (studentId) => {
    return async (dispatch) => {
        try {
            await axios.delete('api/students' + studentId)
            dispatch(removeStudent(studentId))
        }
        catch(err){console.log(err)}
    }
}


// studentReducer

export const studentReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_STUDENTS :
            return {...state, students : action.students}
        case GET_STUDENT :
            return {...state, student : action.student}
        case CREATE_STUDENT :
            return {...state, students : [...state.students, action.student], student : action.student}
        case REMOVE_STUDENT :
            return {...state, students : [...state.students.filter(student => student.id !== action.studentId)]}
        default :
            return state
    }
}


export default studentReducer
