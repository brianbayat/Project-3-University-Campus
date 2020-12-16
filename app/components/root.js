import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CampusList from './campusList'
import StudentList from './studentList'
import SingleCampus from './singleCampus'
import SingleStudent from './singleStudent'
import AddCampus from './addCampus'
import AddStudent from './addStudent'

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <h1>Welcome!</h1>
          <span id="campusLink" > <Link to= "/campuses" > Campuses </Link> </span>
          <span id="studentLink" > <Link to= "/students" > Students </Link> </span>
        </nav>
        <main id="main">
          <h1>Brian Bayat</h1>
          <p id="homeInfo">Trying to implement some coding skills.</p>
          <Switch>
            <Route exact path="/campuses" component={CampusList} />
            <Route exact path="/students" component={StudentList} /> 
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route exact path="/addcampus" component={AddCampus} />
            <Route exact path="/addstudent" component={AddStudent} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default Root
