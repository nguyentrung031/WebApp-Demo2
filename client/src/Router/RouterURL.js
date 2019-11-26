import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import Home from '../Components/Home/Home';
import Tendency from '../Components/Tendency/Tendency';
import Style from '../Components/Style/Style';
import Space from '../Components/Space/Space';
import PengShui from '../Components/PengShui/PengShui';
import Tips from '../Components/Tips/Tisp';
import Detail from '../Components/Detail/Detail';
import Supplies from '../Components/Supplies/Supplies';
import StrangePoison from '../Components/StrangePoison/StrangePoison';
import NewSearch from '../Components/Header/NewSearch';

class RouterURL extends Component {
  render() {
    return (
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Tendency/" component={Tendency}/>
          <Route path="/Style/" component={Style}/>
          <Route path="/Space/" component={Space}/>
          <Route path="/PengShui/" component={PengShui}/>
          <Route path="/Tips/" component={Tips}/>
          <Route path="/Supplies/" component={Supplies}/>
          <Route path="/StrangePoison/" component={StrangePoison}/>
          <Route path="/Detail/:id" component={Detail}/>
          <Route path="/Search" component={NewSearch}/>
      </Switch>
    );
  }
}

export default RouterURL;