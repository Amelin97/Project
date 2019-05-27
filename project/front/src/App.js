import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Register from './pages/Registrer';
import Login from './pages/Login';
import Protected from './Protected';
import history from './history';


class App extends React.Component {
  render() {
    return (<div className="ui container" >
      <Router history={history} >   
        <div>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" component={Protected} />
          </Switch>
        </div>
      </Router>
    </div>)
  }
}


export default App;
