import React, {Component} from "react";

const WelcomeStyle = {
  textAlign: "center",
  width: 500,
  fontSize: 24
}

const Image = {
  width: 500,
}

class Home extends Component {
    render(){
        return(
            <div style={WelcomeStyle}>
                <h1>
                    Welcome To My Page!
                </h1>
                <p>Click on the image...</p>
                <p>(This isn't me, clearly. But I still recommend you click on the image)</p>
                <p><a href="https://www.netflix.com/title/80198505"><img style={Image} src="https://i.pinimg.com/originals/9a/e3/c1/9ae3c19cb94d27590b88842d12b76a66.jpg" width="300px" alt=''/></a></p>
          </div>
        )
    }
}

export default Home;
