import * as CommentAPIUtils from '../utils/comments';

export const CURRENT_COMMENTS = 'CURRENT_COMMENTS';

export const currentComments = payload => ({ type: CURRENT_COMMENTS, payload });


export const fetchPostComments = (postId) => dispatch => {
    return CommentAPIUtils.fetchPostComments(postId)
    .then(comments => dispatch(currentComments(comments.data.data)))
};

export const fetchUserComments = (userId) => dispatch => {
    return CommentAPIUtils.fetchUserComments(userId)
    .then(comments => dispatch(currentComments(comments.data.data)))
}