import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import CreateTopic from './containers/Topic/CreateTopic';
import Topics from './containers/Topic/Topics';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Topics} />
            <Route path='/createtopic' component = {CreateTopic} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
