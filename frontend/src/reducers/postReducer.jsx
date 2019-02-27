import { 
        ADD_POST,
        CURRENT_POST,
        REPLACE_POSTS } from '../actions/postActions';

const initialState = {
    changesMade: true,
    currentPost: null,
    postFeed: []
};

const postReducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case ADD_POST: {
            if (newState.changesMade) {
                newState.postFeed = [...newState.postFeed, ...action.payload]
                newState.changesMade = false
                return newState
                break;
            }
        }
        case REPLACE_POSTS: {
            if (newState.changesMade) {
                newState.postFeed = [...action.payload]
                newState.changesMade = false
                return newState
                break;
            }
        }
        case CURRENT_POST: {
            newState.currentPost = action.payload
            return newState
            break;
        }
    }
    
    return newState;
}

export default postReducer;