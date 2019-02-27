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
                <svg className='sortArrow' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><path fill="inherit" d="M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535"></path></g></svg>
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