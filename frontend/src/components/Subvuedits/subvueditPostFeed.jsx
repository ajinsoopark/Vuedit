import React, { Component } from 'react';

import Post from '../Posts/post';

class SubvueditPostFeed extends Component {

    render () {
        if (this.props.posts) {
            const post = this.props.posts.map(postObj => {
                return (
                    <Post
                    key={ postObj.id }
                    id={ postObj.id }
                    title={ postObj.title }
                    body={ postObj.body }
                    username={ postObj.username }
                    createdTime={ postObj.created_at }
                    subvuedit={ postObj.sub_name }
                    voteSum={ postObj.vote_sum }
                    commentCount={ postObj.comment_count }
                    sub_id={ postObj.sub_id }
                    />
                )
            });
            return (
                <div className='postFeed'>
                    { post }
                </div>
            )
        }
    }
}

export default SubvueditPostFeed;