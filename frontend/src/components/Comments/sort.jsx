import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../../stylesheets/commentSort.css';

class Sort extends Component {

    render () {
        return (
            <div className='commentSortContainer'>
                <div className='sortBy'>
                    Sort by
                </div>
                <div className='commentSortMenuContainer'>
                    <select className='commentSortMenu'>
                        <option className='commentSortDefault' value=''>Sort Options</option>
                        <option className='commentSortNew' value='new'>New</option>
                        <option className='commentSortHot' value='hot'>Hot</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Sort;