import React, { Component } from 'react';

import '../../stylesheets/userProfile.css';
import UserProfileHeader from './userProfileHeader';
import UserProfileSortBar from './userProfileSortBar'
import LeftFeedContainer from './leftFeedContainer';

class UserProfile extends Component {

    componentDidMount () {
        const userId = parseInt(this.props.match.params.id);
        this.props.fetchUser(userId);
        this.props.fetchUserComments(userId);
        this.props.fetchUserPosts(userId);
    }

    render () {
        console.log(this.props)
        return (
            <div className='userProfileContainerOuter'>
                <div className='userProfileContainerInner'>
                    <UserProfileHeader />
                    <UserProfileSortBar />
                    <div className='userContentContainer'>
                        <LeftFeedContainer />
                    </div>    
                </div>
            </div>
        )
    }
}

export default UserProfile;