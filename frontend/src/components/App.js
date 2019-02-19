import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { mapStateToProps, mapDispatchToProps } from '../reduxUtils';
import { connect } from 'react-redux';

import HomeContainer from '../containers/homeContainer';
import NavBar from './NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={ NavBar }/>
        <Switch>
          <Route exact path='/' component={ HomeContainer } />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
