import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import NavBarContainer from './NavBar/navBarContainer';
import FilterContainer from './filterComponent/filterContainer';
import HomeContainer from './home/homeContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={ NavBarContainer }/>
        <Route component={ FilterContainer }/>
        <Switch>
          <Route exact path='/' component={ HomeContainer } />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
