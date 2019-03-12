import React from 'react';
import ViewOptions from './viewOptions';
import '../../stylesheets/Filter.css';

const FilterBar = ({...props}) => {

    return (
        <div className={props.class}>
            <ViewOptions />
        </div>
    )
}

export default FilterBar;