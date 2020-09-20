import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar';
import MessageList from './components/MessageList/MessageList';
import Provider from './components/Provider/Provider';
import Error from './components/Error/Error';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MessageList} />
          <Route exact path='/provider' component={Provider} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;