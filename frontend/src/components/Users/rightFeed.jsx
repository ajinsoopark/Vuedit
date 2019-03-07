import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';

class RightFeed extends Component {

    render () {
        const { id, username, avatar, email, created_at } = this.props.currentViewingProfile ? this.props.currentViewingProfile : ''

        console.log(this.props)
        return (
            <div className='rightFeedContainer'>
                <div className='rightFeedUserProfile'>
                    <div className='userProfileContent'>
                        <div className='userProfileSplash'></div>
                        <div className='userProfileAvatarContainer'>
                            <img className='userProfileAvatar' src={avatar} alt=''/>
                        </div>
                        <Link className='profileUserLink' to={ `/user/${id}` }>
                            { `u/${username}` }
                        </Link>
                        <
                    </div>
                </div>
            </div>
        )
    }
}

export default RightFeed;

