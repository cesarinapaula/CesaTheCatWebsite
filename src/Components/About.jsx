import React, {Component} from "react";

const Image = {
  borderRadius: "50%",
  maxWidth: 350,
  textAlign: "center",
}

const Center = {
  textAlign: "center",
  fontSize: 24
}

const Sizing = {
    width: "500px"
}

class About extends Component {
    render(){
        return(
            <div style={Center}>
                <h2> About Me </h2>
                <p><img style={Image} src="http://www.ie-wallpapers.com/data/out/177/37661581-pic-of-animals.jpeg" alt='' /></p>
                <div style={Sizing}>
                    <p> I am a Full Stack Engineer, since 2017.</p>
                    <p>I want to become a leading expert in InfoSec/Cybersecurity, presently aiming for a MS in Cybersecurity</p>
                    <p>...I'm also a cat.</p>
                </div>
            </div>
        )
    }
}

export default About;