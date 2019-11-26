import React, { Component } from 'react';
import '../App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouterURL from '../Router/RouterURL';
import {getData_Tendency} from '../Store/Action/tendency_action';
import {getData_pengshui} from '../Store/Action/pengshui_action';
import {getData_space} from '../Store/Action/space_action';
import {getData_strange_poison} from '../Store/Action/strangePoison_action';
import {getData_style} from '../Store/Action/style_action';
import {getData_supplies} from '../Store/Action/supplies_action';
import {getData_tips} from '../Store/Action/tips_action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  static propTypes = {
    getData_Tendency: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getData_Tendency();
    this.props.getData_pengshui();
    this.props.getData_space();
    this.props.getData_strange_poison();
    this.props.getData_style();
    this.props.getData_supplies();
    this.props.getData_tips();
  }
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <RouterURL/>
          <Footer/>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
const mapDispatchToProps = {
  getData_Tendency,
  getData_pengshui,
  getData_space,
  getData_strange_poison,
  getData_style,
  getData_supplies,
  getData_tips
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
