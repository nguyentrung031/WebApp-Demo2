import React, { Component } from 'react';
import '../App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouterURL from '../Router/RouterURL';
class App extends Component {
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
export default App;
