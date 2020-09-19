import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar';
import MessageList from './components/MessageList/MessageList'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MessageList />
      </React.Fragment>
    )
  }
}

export default App;