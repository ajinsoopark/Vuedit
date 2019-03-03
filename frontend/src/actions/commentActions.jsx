import * as CommentAPIUtils from '../utils/commentUtils';

export const CURRENT_COMMENTS = 'CURRENT_COMMENTS';

export const currentComments = payload => ({ type: CURRENT_COMMENTS, payload });

export const fetchPostComments = (postId) => dispatch => {
    return CommentAPIUtils.fetchPostComments(postId)
    .then(comments => dispatch(currentComments(comments.data.data)))
};