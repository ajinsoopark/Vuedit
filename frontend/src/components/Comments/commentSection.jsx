import React from 'react';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';
import CommentVoteArea from './commentVoteArea';

const CommentSection = ({ comment }) => {   
    let nestedComments;
    if (comment) {
        nestedComments = comment.children.map(childComment => {

            return <CommentSection  key={childComment.id} comment={childComment}/>
        })
    }

    return (
        <ul>
            <li>
                <div className='commentSection'>
                    <CommentVoteArea />
                    <div className='commentContent'>
                        <div className='commentHeaderDiv'>
                            <div className='commentUsername'>
                                <Link className='commentUserLink' to={ '' }>
                                    { comment.username  }
                                </Link>
                            </div>
                            <span className='commentDotDivider'> · </span>
                            <div className='commentCreatedTime'>
                                <TimeAgo date={comment.created_at}/>
                            </div>
                            <div className='commentHeaderSpacing'></div>
                        </div>
                        <div className='commentBodyDiv'>
                            <div className='commentBody'>
                                <p>
                                    {comment.body}
                                </p>
                            </div>
                        </div>
                        <div className='commentReplyButtonDiv'>
                            <button className='commentReplyButton'>
                                <svg className='commentSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/></svg>
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
                {nestedComments}
            </li>
        </ul>
    )
}

export default CommentSection;