import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../reduxUtils';

import ViewOptions from '../components/filterComponent/viewOptions';
import '../stylesheets/Filter.css';
import SortOptions from '../components/filterComponent/sortOptions';

class FilterContainer extends Component {
    constructor () {
        super ()
        this.state = {
            viewMode: null,
            sortBy: null
        }
    }

    render () {
        return (
                <div className='viewAndSort'>
                    <ViewOptions />
                    <div className="filterDivider"></div>
                    <SortOptions />
                </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer);