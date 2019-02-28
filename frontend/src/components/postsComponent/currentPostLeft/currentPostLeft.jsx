import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CurrentPostSplash from './currentPostSplash';
import SortContainer from '../../commentsComponent/sortContainer';
import PostVoteArea from './postVoteArea';
import PostHeaderInfo from './postHeaderInfo';
import SignUp from './signUpComponent';
import '../../../stylesheets/currentPostLeft.css';

class CurrentPostLeft extends Component {
    
    render () {
        const { id, comment_count, body, title } = this.props.posts.currentPost ? this.props.posts.currentPost : '';

        return (
            <div className='mainLeftContainer'>
                <div className='mainLeft'>
                    <CurrentPostSplash />
                    <div className='postContentDiv'>
                        <div className='postContentContainer'>
                            <div className='postContent'>
                                <PostVoteArea
                                postInfo={ this.props.posts.currentPost }
                                />
                                <PostHeaderInfo
                                postInfo={ this.props.posts.currentPost }
                                />
                                <div className='postTitle'>
                                    <span className='titleSpan'>
                                        <h2 className='titleH2'>
                                            { title }
                                        </h2>
                                    </span>
                                </div>
                                <div className='postBody'>
                                    <div className='bodyContent'>
                                        { body }
                                    </div>
                                </div>
                                <div className='postCommentContainer'>
                                    <div className='postCommentInfo'>
                                        <div className='commentCountDiv'>
                                            <svg className='commentSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/></svg>
                                            <span className='commentCount'>
                                                { `${comment_count ? comment_count : 0} comments` }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SignUp />
                    <SortContainer />
                </div>
            </div>
        )
    }
}

export default CurrentPostLeft;;