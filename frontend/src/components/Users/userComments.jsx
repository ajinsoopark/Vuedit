import React from 'react';
import { Link } from 'react-router-dom';
 
const UserComments = ({...props}) => {


    return (
        <div className='userCommentContainer'>
            <div className='userCommentHeader'>
                <div className='userCommentHeaderContent'>
                    <svg className='commentSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/></svg>
                    <div className='userCommentContent'>
                        <Link className='userProfileLink' to={ '/users' }>
                        </Link>
                        commented on 
                        <div className='userCommentedPost'>
                        </div>
                        <span className='dotDividerSpan'>•</span>
                        <div className='userCommentSub'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserComments;