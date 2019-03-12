import React, { Component } from 'react';
import '../../stylesheets/NavBar.css';

class SearchForm extends Component {
    
    render () {
        return (
            <div className='navSearchBar'>
                <label className='searchLabel' htmlFor='searchFormInput'>
                    <svg className='searchSvg'>
                        <g>
                            <path d='M12.4743167,11.1299698 L14.6957506,13.2817166 C15.0924476,13.665969 15.1025359,14.2990536 14.7182834,14.6957506 C14.334031,15.0924476 13.7009464,15.1025359 13.3042494,14.7182834 L11.0486163,12.5334103 C10.0079655,13.2768564 8.73367013,13.7142857 7.35714286,13.7142857 C3.84600096,13.7142857 1,10.8682847 1,7.35714286 C1,3.84600096 3.84600096,1 7.35714286,1 C10.8682847,1 13.7142857,3.84600096 13.7142857,7.35714286 C13.7142857,8.76975383 13.2536226,10.0747029 12.4743167,11.1299698 Z M11.7142857,7.35714286 C11.7142857,4.95057046 9.76371525,3 7.35714286,3 C4.95057046,3 3,4.95057046 3,7.35714286 C3,9.76371525 4.95057046,11.7142857 7.35714286,11.7142857 C9.76371525,11.7142857 11.7142857,9.76371525 11.7142857,7.35714286 Z'>
                            </path>
                        </g>
                    </svg>
                </label>
                <form className='searchForm' autoComplete='off'>
                    <input type='search' id='searchFormInput' className='searchFormInput' placeholder='Search Vuedit'/>
                </form>
            </div>
        )
    }
}

export default SearchForm;