import React from 'react';
import PostContainer from '../postsComponent/postsContainer';
import MiscContainer from '../miscFeedComponent/miscContainer';

import '../../stylesheets/homeFeed.css';

const Home = () => {
    return (
        <div className='homeFeed'>
            <PostContainer />
            <MiscContainer />
        </div>
    )
}

export default Home;