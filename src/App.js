import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Things from "./Components/Things";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <nav>
            <Link to="/">Home</Link> |
            <Link to='/about'>About Cesa...The Cat</Link> |
            <Link to="/resume">Quick Resume</Link> |
            <Link to="/things">Things Cesa Likes</Link>
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/things" component={Things} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
