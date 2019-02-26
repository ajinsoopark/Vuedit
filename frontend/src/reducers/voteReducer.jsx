import { ADD_POST_VOTES } from '../actions/voteActions'


const initialState = [];

const voteReducer = (state = initialState, action) => {
    let newState = [...state];
    
    return newState;
}

export default voteReducer;