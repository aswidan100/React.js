import React, { Component } from 'react';
import CourseForm from './componants/CourseForm'
import CourseList from './componants/CourseList'


class App extends Component {

  state = {
    courses : [
      {name : "HTML"},
      {name : "Css"},
      {name : "JavaScript"}
    ],
    current : ''
  }

//update course
updateCourse = (e) => {
 this.setState({
   current:e.target.value
 })
}


//add course

addCourse = (e) => {
  e.preventDefault();
  let current =   this.state.current;
  let courses =   this.state.courses;
  courses.push({name:current})
  this.setState({
    courses,
    current: ''
  })
}

//delete course

deleteCourse = (index) => {
let courses = this.state.courses;
courses.splice(index , 1);
this.setState({
  courses
})
}

//edit course

editCourse = (index , value) =>{
  let courses = this.state.courses;
  let course  = courses[index];
  course['name'] = value;
  this.setState({
    courses
  })
}

  render() {
    const {courses} = this.state
    const courseList =courses.map( (course , index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    } )

  return (
    <section classname="App">
      <h1>AddCourse</h1>
    <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
    <ul>{courseList}</ul>
    </section>
  );
 }
}
export default App;
