import { 
        ADD_POST,
        CURRENT_POST,
        REPLACE_POSTS,
        SUBVUEDIT_POSTS,
        USERS_POSTS } from '../actions/posts';

const initialState = {
    changesMade: true,
    currentPost: null,
    postFeed: [],
    subvueditPosts: [],
    usersPosts: null
};

const postReducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case ADD_POST: {
            if (newState.changesMade) {
                newState.postFeed = [...newState.postFeed, ...action.payload]
                newState.changesMade = false
                return newState
            }
            break;
        }
        case REPLACE_POSTS: {
            if (newState.changesMade) {
                newState.postFeed = [...action.payload]
                newState.changesMade = false
                return newState
            }
            break;
        }
        case CURRENT_POST: {
            newState.currentPost = action.payload
            return newState
        }
        case SUBVUEDIT_POSTS: {
            newState.subvueditPosts = action.payload
            return newState
        }
        case USERS_POSTS: {
            newState.usersPosts = action.payload
            return newState
        }
        default: {
            return newState;
        }
    }
    
    return newState;
}

export default postReducer;