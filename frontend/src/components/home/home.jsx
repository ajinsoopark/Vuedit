import React from 'react';
import PostContainer from '../postsComponent/postsContainer';
import MiscContainer from '../miscFeedComponent/miscContainer';
import FilterContainer from '../filterComponent/filterContainer';

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