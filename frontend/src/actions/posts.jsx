import * as PostAPIUtil from '../utils/posts.js';

export const ADD_POST = 'ADD_POST';
export const CURRENT_POST = 'CURRENT_POST';
export const REPLACE_POSTS = 'REPLACE_POSTS';
export const USERS_POSTS = 'USERS_POSTS';
export const SUBVUEDIT_POSTS = 'SUBVUEDIT_POSTS'

export const addPost = payload => ({ type: ADD_POST, payload });
export const currentPost = payload => ({ type: CURRENT_POST, payload });
export const replacePosts = payload => ({ type: REPLACE_POSTS, payload });
export const usersPosts = payload => ({ type: USERS_POSTS, payload });
export const subPosts = payload => ({ type: SUBVUEDIT_POSTS, payload });

export const fetchPost = (id) => dispatch => {
    return PostAPIUtil.fetchPost(id)
    .then(post => dispatch(currentPost(post.data.data)))
}

export const fetchAllPosts = () => dispatch => {
    return PostAPIUtil.fetchAllPosts()
    .then(posts => dispatch(replacePosts(posts.data.data)))
}

export const fetchSubvueditPosts = (subId) => dispatch => {
    return PostAPIUtil.fetchSubvueditPosts(subId)
    .then(posts => dispatch(subPosts(posts.data.data)));
}

export const fetchUserPosts = (userId) => dispatch => {
    return PostAPIUtil.fetchUserPosts(userId)
    .then(posts => dispatch(usersPosts(posts.data.data)))
}
