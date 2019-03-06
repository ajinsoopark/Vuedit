import React, { Component } from 'react';

class PostVoteArea extends Component {

    render () {
        const { vote_sum } = this.props.postInfo ? this.props.postInfo : '';

        return (
            <div className='postVoteContainer'>
                <div className='voteArea'>
                    <button className='voteButton'>
                        <div className='upVoteDiv voteDiv'>
                            <svg className='upSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                        </div>
                    </button>
                    <div className='voteSumDiv'>
                        { vote_sum ? vote_sum : 0 }
                    </div>
                    <button className='voteButton'>
                        <div className='downVoteDiv voteDiv'>
                            <svg className='downSVG' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default PostVoteArea;