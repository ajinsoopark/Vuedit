import React from 'react';
import SortOptions from './sortOptions';
import ViewOptions from './viewOptions';
import '../../stylesheets/Filter.css';

const FilterBar = () => {
    return (
        <div className='viewAndSort'>
            <ViewOptions />
            <div className="filterDivider"></div>
            <SortOptions />
        </div>
    )
}

export default FilterBar;