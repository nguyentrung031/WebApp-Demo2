import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Components/Home/Home';
import Tendency from '../Components/Tendency/Tendency';
import Detail from '../Components/Detail/Detail';
class RouterURL extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/Tendency/" component={Tendency}/>
            <Route path="/Detail/:id" component={Detail}/>
          </div>
        </Router>
      </div>
    );
  }
}
export default RouterURL;