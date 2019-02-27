import * as PostAPIUtil from '../utils/postUtils';

export const ADD_POST = 'ADD_POST';
export const CURRENT_POST = 'CURRENT_POST';
export const REPLACE_POSTS = 'REPLACE_POSTS';

export const addPost = payload => ({ type: ADD_POST, payload });
export const currentPost = payload => ({ type: CURRENT_POST, payload });
export const replacePosts = payload => ({ type: REPLACE_POSTS, payload });

export const fetchPost = (id) => dispatch => {
    return PostAPIUtil.fetchPost(id)
    .then(post => dispatch(currentPost(post.data.data)))
}

export const fetchAllPosts = () => dispatch => {
    return PostAPIUtil.fetchAllPosts()
    .then(posts => dispatch(replacePosts(posts.data.data)))
}
