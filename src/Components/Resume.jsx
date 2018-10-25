import React, {Component} from "react";

const skills = ["Javascript", "CSS", "HTML", "NodeJS/ExpressJS", "React/Redux", "Git", "SQL (particular PostgreSQL)"];
const presentlyStudying = ["Python", "Linux"];

const Center = {
  textAlign: "center",
  fontSize: 26,
}

const List = {
  margin: 0,
  padding: 5,
  fontSize: 20 
}
const ResumeLink = () => {
  return (
    <div>
      <i class="fa fa-linkedin" aria-hidden="true">: <a href="http://www.linkedin.com/in/cesarinapaula">Link to Cesarina's LinkedIn</a></i>
      <i class="fa fa-github" aria-hidden="true">:  <a href="https://github.com/cesarinapaula">Link to Cesarina's GitHub</a></i>
    </div>
  )
}

class Resume extends Component {
    render(){
        return(
            <div style={Center}>
                <br />
                <ResumeLink/>
                <div id="left">
                <h2> A Sample Of My Skills So Far </h2>
                <ul style={List}>{skills.map(skill => <li> {skill} </li>)}</ul>
                </div>
                <br/>
                <div id="right">
                <h2> Presently Studying</h2>
                <ul style={List}>{presentlyStudying.map(skill=><li>{skill}</li>)}</ul>
                </div>
            </div>
               
        )
    }
}

export default Resume;