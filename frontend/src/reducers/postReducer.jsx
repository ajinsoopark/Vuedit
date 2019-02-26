import { ADD_POST,
         CURRENT_POST } from '../actions/postActions';

const initialState = [];

const postReducer = (state = initialState, action) => {
    let newState = [...state];

    switch (action.type) {
        case ADD_POST: {
            return newState = newState.concat(action.payload)
        }
        case CURRENT_POST: {
            newState = action.payload
            return newState
        }
    }
    
    return newState;
}

export default postReducer;