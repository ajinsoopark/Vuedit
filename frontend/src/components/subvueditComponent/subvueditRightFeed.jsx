import React from 'react';
import { Link } from 'react-router-dom';

const SubvueditRightFeed = ({subInfo}) => {
    const { sub_name, sub_count } = subInfo.currentSubvuedit ? subInfo.currentSubvuedit : '';

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
                        <p className='subDetDet'>{}</p>
                        <div className='subDetSubCreate'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubvueditRightFeed;

