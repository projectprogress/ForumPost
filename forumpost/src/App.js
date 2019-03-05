import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './containers/Navigation/Navbar';
import CreateTopic from './containers/Topic/CreateTopic';
import Dashboard from './containers/Dashboard/Dashboard';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import SearchResult from './containers/SearchResult/SearchResult';
import WatchList from './containers/WatchList/WatchList';
import Logout from './containers/Auth/Signout';
import TopicDetail from './containers/Topic/TopicDetail';
import SymbolDetail from './containers/Symbol/SymbolDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/topic/:id' component={TopicDetail} />
          <Route path='/symbol/:id' component={SymbolDetail}/>
          <Route path='/createtopic' component = {CreateTopic} />
          <Route path='/signin' component = {SignIn} />
          <Route path='/signup' component = {SignUp} />
          <Route path='/searchresult' component = {SearchResult} />
          <Route path='/watchlist' component = {WatchList} />
          <Route path='/logout' component = {Logout} />

        </Switch>
      </div>

      
    );
  }
}

export default App;
