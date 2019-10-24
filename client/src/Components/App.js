import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      Data: ''
    }
  }
  componentDidMount(){
    axios.get('/api/helloworld')
    .then(result => this.setState({Data: result.data.sayHi}))
  }
  render() {
    return (
      <div>
        <h1>{this.state.Data}</h1>
      </div>
    );
  }
}

export default App;
