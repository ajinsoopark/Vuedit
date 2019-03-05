import React from 'react';
import SortOptions from './sortOptions';
import ViewOptions from './viewOptions';
import '../../stylesheets/Filter.css';

const FilterBar = ({...props}) => {

    return (
        <div className={props.class}>
            <ViewOptions />
            <div className="filterDivider"></div>
            <SortOptions />
        </div>
    )
}

export default FilterBar;