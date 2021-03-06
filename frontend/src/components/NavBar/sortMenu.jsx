import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SortMenu extends Component {

    render () {
        return (
            <div className='sortMenuContainer'>
                <Link className='popularSortLink navSortLink' to={ '' }><svg className='navSortSVG' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.625 0c.61 7.189-5.625 9.664-5.625 15.996 0 4.301 3.069 7.972 9 8.004 5.931.032 9-4.414 9-8.956 0-4.141-2.062-8.046-5.952-10.474.924 2.607-.306 4.988-1.501 5.808.07-3.337-1.125-8.289-4.922-10.378zm4.711 13c3.755 3.989 1.449 9-1.567 9-1.835 0-2.779-1.265-2.769-2.577.019-2.433 2.737-2.435 4.336-6.423z"/></svg></Link>
                <Link className='allSortLink navSortLink' to={ '' }><svg className='navSortSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h-6v-6h6v6zm8-9h-6v9h6v-9zm8-4h-6v13h6v-13zm0-11l-6 1.221 1.716 1.708-6.85 6.733-3.001-3.002-7.841 7.797 1.41 1.418 6.427-6.39 2.991 2.993 8.28-8.137 1.667 1.66 1.201-6.001z"/></svg></Link>
                <Link className='newSortLink navSortLink' to={ '' }><svg className='navSortSVG' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.139 2.63l3.068-1.441.786 3.297 3.39.032-.722 3.312 3.038 1.5-2.087 2.671 2.087 2.67-3.038 1.499.722 3.312-3.39.033-.786 3.296-3.068-1.441-2.139 2.63-2.138-2.63-3.068 1.441-.787-3.296-3.389-.033.722-3.312-3.039-1.499 2.088-2.67-2.088-2.671 3.039-1.5-.722-3.312 3.389-.032.787-3.297 3.068 1.441 2.138-2.63 2.139 2.63zm-3.742 2.342l-2.303-1.081-.59 2.474-2.542.024.542 2.483-2.279 1.125 1.566 2.004-1.566 2.002 2.279 1.124-.542 2.485 2.542.025.59 2.472 2.303-1.081 1.603 1.972 1.604-1.972 2.301 1.081.59-2.472 2.543-.025-.542-2.485 2.279-1.124-1.565-2.002 1.565-2.004-2.279-1.125.542-2.483-2.543-.024-.59-2.474-2.301 1.081-1.604-1.972-1.603 1.972zm1.603 9.528c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1-.947h-2v-6.553h2v6.553z"/></svg></Link>
            </div>
        )
    }
}

export default SortMenu;