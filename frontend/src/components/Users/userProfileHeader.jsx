import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfileHeader extends Component {

    render () {
        return (
            <div className='userProfileHeaderContainer'>
                <div className='userProfileHeader'>
                    <div className='userProfileHeaderContent'>
                        <Link className='headerLinks' to={''}>
                            Overview
                        </Link>
                        <Link className='headerLinks' to={ '' }>
                            Posts
                        </Link>
                        <Link className='headerLinks' to={ '' }>
                            Comments
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfileHeader;