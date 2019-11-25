import React, { Component } from 'react';
import '../App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouterURL from '../Router/RouterURL';
import {getDataItem} from '../Store/Action/itemAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  static propTypes = {
    getDataItem: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getDataItem();
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
  getDataItem
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
