import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

class PostHeaderInfo extends Component {
    
    render () {
        const { sub_name, username, created_at, sub_id, user_id } = this.props.postInfo ? this.props.postInfo : '';
        console.log(this.props)
        return (
            <div className='postHeaderInfo'>
                <div className='subIconDiv'>
                    <Link className='subIconLink' to={ `/subvuedits/${sub_id}` }>
                        <img className='subImg' alt='' src='https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png'/>
                    </Link>
                </div>
                <div className='headerTextContainer'>
                    <div className='headerText'>
                        <div className='subTextDiv'>
                            <Link className='subLink' to={ `/subvuedits/${sub_id}` }>
                                { `v${sub_name}` }
                            </Link>
                        </div>
                        <span className='dotDivider'>•</span>
                        <span className='postedSpan'>Posted by</span>
                        <div className='userNameDiv'>
                            <Link className='userNameLink' to={ `/user/${user_id}` }>
                                { `u/${username}` }
                            </Link>
                        </div>
                        <TimeAgo className='timeAgo' date={ created_at }/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostHeaderInfo;