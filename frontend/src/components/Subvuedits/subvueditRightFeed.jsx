import React from 'react';
import { Link } from 'react-router-dom';
import Advertisement from '../MiscFeed/advertisement';

const SubvueditRightFeed = ({subInfo}) => {
    const { sub_name, sub_count, descriptions } = subInfo.currentSubvuedit ? subInfo.currentSubvuedit : '';

    return (
        <div className='rightFeed'>
            <div className='subRightFeedContainer'>
                <div className='subDetailsContainer'>
                    <div className='comDetailsContainer'>
                        <div className='comDetails'>Community Details</div>
                    </div>
                    <div className='subDetailsDiv'>
                        <div className='subDetHeader'>
                            <img className='subDetImg' alt='' src="https://styles.redditmedia.com/t5_2s30g/styles/communityIcon_7wkagvae7jd01.png"/>
                            <Link className='subDetSubLink' to={ `/subvuedits/${sub_name}` }>
                                <span className='subDetLinkSpan'>{ `v${sub_name}` }</span>
                            </Link>
                        </div>
                        <div className='subDetNumbers'>
                            <div className='subSubNumbers'>
                                <p className='subNums'>{sub_count}</p>
                                <p className='subP'>Subscribers</p>
                            </div>
                        </div>
                        <p className='subDetDet'>{descriptions}</p>
                        <div className='subDetSubCreate'>
                            <Link className='subSubLink' to={''}>Subscribe</Link>
                            <Link className='subCreateLink' to={''}>Create Post</Link>
                        </div>
                    </div>
                </div>
                <Advertisement subPage={true}/>
            </div>
        </div>
    )
}

export default SubvueditRightFeed;

