import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

class Post extends Component {

    render () {
       
        return (
            <div className='post'>
                <div className='votingArea'>
                    <div className='voteDiv'>
                        <button className='upvoteButton'>
                            <div className='upvoteIconDiv'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='upSVG' viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                            </div>
                        </button>
                        <div className='voteSum' >
                            {this.props.voteSum ? this.props.voteSum : 0}
                        </div>
                        <button className='downvoteButton'>
                            <div className='downvoteIconDiv'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='downSVG' viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                            </div>
                        </button>
                    </div>
                    </div>
                <div className='postContent'>
                    <div className='postTimeUserSub'>
                        <div className='timeUserSub'>
                            <Link className='subvueditLink' to={ '' }>
                                <img alt='' className='linkIcon' src='https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png'>
                                </img>
                            </Link>
                            <Link className='subvuedit' to={ '' }>
                                 { `v${this.props.subvuedit}` }
                            </Link>
                            <span className="visuals">•</span>
                            <span className="postedBy">Posted by</span>
                            <Link className='authorUsername' to={ '' }>
                                { ` u/${this.props.username}` }
                            </Link>
                            <span className='timeCreated'><TimeAgo className='timeAgo' date={ this.props.createdTime }/></span>
                        </div>
                    </div>
                    <div className='postTitle'>
                        <span className='titleSpan'>
                            <Link className='titleLink' to={ `/posts/${this.props.id}` }>
                                <h2 className='titleHeader'>{ this.props.title }</h2>
                            </Link>
                        </span>
                    </div>
                    <div className='commentsDiv'>
                        <Link className='commentsLink' to={ '' }>
                            { `${this.props.commentCount ? this.props.commentCount : 0 } Comments` }
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;