import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Components/Home/Home';
import Tendency from '../Components/Tendency/Tendency';
import Style from '../Components/Style/Style';
import Space from '../Components/Space/Space';
import PengShui from '../Components/PengShui/PengShui';
class RouterURL extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/Tendency/" component={Tendency}/>
            <Route path="/Style/" component={Style}/>
            <Route path="/Space/" component={Space}/>
            <Route path="/PengShui/" component={PengShui}/>
          </div>
        </Router>
      </div>
    );
  }
}
export default RouterURL;