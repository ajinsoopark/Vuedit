import { CURRENT_COMMENTS } from '../actions/commentActions';

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
        }
    }
    
    return newState;
}

export default commentReducer;