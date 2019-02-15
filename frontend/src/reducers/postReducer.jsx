import { ADD_POST } from '../actions/actionTypes';

const initialState = {};

const postReducer = (state = initialState, action) => {
    let newState = {...state};

    if (action.type === ADD_POST) {
        newState.posts = newState.posts.concat(action.payload)
    }
    return newState;
}

export default postReducer;