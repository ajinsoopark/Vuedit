import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
 
const UserComments = ({...props}) => {

    return (
        <div className='userCommentContainer'>
            <div className='userCommentHeader'>
                <div className='userCommentHeaderContent'>
                    <svg className='commentSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/></svg>
                    <div className='userCommentContent'>
                        <Link className='userProfileLink' to={ `/user/${props.user_id}` }>
                            {props.username}
                        </Link>
                            commented on
                        <div className='userCommentedPost'>
                            <Link className='commentedPostLink' to={ `/posts/${props.post_id}` }>
                                <h2 className='postH2'>
                                    {props.post_title}
                                </h2>
                            </Link>
                        </div>
                        <span className='dotDividerSpan'>•</span>
                        <div className='userCommentSub'>
                            <Link className='commentSubLink' to={ `/subvuedits/${props.sub_id}` }>
                                {`v${props.sub_name}`}
                            </Link>
                        </div>
                        <div className='userCommentTime'>
                            <TimeAgo className='commentedTime' date={props.created_at}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='userCommentBody'>
                <div className='commentBodySpacer'></div>
                <div className='userCommentDiv'>
                    <div className='userCommentNameHeader'>
                        <div className='userCommentName'>
                            <Link className='commenterNameLink' to={ `/user/${props.user_id}` }>
                                { props.username }
                            </Link>
                        </div>
                    </div>
                    <div className='userComment'>
                        <p className='userPComment'>{props.body}</p>
                    </div>
                    <div className='userCommentReplyDiv'>
                        <button className='userReplyButton'>
                            Reply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserComments;