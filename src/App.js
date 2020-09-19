import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Message />
      </React.Fragment>
    )
  }
}

export default App;