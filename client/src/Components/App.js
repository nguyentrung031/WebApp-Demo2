import React, { Component } from 'react';
import '../App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouterURL from '../Router/RouterURL';
import {getDataItem} from '../Store/Action/itemAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
        <Header/>
        <RouterURL/>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
export default connect(mapStateToProps,{getDataItem})(App);
