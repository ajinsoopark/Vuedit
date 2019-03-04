import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../stylesheets/currentPostRight.css'

class CurrentPostRight extends Component {
    
    render () {
        const { sub_name, sub_description } = this.props.postInfo ? this.props.postInfo : ''

        return (
            <div className='postRightContainer'>
                <div className='rightFeedDiv'>
                    <div className='subvueditContainer'>
                        <div className='subvueditDiv'>
                            <div className='subSplash'></div>
                            <div className='subName'>
                                <img className='subIcon' alt='' src="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_z7dkyeif8kzz.png"/>
                                <Link className='subLink' to={ '' }>
                                    <span className='subSpan'>  
                                        { `v${sub_name}` }
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentPostRight