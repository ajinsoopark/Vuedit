import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import NavBarContainer from './NavBar/navBarContainer';
import HomeContainer from './Home/homeContainer';
import CurrentPostContainer from './Posts/currentPost/currentPostContainer';
import SubvueditContainer from './Subvuedits/subvueditContainer';
import UserProfileContainer from './Users/userProfileContainer';

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Route component={ NavBarContainer }/>
        <Switch>
          <Route exact path='/' component={ HomeContainer } />
          <Route path='/posts/:id' component={ CurrentPostContainer }/>
          <Route exact path='/subvuedits/:id' component={ SubvueditContainer }/>
          <Route path='/user/:id' component={ UserProfileContainer }/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
