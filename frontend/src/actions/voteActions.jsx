import * as VoteAPIUtil from '../utils/votingUtils';

export const ADD_POST_VOTES = 'ADD_POST_VOTES';

export const addPostVotes = payload => ({ type: ADD_POST_VOTES, payload })

export const fetchPostVotes = (postId) => dispatch => {
    return VoteAPIUtil.fetchPostVotes(postId)
    .then(votes => dispatch(addPostVotes(votes.data.data)))
}