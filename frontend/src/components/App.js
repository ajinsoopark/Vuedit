import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';


import HomeContainer from '../containers/homeContainer';
import NavBarContainer from '../containers/navBarContainer';
import FilterContainer from '../containers/filterContainer';


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
