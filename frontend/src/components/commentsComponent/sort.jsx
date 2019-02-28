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
                <button className='currentSort'>
                    <span className='currentSortOption'>
                        Best
                    </span>
                </button>
                <svg className='sortArrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                <div className='commentSortMenu'>
                    <Link className='bestOptionLink optionLink' to={ '' }>
                        <button className='bestOptionButton optionButton'>
                            <span className='bestSpan optionSpan'>
                                Best
                            </span>
                        </button>
                    </Link>
                    <Link className='newOptionLink optionLink' to={ '' }>
                        <button className='newOptionButton optionButton'>
                            <span className='newSpan optionSpan'>
                                New
                            </span>
                        </button>
                    </Link>
                    <Link className='oldOptionLink optionLink' to={ '' }>
                        <button className='oldOptionButton optionButton'>
                            <span className='oldSpan optionSpan'>
                                Old   
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Sort;