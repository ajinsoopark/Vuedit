import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import NavBarContainer from './NavBar/navBarContainer';
import HomeContainer from './home/homeContainer';
import CurrentPostContainer from './postsComponent/currentPost/currentPostContainer';
import SubvueditContainer from './subvueditComponent/subvueditContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={ NavBarContainer }/>
        <Switch>
          <Route exact path='/' component={ HomeContainer } />
          <Route path='/posts/:id' component={ CurrentPostContainer }/>
          <Route path='/subvuedits/:id' component={ SubvueditContainer }/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
