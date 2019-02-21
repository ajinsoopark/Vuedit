import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../reduxUtils';
import NavBar from '../components/NavBar/NavBar';

class NavBarContainer extends Component {

    render () {
        return (
            <NavBar />
        )
    }
}

export default connect (
    mapDispatchToProps,
    mapStateToProps
)(NavBarContainer);