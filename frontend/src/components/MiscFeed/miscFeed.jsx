import React from 'react';
import Advertisement from './advertisement';

const MiscFeed = () => {
    const feed = 'homeAd'

    return (
        <div className='miscFeed'>
            <Advertisement feed={feed}/>
        </div>
    )
}

export default MiscFeed;