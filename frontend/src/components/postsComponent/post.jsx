import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

class Post extends Component {
    constructor (props) {
        super (props)
        this.state = {
            voteSum: null,
            commentCount: null
        }
    }

    componentDidMount () {
        this.fetchPostVotes();
        this.fetchPostComments();
    }

    fetchPostVotes () {
        if (this.props.id) {
            axios
            .get(`/votes/posts/${this.props.id}`)
            .then(votes => {
                return votes.data.data
            })
            .then(votes => {
                if (!votes.length) {
                    this.setState({ voteSum: 0 })
                } else {
                    let voteSum = 0;
                    votes.forEach(voteObj => {
                        voteSum += voteObj.vote
                    })
                    this.setState({ voteSum: voteSum })
                }
            })
        }
    }

    fetchPostComments () {
        if (this.props.id) {
            axios
            .get(`/comments/posts/${this.props.id}`)
            .then(comments => {
                return comments.data.data
            })
            .then(comments => {
                this.setState({ commentCount: comments.length })
            })
        }
    }


    render () {
        const { voteSum, commentCount } = this.state;

        return (
            <div className='post'>
                <div className='postVoting'>
                    {voteSum}
                </div>
                <div className='postContent'>
                    <div className='postTimeUserSub'>
                        <div className='timeUserSub'>
                            <Link className='subvueditLink' to={ '' }>
                                <img className='linkIcon' src='https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png'>
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
                            <Link className='titleLink' to={ '' }>
                                <h2 className='titleHeader'>{ this.props.title }</h2>
                            </Link>
                        </span>
                    </div>
                    <div className='commentsDiv'>
                        <Link className='commentsLink' to={ '' }>
                            { `${commentCount} Comments` }
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;