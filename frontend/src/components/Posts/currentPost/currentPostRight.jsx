import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../stylesheets/currentPostRight.css'
import Advertisement from '../../MiscFeed/advertisement';

class CurrentPostRight extends Component {

    componentDidUpdate () {
        if (this.props.postInfo && this.props.subvuedits.currentSubvuedit === null) {
            this.props.fetchSubvuedit(this.props.postInfo.sub_id)
        }
    }
    
    render () {
        const { sub_name, sub_description } = this.props.postInfo ? this.props.postInfo : '';
        const { sub_count, id } = this.props.subvuedits.currentSubvuedit ? this.props.subvuedits.currentSubvuedit : '';
        
        return (
            <div className='postRightContainer rightFeedDiv'>
                {/* <div className='rightFeedDiv'> */}
                    <div className='subvueditContainer'>
                        <div className='subvueditDiv'>
                            <div className='subSplash'></div>
                            <div className='subName'>
                                <img className='subIcon' alt='' src="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_z7dkyeif8kzz.png"/>
                                <Link className='subLink' to={ `/subvuedits/${id}` }>
                                    <span className='subSpan'>  
                                        { `v${sub_name}` }
                                    </span>
                                </Link>
                            </div>
                            <div className='subCountDiv'>
                                <div className='subCountArea'>
                                    <p className='subCountP'>
                                        { sub_count }
                                    </p>
                                    <p className='subscribersP'>
                                        Subscribers
                                    </p>
                                </div>
                            </div>
                            <p className='descriptionP'>
                                { `${sub_description}` }   
                            </p>
                            <div className='subscribeButtonDiv'>
                                <button className='subscribeButton'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <Advertisement feed={'postAd'}/>
                {/* </div> */}
            </div>
        )
    }
}

export default CurrentPostRight