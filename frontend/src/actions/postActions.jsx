import * as PostAPIUtil from '../utils/postUtils';

export const ADD_POST = 'ADD_POST';

export const addPost = payload => ({ type: ADD_POST, payload });

export const fetchAllPosts = () => dispatch => {
    return PostAPIUtil.fetchAllPosts()
    .then(posts => dispatch(addPost(posts.data.data)))
}
