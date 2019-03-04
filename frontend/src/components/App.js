import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import NavBarContainer from './NavBar/navBarContainer';
import HomeContainer from './home/homeContainer';
import CurrentPostContainer from './postsComponent/currentPost/currentPostContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={ NavBarContainer }/>
        <Switch>
          <Route exact path='/' component={ HomeContainer } />
          <Route path='/posts/:id' component={ CurrentPostContainer }/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
