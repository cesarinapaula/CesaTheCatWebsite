import React, {Component} from "react";

const Center = {
  textAlign: "center",
  fontSize: 26,
}

const List = {
  margin: 0,
  padding: 5,
  fontSize: 20 
}

class Things extends Component {
    render(){
        return(
            <div style={Center}>
                <h1>Things Cesa Likes</h1>
                <ul style={List}>
                    <li>Napping</li>

                </ul>
            </div>
        )
    }
}

export default Things;