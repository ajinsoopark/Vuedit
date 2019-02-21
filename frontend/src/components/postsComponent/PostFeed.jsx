import React from 'react';
import Post from './post';

const PostsFeed = ({...props}) => {
    console.log(props.posts)
    let post;
    if (props.posts) {
        post = props.posts.map(postObj => {
            return (
                <Post
                key={ postObj.id }
                userId={postObj.user_id}
                subId={postObj.sub_id}
                title={postObj.title}
                body={postObj.body}
                />
            )
        })
    }
    return (
        <div>
           {post}
        </div>
    )
}

export default PostsFeed;