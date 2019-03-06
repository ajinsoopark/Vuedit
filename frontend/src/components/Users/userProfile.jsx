import React, { Component } from 'react';
import '../../stylesheets/userProfile.css';
import UserProfileHeader from './userProfileHeader';
import UserProfileSortBar from './userProfileSortBar'

class UserProfile extends Component {

    render () {
        return (
            <div className='userProfileContainerOuter'>
                <div className='userProfileContainerInner'>
                    <UserProfileHeader />
                    <UserProfileSortBar />
                </div>
            </div>
        )
    }
}

export default UserProfile;