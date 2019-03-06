import { CURRENT_COMMENTS } from '../actions/comments';

const initialState = {
    currentComments:[],
    changesMade: true,

}

const commentReducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case CURRENT_COMMENTS: {
            if (newState.changesMade) {
                newState.currentComments = action.payload;
                return newState
            }
            break;
        }
        default: {
            return newState
        }
    }
    
    return newState;
}

export default commentReducer;