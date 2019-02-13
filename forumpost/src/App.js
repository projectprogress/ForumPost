import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import CreateTopic from './containers/Topic/CreateTopic';
import Topics from './containers/Topic/Topics';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import SearchResult from './components/SearchResult/SearchResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Topics} />
          <Route path='/createtopic' component = {CreateTopic} />
          <Route path='/signin' component = {SignIn} />
          <Route path='/signup' component = {SignUp} />
          <Route path='/searchresult' component = {SearchResult} />
        </Switch>
      </div>

      
    );
  }
}

export default App;
