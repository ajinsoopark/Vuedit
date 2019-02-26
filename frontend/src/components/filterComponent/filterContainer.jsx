import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { mapDispatchToProps, mapStateToProps } from '../utils/reduxUtils';

// import ViewOptions from '../components/filterComponent/viewOptions';
// import '../stylesheets/Filter.css';
// import SortOptions from '../components/filterComponent/sortOptions';

import FilterBar from './filterBar';

// class FilterContainer extends Component {
//     constructor () {
//         super ()
//         this.state = {
//             viewMode: null,
//             sortBy: null
//         }
//     }

//     render () {
//         return (
//                 <div className='viewAndSort'>
//                     <ViewOptions />
//                     <div className="filterDivider"></div>
//                     <SortOptions />
//                 </div>
//         )
//     }
// }

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);