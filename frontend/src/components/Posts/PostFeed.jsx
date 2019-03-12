import React, { Component } from 'react';
import Post from './post';
import '../../stylesheets/Posts.css';

class PostsFeed extends Component {

    componentDidMount () {
        this.props.fetchAllPosts();
    }
    
    render () {
         
        if (this.props.posts.postFeed) {
            const post = this.props.posts.postFeed.map(postObj => {
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
                    user_id={ postObj.user_id }
                    />
                )
            });
            return (
                <div className='postFeed'>
                <div className='homeSplash'>
                    <h1 className='splashHeader'>Welcome to Vuedit!</h1>
                    <span className='splashSpan'>Come for the cats, stay for the empathy.</span>
                </div>
                <div className='postsType'>
                    Popular Posts
                </div>
                    {post}
                </div>
            )
        } else return null 
    }
}

export default PostsFeed;