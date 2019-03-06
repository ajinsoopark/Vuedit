import React from 'react';
import PostContainer from '../Posts/postsContainer';
import MiscContainer from '../MiscFeed/miscContainer';
import FilterContainer from '../Filter/filterContainer';

import '../../stylesheets/homeFeed.css';

const Home = () => {
    return (
        <div className='homePage'>
            <FilterContainer class={'viewAndSort'}/>
            <div className='homeFeed'>
                <PostContainer />
                <MiscContainer />
            </div>
        </div>
    )
}

export default Home;